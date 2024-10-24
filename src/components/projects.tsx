import Image from "next/image";

type ProjectCardProps = {
  image: string;
  status: string;
  date: string;
  title: string;
  description: string;
};

const ProjectCard = ({
  image,
  status,
  date,
  title,
  description,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative h-64 mb-4">
        <Image
          fill
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="space-y-4">
        <div className="flex gap-4 items-center">
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              status === "Ongoing"
                ? "bg-blue-100 text-blue-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {status}
          </span>
          <span className="text-gray-600">{date}</span>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <button className="flex items-center text-black font-medium hover:underline">
          View Project
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
      image: "/blog1.jpg",
      status: "Ongoing",
      date: "Aug. 2019",
      title: "Production & Installation of Precast Slabs for Facility Fencing",
      description:
        "Shanhad successfully produced and installed 3.5-meter-high precast slabs for the fencing of flow casing and other production facilities. This project ensured enhanced security and durability for the site, with our team delivering a robust and efficient solution tailored to the client's specific requirements.",
    },
    {
      image: "/blog2.jpg",
      status: "Completed",
      date: "Date",
      title: "Construction of Residential Blocks at Citiview Estate",
      description:
        "Shanhad partnered with PropertyMart Real Estate Investment Ltd to construct modern blocks of flats, terraces and maisonettes at Citiview Estate, Arepo. This project delivered high-quality residential units designed for comfort and functionality, enhancing the living experience in the growing Lagos suburb.",
    },
    {
      image: "/blog3.jpg",
      status: "Ongoing",
      date: "Date",
      title: "Construction of 36 Hotel Rooms at Villa Rica Hotel & Resort",
      description:
        "Shanhad completed the construction of 36 luxury hotel rooms at Villa Rica Hotel & Resort, Eleko, Ibeju Lekki. Designed to provide guests with a premium experience, the project combined modern architecture with top-notch amenities, contributing to the resort's reputation as a leading destination in Lagos.",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="text-[#EB268F] font-medium mb-2">Our Projects</p>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              See some of our Projects
            </h2>
            <p className="text-gray-600">
              Delivering Excellence Across Every Project, From Concept to
              Completion
            </p>
          </div>
          <button className="px-6 py-2 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors">
            View all
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
