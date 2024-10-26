import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Products from "@/app/component/MenuPics";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Menu() {
  return (
    // the arrow thing
    <div className="container mx-auto px-12"> 
      <h1 className="text-center scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-[15px]  pt-7">
        Our Menu
      </h1>
      <p className="leading-7 [&:not(:first-child)] text-center text-xs mt-[-20px] mb-2 text-[#D84315]">
        MASSIVE BARBEQUE
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-0 text-center text-gray-700 pb-3">
        Experience the warmth of our BBQ kitchen, where every dish is made with
        care and devotion. Browse our menu and find your new favorite!
      </p>
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {Products.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="pt-[115px] h-full">
                <Card className="relative bg-[#D84315] text-white h-full pt-16 flex flex-col px-4">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-[#FFD54F] p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={product.picture}
                        alt={product.name}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold text-center pt-16">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <div className="space-y-2 flex-grow">
                      <div className="flex justify-between">
                        <p>{product.prop}</p>
                        <p>{product.price}</p>
                      </div>
                      <div className="flex justify-between">
                        <p>{product.prop2}</p>
                        <p>{product.price2}</p>
                      </div>
                      <div className="flex justify-between">
                        <p>{product.prop3}</p>
                        <p>{product.price3}</p>
                      </div>
                      <div className="flex justify-between">
                        <p>{product.prop4}</p>
                        <p>{product.price4}</p>
                      </div>
                      <div className="flex justify-between">
                        <p>{product.prop5}</p>
                        <p>{product.price5}</p>
                      </div>
                    </div>
                    <div className="mt-auto pt-4">
                      <Link href={"https://wa.me/08102569891"} target="_blank" rel="noopener noreferrer">
                        <Button
                          className="w-full bg-[#212121] text-white font-semibold"
                          variant={"link"}
                        >
                          Order Now
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
