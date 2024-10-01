import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { PencilIcon, CheckIcon, UserIcon, PhoneIcon, MailIcon, ArrowLeftIcon } from "lucide-react"
import { Link } from "react-router-dom"


export function ProfileSettingPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Nguyễn Văn A",
    gender: "Nam",
    email: "aNguyenVan123@gmail.com",
    phone: "(+84) 0123 456 789",
    membership: "Premium" // or "Free"
  })
  const [avatarUrl, setAvatarUrl] = useState("/placeholder.svg?height=256&width=256")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleGenderChange = (value: string) => {
    setProfile({ ...profile, gender: value })
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleAvatarClick = () => {
    if (isEditing && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setAvatarUrl(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-gradient-to-r from-blue-600 to-blue-400 py-8 relative">
        <Link to="/dashboard">
          <Button variant="ghost" className="absolute top-4 left-4 text-white hover:text-blue-100">
            <ArrowLeftIcon className="h-6 w-6 mr-2" />
            Quay lại Dashboard
          </Button>
        </Link>
        <h1 className="text-4xl font-bold text-center text-white">Trang cá nhân</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 flex flex-col items-center space-y-6">
              <Avatar className="w-48 h-48 cursor-pointer border-4 border-white shadow-lg" onClick={handleAvatarClick}>
                <AvatarImage src={avatarUrl} alt={profile.name} />
                <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
                disabled={!isEditing}
              />
              {isEditing && (
                <p className="text-sm text-muted-foreground text-center">Nhấn vào avatar để thay đổi hình ảnh</p>
              )}
              <Badge variant={"default"} className="text-lg px-6 py-2">
                Hội viên: {profile.membership}
              </Badge>
              <Button onClick={toggleEdit} className="w-full" variant={isEditing ? "default" : "outline"}>
                {isEditing ? (
                  <>
                    <CheckIcon className="w-4 h-4 mr-2" />
                    Lưu
                  </>
                ) : (
                  <>
                    <PencilIcon className="w-4 h-4 mr-2" />
                    Chỉnh sửa
                  </>
                )}
              </Button>
            </div>
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <UserIcon className="w-6 h-6 text-blue-500" />
                  <div className="space-y-2 flex-1">
                    <Label htmlFor="name" className="text-lg font-semibold">Tên</Label>
                    {isEditing ? (
                      <Input
                        id="name"
                        name="name"
                        value={profile.name}
                        onChange={handleInputChange}
                        className="text-lg"
                      />
                    ) : (
                      <p className="text-2xl font-bold">{profile.name}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <UserIcon className="w-6 h-6 text-blue-500" />
                  <div className="space-y-2 flex-1">
                    <Label htmlFor="gender" className="text-lg font-semibold">Giới tính</Label>
                    {isEditing ? (
                      <Select value={profile.gender} onValueChange={handleGenderChange}>
                        <SelectTrigger id="gender" className="text-lg">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Nam">Nam</SelectItem>
                          <SelectItem value="Nữ">Nữ</SelectItem>
                          <SelectItem value="Khác">Khác</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <p className="text-xl">{profile.gender}</p>
                    )}
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MailIcon className="w-6 h-6 text-blue-500" />
                  <div className="space-y-2 flex-1">
                    <Label htmlFor="email" className="text-lg font-semibold">Email</Label>
                    <p className="text-xl">{profile.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <PhoneIcon className="w-6 h-6 text-blue-500" />
                  <div className="space-y-2 flex-1">
                    <Label htmlFor="phone" className="text-lg font-semibold">Số điện thoại</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={profile.phone}
                        onChange={handleInputChange}
                        className="text-lg"
                      />
                    ) : (
                      <p className="text-xl">{profile.phone}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}