/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CTa from "@/public/CTAimage.png"

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-orange-600 to-red-700 py-16 md:py-24 overflow-hidden mt-14">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-5">
            Fresh Barbecue at your Doorstep!
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-xl">
          Indulge in tender, smoky goodness! Our freshly made barbecue is crafted with love and delivered quickly to your doorstep, ensuring a finger-licking experience
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-red-700 hover:bg-orange-100 hover:text-red-800 font-semibold transition-colors duration-300"
          >
            <Link href={"https://wa.me/+2348102569891"} target="_blank" rel="noopener noreferrer">
              Order Now!
            </Link>
          </Button>
        </div>
        <div className="lg:w-1/2 flex flex-col md:flex-row lg:flex-col justify-between">
          <div className="relative w-full h-64 md:h-80 lg:h-96 mb-24 md:mb-0 lg:mb-8">
            <Image
              src={CTa}
              height={80}
              width={900}
              className="rounded-lg"
              alt="CTA fast delivery image"
              priority
            />
          </div>

          {/* Address and social icons */}
          <div className="text-white">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <address className="not-italic">
              47 Ferguson Osagie Rd, Dangote, off Alaja Rd, Megida, Ayobo, Lagos<br />

              </address>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/profile.php?id=100083405384043" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200 transition-colors duration-300">
                  <Facebook size={24} aria-hidden="true" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://www.instagram.com/massivebarbeque?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200 transition-colors duration-300">
                  <Instagram size={24} aria-hidden="true" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://twitter.com" className="hover:text-orange-200 transition-colors duration-300">
                  <Twitter size={24} aria-hidden="true" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}


