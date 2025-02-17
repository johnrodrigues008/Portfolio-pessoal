import Into from "@/components/into";
/* import { Meteors } from "@/components/magicui/meteors"; */
import WorkExperience from "@/components/workExperience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContacteMe from "@/components/ContacteMe";
import CustomDock from "@/components/CustomDock";


export default function Home() {
  return (
    <div className="sm:w-full md:w-10/12 mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <main className="w-full lg:w-10/12 lg:mx-auto lg:items-center overflow-hidden">
        {/* <Meteors /> */}
        <Into />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
        <ContacteMe />
        <CustomDock orientation="vertical"/>
      </main>
    </div>
  );
}
