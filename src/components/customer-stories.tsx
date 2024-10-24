import Image from "next/image";

type StatItemProps = {
  number: string;
  description: string;
};

const StatItem = ({ number, description }: StatItemProps) => {
  return (
    <div className="space-y-2">
      <h3 className="text-4xl md:text-5xl font-bold text-indigo-700">
        {number}
      </h3>
      <p className="text-gray-800">{description}</p>
    </div>
  );
};

export default function CustomerStories() {
  const stats = [
    {
      number: "20+",
      description: "Successful Projects Completed",
    },
    {
      number: "500+ km",
      description: "Pipelines Constructed & Maintained",
    },
    {
      number: "10 Years",
      description: "Industry Experience",
    },
    {
      number: "10+",
      description: "Expert Professionals",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="text-[#EB268F] font-medium">Customer Stories</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Delivering Excellence by the Numbers
            </h2>
            <p className="text-gray-700 text-lg">
              Our track record speaks for itself. At Shanhad Integrated Services
              Limited, we measure success by the impact we create for our
              clients.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                number={stat.number}
                description={stat.description}
              />
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[500px] lg:h-[600px]">
          <Image
            fill
            src="/blog4.jpg"
            alt="Professional looking at success"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
