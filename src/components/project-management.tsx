import Image from "next/image";

export default function ProjectManagement() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Content */}
        <div className="space-y-8">
          {/* Section Label */}
          <span className="text-[#EB268F] font-medium">Our Services</span>

          {/* Main Heading */}
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Project Management & EPC/EPIC
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg">
            From engineering to construction, our Project Management and
            EPC/EPIC services ensure that every aspect of your project is
            handled with precision and expertise, delivering results on time and
            within budget.
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
                  <rect x="2" y="2" width="20" height="20" rx="2" />
                  <line x1="6" y1="6" x2="18" y2="6" />
                  <line x1="6" y1="12" x2="18" y2="12" />
                  <line x1="6" y1="18" x2="18" y2="18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Complete Lifecycle Management
              </h3>
              <p className="text-gray-600">
                We oversee every phase of your project, from initial design to
                final construction, ensuring seamless integration and execution.
              </p>
              <button className="inline-flex items-center px-6 py-2 border border-gray-900 text-base font-medium rounded-md text-gray-900 hover:bg-gray-50 transition-colors">
                Learn more
              </button>
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Cost-Effective Solutions
              </h3>
              <p className="text-gray-600">
                Our approach maximizes efficiency and minimizes costs,
                delivering high-quality results that align with your budget.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-[600px] lg:h-auto">
          <Image
            src="/placeholder.jpg"
            alt="Project management team meeting"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
