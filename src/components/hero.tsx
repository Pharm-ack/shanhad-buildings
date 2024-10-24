import Link from "next/link";
import { MoveUpRight, Phone } from "lucide-react";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
          {/* Hero Title */}
          <h2 className="mb-4 text-4xl tracking-tighter font-bold md:text-6xl">
            Powering <span className="text-[#EB268F]">Innovation </span> in Oil
            & Gas Solutions
          </h2>
          <p className="mx-auto mb-5 text-sm text-gray-500 sm:text-xl md:mb-6 lg:mb-8">
            Shanhad Integrated Services Limited offers a full spectrum of
            services tailored to the oil and gas industry. From engineering and
            procurement to pipeline construction and fabrication, we deliver
            innovative solutions that drive efficiency and success across your
            projects. Trust us to bring expertise and excellence to every phase
            of your operations.
          </p>
          {/* Hero Button */}
          <div className="flex gap-x-4 items-stretch justify-center">
            <Link
              className="flex items-center justify-center rounded-md gap-x-1 bg-[#3E4095] px-4 py-2 text-sm font-medium text-white shadow"
              href="#"
            >
              Explore Our Services
              <MoveUpRight className="w-4 h-4" />
            </Link>

            <Link
              className="flex items-center justify-center rounded-md gap-x-2 bg-white border border-[#191919] px-4 py-2 text-sm font-medium"
              href="#"
            >
              <Phone className="w-4 h-4" /> Get In Touch
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Image
          width={1678}
          height={662}
          priority
          src="/heroImage.jpg"
          alt="Hero Image"
          className="inline-block max-h-[512px] w-full object-cover"
        />
      </div>
    </section>
  );
}
