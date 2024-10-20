import React from "react"
import { Pencil, Trash2, Brain, Target, LayoutGrid, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Link } from "react-router-dom"

interface MindmapCard {
    id: string
    title: string
    subtitle: string
    type: "mindmap" | "central-concept"
}

const mindmapData: MindmapCard[] = [
    { id: "1", title: "test1", subtitle: "test1", type: "mindmap" },
    { id: "2", title: "helo", subtitle: "helo", type: "central-concept" },
    { id: "3", title: "test2", subtitle: "test2", type: "central-concept" },
    { id: "4", title: "test1", subtitle: "test1", type: "central-concept" },
    { id: "5", title: "test", subtitle: "test", type: "mindmap" },
]

const getIcon = (type: "mindmap" | "central-concept") => {
    switch (type) {
        case "mindmap":
            return <Brain className="h-5 w-5 text-gray-500" />
        case "central-concept":
            return <Target className="h-5 w-5 text-pink-500" />
        default:
            return <LayoutGrid className="h-5 w-5 text-green-500" />
    }
}

export default function MindmapPage() {
    return (
        <>
            <h1 className="section-title">Sơ đồ tư duy</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 min-h-[656px] gap-4">
                {mindmapData.map((card) => (
                    <Card key={card.id} className="flex flex-col h-80">
                        <CardHeader className="bg-gray-200 aspect-video flex items-center justify-center">
                            <h2 className="text-4xl font-bold text-gray-400">
                                {card.title}
                            </h2>
                        </CardHeader>
                        <CardContent className="flex-grow flex-col py-3 px-4">
                            <h3 className="text-xl font-bold">{card.title}</h3>
                            <p className="text-gray-600 mt-1">
                                {card.subtitle}
                            </p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center px-4">
                            <Button
                                className="flex-grow mr-2"
                                variant="default"
                                asChild
                            >
                                <Link to={"/editor/abc"}>
                                    <Pencil className="h-4 w-4 mr-2" />
                                    Chỉnh sửa
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon">
                                <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="mt-8">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </>
    )
}
