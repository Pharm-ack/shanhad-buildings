import CustomerStories from "@/components/customer-stories";
import Fabrication from "@/components/fabrication";
import Hero from "@/components/hero";
import Logistics from "@/components/logistics";
import LogoCloud from "@/components/logo-cloud";
import ProjectManagement from "@/components/project-management";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoCloud />
      <ProjectManagement />
      <Logistics />
      <Fabrication />
      <Projects />
      <CustomerStories />
    </div>
  );
}
