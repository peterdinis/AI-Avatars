"use client"

import { FC, useState } from "react";
import Image from "next/image"
import { Card, CardContent } from "~/components/ui/card";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis, 
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "~/components/ui/pagination"

const DashboardUploadedImages: FC = () => {
    const ITEMS_PER_PAGE = 8
    const [currentPage, setCurrentPage] = useState(1)

    const images = [
        {
            id: 1,
            src: "/placeholder.svg?height=400&width=400",
            alt: "Image 1",
        },
        {
            id: 2,
            src: "/placeholder.svg?height=400&width=400",
            alt: "Image 2",
        },
        {
            id: 3,
            src: "/placeholder.svg?height=400&width=400",
            alt: "Image 3",
        },
        {
            id: 4,
            src: "/placeholder.svg?height=400&width=400",
            alt: "Image 4",
        },
    ]

    const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const paginatedImages = images.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image) => (
                    <Card key={image.id} className="overflow-hidden">
                        <CardContent className="p-0">
                            <div className="relative aspect-square">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform hover:scale-105"
                                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <Pagination className="mt-10">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                setCurrentPage((prev) => Math.max(prev - 1, 1))
                            }}
                            isActive={currentPage !== 1}
                        />
                    </PaginationItem>
                    {[...Array(totalPages)].map((_, i) => {
                        const page = i + 1
                        // Show first page, current page, last page, and pages around current page
                        if (
                            page === 1 ||
                            page === totalPages ||
                            (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                            return (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setCurrentPage(page)
                                        }}
                                        isActive={currentPage === page}
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        } else if (
                            page === currentPage - 2 ||
                            page === currentPage + 2
                        ) {
                            return (
                                <PaginationItem key={page}>
                                    <PaginationEllipsis />
                                </PaginationItem>
                            )
                        }
                        return null
                    })}
                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                            }}
                            isActive={currentPage !== totalPages}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default DashboardUploadedImages