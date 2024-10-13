import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Save, Trash2 } from "lucide-react"
import React, { useState } from "react"

const GeneralOrgSettings = () => {
    const [orgName, setOrgName] = useState("Cao Hiep K17HL's Org")

    const handleDeleteOrg = () => {
        console.log("Organization deleted")
    }

    return (
        <Card className="w-full flex-grow flex flex-col">
            <CardHeader>
                <CardTitle className="text-xl">Cài đặt nhóm</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-6">
                <form className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="org-name" className="font-semibold">
                            Tên nhóm
                        </Label>
                        <Input
                            id="org-name"
                            placeholder="VD: Nhóm của Cóc chăm học"
                            value={orgName}
                            onChange={(e) => setOrgName(e.target.value)}
                        />
                    </div>
                </form>
                <div className="space-y-4">
                    <Label className="font-semibold text-orange-600 block">
                        Vùng nguy hiểm
                    </Label>
                    <Button variant="destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Xóa nhóm
                    </Button>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button variant="success">
                    <Save className="mr-2 h-4 w-4" />
                    Lưu
                </Button>
            </CardFooter>
        </Card>
    )
}

export default GeneralOrgSettings
