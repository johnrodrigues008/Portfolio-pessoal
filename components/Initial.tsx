"use client";

import { ContacteMe } from "./ContacteMe";
import { CustomDock } from "./CustomDock";
import { Education } from "./Education";
import { Into } from "./Into";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { WorkExperience } from "./WorkExperience";

export default function Initial() {
  return (
    <main className="w-full lg:w-10/12 lg:mx-auto lg:items-center overflow-hidden">
      <Into />
      <WorkExperience />
      <Education />
      <Skills />
      <Projects />
      <ContacteMe />
      <CustomDock />
    </main>
  );
}
