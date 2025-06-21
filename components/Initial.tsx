import { Bio } from "./Bio";
// import { ContacteMe } from "./ContacteMe";
import { CustomDock } from "./CustomDock";
import { Education } from "./Education";
import { Into } from "./Into";
/* import { OtherProjects } from "./OtherProjects"; */
import { Projects } from "./Projects";
// import { Skills } from "./Skills";
// import { WorkExperience } from "./WorkExperience";

export default function Initial() {
  return (
    <main className="w-full lg:w-11/12 lg:mx-auto lg:items-center overflow-hidden">
      <Into />
      <Bio />
      <Education />
      <Projects />
      {/* <OtherProjects /> */}
      {/* <WorkExperience /> */}
      {/* <Skills /> */}
      {/* <ContacteMe /> */}
      <CustomDock />
    </main>
  );
}
