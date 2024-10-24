import Image from "next/image";

const logos = [
  {
    name: "Vercel",
    url: "/logo (1).jpg",
  },
  {
    name: "Vercel",
    url: "/logo (2).png",
  },
  {
    name: "Vercel",
    url: "/logo (3).jpg",
  },
  {
    name: "Nextjs",
    url: "/logo (4).jpg",
  },
  {
    name: "Webflow",
    url: "/logo (5).jpg",
  },
  {
    name: "Airbnb",
    url: "/logo (6).jpg",
  },
  {
    name: "Tina",
    url: "/logo (7).jpg",
  },
  {
    name: "Mistral",
    url: "/logo (8).jpg",
  },
  {
    name: "Mistral",
    url: "/logo (9).jpg",
  },
];

export default function LogoCloud() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-900 mb-12">
          Trusted by Industry Leaders
        </h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {/* First row */}
          <div className="col-span-1 flex justify-center">
            <Image
              src={logos[0].url}
              alt={logos[0].name}
              width={164}
              height={108}
              className="object-contain h-12"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              src={logos[1].url}
              alt={logos[1].name}
              width={164}
              height={108}
              className="object-contain h-12"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              src={logos[2].url}
              alt={logos[2].name}
              width={164}
              height={108}
              className="object-contain h-12"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              src={logos[3].url}
              alt={logos[3].name}
              width={164}
              height={108}
              className="object-contain h-12"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              src={logos[4].url}
              alt={logos[4].name}
              width={164}
              height={108}
              className="object-contain h-12"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              src={logos[5].url}
              alt={logos[5].name}
              width={164}
              height={108}
              className="object-contain h-12"
            />
          </div>

          {/* Second row - centered */}
          <div className="col-span-2 md:col-span-1 flex justify-center lg:col-start-2">
            <Image
              src={logos[6].url}
              alt={logos[6].name}
              width={164}
              height={108}
              className="object-contain h-12"
            />
          </div>
          <div className="col-span-2 md:col-span-1 flex justify-center">
            <Image
              src={logos[7].url}
              alt={logos[7].name}
              width={164}
              height={108}
              className="object-contain h-12"
            />
          </div>
          <div className="col-span-2 md:col-span-1 flex justify-center">
            <Image
              src={logos[8].url}
              alt={logos[8].name}
              width={164}
              height={108}
              className="object-contain h-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
