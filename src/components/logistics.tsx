import Image from "next/image";

export default function Logistics() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Image */}
        <div className="relative h-[600px] lg:h-auto">
          <Image
            src="/placeholder2.jpg"
            alt="Warehouse storage facility with long aisles of shelving"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          {/* Section Label */}
          <span className="text-[#EB268F] font-medium">Our Services</span>

          {/* Main Heading */}
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Logistics & Procurement
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg">
            Our Logistics and Procurement services are designed to optimize your
            supply chain, ensuring timely delivery and the highest quality of
            materials and equipment.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-8 pt-4">
            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 12h16M4 12l4-4m-4 4l4 4" />
                  <rect x="12" y="4" width="8" height="16" rx="2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Reliable Supply Chain
              </h3>
              <p className="text-gray-600">
                We ensure that your projects are supported by a dependable
                supply chain, reducing delays and keeping your operations on
                track.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Our procurement processes prioritize quality, sourcing only the
                best materials and equipment to meet your project
                specifications.
              </p>
            </div>
          </div>

          {/* Learn More Button */}
          <button className="inline-flex items-center px-6 py-2 border border-gray-900 text-base font-medium rounded-md text-gray-900 hover:bg-gray-50 transition-colors">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
