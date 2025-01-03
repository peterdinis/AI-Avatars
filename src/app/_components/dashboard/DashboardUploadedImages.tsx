import { FC } from "react";
import Image from "next/image"
import { Card, CardContent } from "~/components/ui/card";

const DashboardUploadedImages: FC = () => {
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
        {
          id: 5,
          src: "/placeholder.svg?height=400&width=400",
          alt: "Image 5",
        },
        {
          id: 6,
          src: "/placeholder.svg?height=400&width=400",
          alt: "Image 6",
        },
      ]

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
    </div>
    )
}

export default DashboardUploadedImages