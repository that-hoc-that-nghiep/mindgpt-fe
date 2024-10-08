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
        <div className="container mx-auto p-4">
            <div className="mb-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Mindmaps</h1>
                <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                >
                    <Link to={"/dashboard/abc/new"}>
                        <Plus className="h-5 w-5 mr-2" />
                        Create New Mindmap
                    </Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {mindmapData.map((card) => (
                    <Card key={card.id} className="flex flex-col">
                        <CardHeader className="bg-gray-200 h-40 flex items-center justify-center">
                            <h2 className="text-4xl font-bold text-gray-400">
                                {card.title}
                            </h2>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="flex items-center gap-2 mt-2">
                                {getIcon(card.type)}
                                <span className="font-semibold">
                                    {card.type === "mindmap"
                                        ? "Mindmap"
                                        : "Central Concept"}
                                </span>
                            </div>
                            <p className="text-gray-600 mt-1">
                                {card.subtitle}
                            </p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                            <Button
                                className="flex-grow mr-2"
                                variant="default"
                                asChild
                            >
                                <Link to={"/editor/abc"}>
                                    <Pencil className="h-4 w-4 mr-2" />
                                    Edit
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
        </div>
    )
}
