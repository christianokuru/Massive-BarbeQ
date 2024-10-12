import Image from "next/image";
import HeroImaage from "@/public/heroImage.jpeg"

export default function Hero() {
    return(
        <div>
            <div>
                <h1 className="text-center text-gray-300 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pt-5 pb-3">
                    The <span className="bg-gradient-to-t from-amber-900 to-yellow-300 bg-clip-text text-transparent">Smokey</span> Goodness Awaits You!
                </h1>
            </div>
            {/* subheading */}
            <p className="text-gray-400 text-center leading-7 [&:not(:first-child)]:mt-0">
                Enjoy the rich flavors of traditional BBQ, prepared with care, just for you!
            </p>
            {/* image */}
            <div className="py-5">
                <Image src={HeroImaage} alt="Hero_image" height={450} width={450} className="rounded-md border-4 border-[#212121]"/>
            </div>
        </div>
    )
}