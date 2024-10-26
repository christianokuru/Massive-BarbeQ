/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-orange-600 to-red-700 py-16 md:py-24 mt-11">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Ready for the Ultimate BBQ Experience!
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-xl">
            Join us for mouthwatering flavors, expert grilling tips, and exclusive recipes. Don't miss out on our special offers!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-red-700 hover:bg-orange-100 hover:text-red-800 transition-colors duration-300"
          >
            <Link href="https://wa.me/08102569891" target="_blank" rel="noopener noreferrer">
              Order Now!
            </Link>
          </Button>
        </div>
        <div className="md:w-1/2 text-white">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <address className="not-italic">
            47 Ferguson Osagie Rd, Dangote, off Alaja Rd, Megida, Ayobo, Lagos<br />
            </address>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-orange-200 transition-colors duration-300">
                <Facebook size={24} aria-hidden="true" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-orange-200 transition-colors duration-300">
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
  </section>
  );
}
