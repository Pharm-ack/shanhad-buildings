import Image from "next/image";

export default function Fabrication() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Content */}
        <div className="space-y-8">
          {/* Section Label */}
          <span className="text-[#EB268F] font-medium">Our Services</span>

          {/* Main Heading */}
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Fabrication & Construction
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg">
            With expertise in fabrication and construction, we deliver robust
            infrastructure, from platforms and pipelines to jackets and
            topsides, tailored to your project&apos;s unique requirements.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
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
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Custom Fabrication
              </h3>
              <p className="text-gray-600">
                We specialize in the precise fabrication of platforms, jackets,
                and modules, ensuring they meet your exact specifications.
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
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Durable Construction
              </h3>
              <p className="text-gray-600">
                Our construction services focus on creating long-lasting
                infrastructure that supports your operations safely and
                efficiently.
              </p>
            </div>
          </div>

          {/* Learn More Button */}
          <button className="inline-flex items-center px-6 py-2 border border-gray-900 text-base font-medium rounded-md text-gray-900 hover:bg-gray-50 transition-colors">
            Learn more
          </button>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-[600px] lg:h-auto">
          <Image
            src="/placeholder3.jpg"
            alt="Industrial construction equipment in action"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>

      {/* See All Services Button */}
      <div className="flex justify-center mt-16">
        <button className="px-8 py-3 bg-indigo-700 text-white font-medium rounded-md hover:bg-indigo-800 transition-colors">
          See all Services
        </button>
      </div>
    </section>
  );
}
