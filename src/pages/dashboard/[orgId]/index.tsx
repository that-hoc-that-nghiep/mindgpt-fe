import React, { useMemo } from "react"
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
import { Link, useParams } from "react-router-dom"
import { useMindmaps } from "../_api/hooks"
import { useQueryParams } from "@/hooks"
import MindmapCard from "../_compoments/mindmap-card"

const PAGE_SIZE = "10"

export default function MindmapPage() {
    const { orgId } = useParams()
    const { page, keyword } = useQueryParams()
    const { data, isLoading } = useMindmaps(
        orgId,
        PAGE_SIZE,
        page || "1",
        keyword
    )
    const totalPage = useMemo(() => {
        if (data?.data.total) {
            return Math.ceil(data.data.total / parseInt(PAGE_SIZE))
        }
        return 0
    }, [data?.data.total])

    return (
        <>
            <h1 className="section-title">Sơ đồ tư duy</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 min-h-[656px] gap-4">
                {isLoading ||
                    data.data.mindmaps.map((mindmap) => (
                        <MindmapCard mindmap={mindmap} key={mindmap._id} />
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
