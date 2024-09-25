import { Button } from "@/components/ui/button"
import { Cover } from "@/components/ui/cover"
import { FlipWords } from "@/components/ui/flip-words"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import { Input } from "@/components/ui/input"
import { RainbowButton } from "@/components/ui/rainbow-button"
import SparklesText from "@/components/ui/sparkles-text"
import {
    BrainCircuit,
    FileUp,
    Sparkles,
    Zap,
    MessageSquare,
    Share2,
} from "lucide-react"
import { Link } from "react-router-dom"

export function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
                <div className="container flex items-center justify-between">
                    <Link className="flex items-center justify-center" to="#">
                        <BrainCircuit className="h-6 w-6 text-primary" />
                        <span className="ml-2 text-2xl font-bold">MindGPT</span>
                    </Link>
                    <nav className="flex gap-4 sm:gap-6">
                        <Link
                            className="text-sm font-medium hover:underline underline-offset-4"
                            to="#features"
                        >
                            Tính năng
                        </Link>
                        <Link
                            className="text-sm font-medium hover:underline underline-offset-4"
                            to="#pricing"
                        >
                            Các gói
                        </Link>
                        <Link
                            className="text-sm font-medium hover:underline underline-offset-4"
                            to="#contact"
                        >
                            Liên hệ
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <HeroHighlight>
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
                                        Biến{" "}
                                        {/* <FlipWords
                                        words={[
                                            "Ý Tưởng",
                                            "Tài Liệu",
                                            "Trang Web",
                                        ]}
                                        className="-mx-1"
                                    /> */}
                                        {/* <Highlight>Mọi Thứ</Highlight> */}
                                        <Cover>Mọi Thứ</Cover> Trở Thành{" "}
                                        <SparklesText text="Sơ Đồ Tư Duy" />
                                    </h1>
                                </HeroHighlight>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    MindGPT sử dụng trí tuệ nhân tạo AI để tạo
                                    sơ đồ tư duy từ những ý tưởng, tài liệu mà
                                    bạn tải lên và hiển thị chúng một cách trực
                                    quan.
                                    <br /> Bạn hoàn toàn có thể chỉnh sửa nó
                                    theo ý thích.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <RainbowButton>
                                    Bắt đầu sáng tạo ngay
                                </RainbowButton>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="features"
                    className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
                >
                    <div className="container px-4 md:px-6 mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                            Tính năng
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center text-center">
                                <Sparkles className="h-12 w-12 text-primary mb-4 capitalize" />
                                <h3 className="text-xl font-bold mb-2">
                                    Sử dụng sức mạnh của AI tạo sinh
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Tạo ra sơ đồ tư duy chỉ từ những ý tưởng đơn
                                    giản bằng việc sử dụng AI
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <FileUp className="h-12 w-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-2 capitalize">
                                    Hỗ trợ upload tài liệu
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Cấu trúc hóa tài liệu của bạn thành sơ đồ tư
                                    duy chỉ chưa đầy 1 phút
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Zap className="h-12 w-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-2">
                                    Instant Visualization
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    See your ideas come to life in seconds with
                                    our real-time mind map generation.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <MessageSquare className="h-12 w-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-2">
                                    Collaborative Editing
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Work together with your team to refine and
                                    expand your mind maps in real-time.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Share2 className="h-12 w-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-2">
                                    Easy Sharing
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Share your mind maps with others or export
                                    them in various formats for presentations.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <BrainCircuit className="h-12 w-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-2">
                                    Continuous Learning
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Our AI improves with each use, providing
                                    increasingly accurate and relevant mind
                                    maps.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="pricing"
                    className="w-full py-12 md:py-24 lg:py-32"
                >
                    <div className="container px-4 md:px-6 mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                            Pricing Plans
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
                            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold mb-4">
                                    Basic
                                </h3>
                                <p className="text-4xl font-bold mb-4">
                                    $9.99
                                    <span className="text-base font-normal">
                                        /month
                                    </span>
                                </p>
                                <ul className="mb-6 space-y-2">
                                    <li className="flex items-center">
                                        <Sparkles className="h-5 w-5 text-primary mr-2" />
                                        Up to 10 mind maps per month
                                    </li>
                                    <li className="flex items-center">
                                        <Sparkles className="h-5 w-5 text-primary mr-2" />
                                        Basic AI generation
                                    </li>
                                    <li className="flex items-center">
                                        <Sparkles className="h-5 w-5 text-primary mr-2" />
                                        Export as PNG
                                    </li>
                                </ul>
                                <Button className="mt-auto">Choose Plan</Button>
                            </div>
                            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-primary">
                                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                                <p className="text-4xl font-bold mb-4">
                                    $24.99
                                    <span className="text-base font-normal">
                                        /month
                                    </span>
                                </p>
                                <ul className="mb-6 space-y-2">
                                    <li className="flex items-center">
                                        <Sparkles className="h-5 w-5 text-primary mr-2" />
                                        Unlimited mind maps
                                    </li>
                                    <li className="flex items-center">
                                        <Sparkles className="h-5 w-5 text-primary mr-2" />
                                        Advanced AI generation
                                    </li>
                                    <li className="flex items-center">
                                        <Sparkles className="h-5 w-5 text-primary mr-2" />
                                        Export in multiple formats
                                    </li>
                                    <li className="flex items-center">
                                        <Sparkles className="h-5 w-5 text-primary mr-2" />
                                        Collaboration features
                                    </li>
                                </ul>
                                <Button className="mt-auto">Choose Plan</Button>
                            </div>
                            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold mb-4">
                                    Enterprise
                                </h3>
                                <p className="text-4xl font-bold mb-4">
                                    Custom
                                </p>
                                <ul className="mb-6 space-y-2">
                                    <li className="flex items-center">
                                        <Sparkles className="h-5 w-5 text-primary mr-2" />
                                        All Pro features
                                    </li>
                                    <li className="flex items-center">
                                        <Sparkles className="h-5 w-5 text-primary mr-2" />
                                        Dedicated support
                                    </li>
                                    <li className="flex items-center">
                                        <Sparkles className="h-5 w-5 text-primary mr-2" />
                                        Custom integrations
                                    </li>
                                    <li className="flex items-center">
                                        <Sparkles className="h-5 w-5 text-primary mr-2" />
                                        On-premise deployment options
                                    </li>
                                </ul>
                                <Button className="mt-auto">
                                    Contact Sales
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="contact"
                    className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
                >
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Ready to Transform Your Ideas?
                                </h2>
                                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Start creating AI-powered mind maps today.
                                    Sign up for our newsletter to get the latest
                                    updates and exclusive offers.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                    <Input
                                        className="max-w-lg flex-1"
                                        placeholder="Enter your email"
                                        type="email"
                                        required
                                    />
                                    <Button type="submit">Subscribe</Button>
                                </form>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    By subscribing, you agree to our Terms of
                                    Service and Privacy Policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="w-full py-6 px-4 md:px-6 border-t">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
                        © 2023 MindGPT. All rights reserved.
                    </p>
                    <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
                        <Link
                            className="text-xs hover:underline underline-offset-4"
                            to="#"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            className="text-xs hover:underline underline-offset-4"
                            to="#"
                        >
                            Privacy
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    )
}
