import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Products from "@/app/component/MenuPics"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-8">Our Menu</h1>
      <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
        <CarouselContent>
          {Products.map((product, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={product.picture}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 backdrop-blur-md">
                      <h3 className="text-white font-semibold truncate">{product.name}</h3>
                      <p className="text-white">₦{product.price.toFixed(2)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}