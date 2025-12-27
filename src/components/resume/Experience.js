import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software development Trainee"
            subTitle="Qspiders -  (July 2024 - Aug 2024)"
            result="INDIA"
            des="Gained hands-on experience in software development methodologies, coding standards, and best practices. Worked on implementing features, debugging issues, and understanding real-world application workflows. Improved problem-solving skills by collaborating with team members on development tasks."
          />
          <ResumeCard
            title="React Native Developer Intern"
            subTitle="Doj Apps - (Sep 2024 - Dec 2024)"
            result="INDIA"
            des="Contributed to the development of mobile applications using React Native by implementing new features and enhancing existing functionality. Collaborated closely with senior developers to fix bugs, optimize performance, and improve application stability. Gained experience in writing clean, maintainable code and following mobile development best practices."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Unico Global Solutions - (Jan 2025 - Dec 2025)"
            result="REMOTE"
            des="Worked on building and enhancing user interfaces for web applications using modern front-end technologies. Collaborated with designers and back-end developers to create seamless and responsive user experiences. Focused on writing clean, efficient code while adhering to best practices in front-end development."
          />
        </div>
      </div>
      <div>
        {/* <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2024 - PRESENT{" "}
          </p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Secondary School Teacher"
            subTitle="St. Martins Maikuu Secondary School (2024 - Present)"
            result="KENYA"
            des="Interned at St. Martins Maikuu, gaining experience in classroom management, lesson planning,
            teaching strategies, and student engagement. Developed teaching strategies and contributed to curriculum development."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="FastNet Cyber Solutions (2023 - 2025)"
            result="NAIROBI"
            des="As a Web Developer and Instructor at FastNet Cyber Solutions, I contributed to the design and development of user-friendly web applications."
          />
          <ResumeCard
            title="Software Developer and Trainer"
            subTitle="Kingstar Secondary School (2025 - Present)"
            result="THIKA"
            des="As a Software Developer and Trainer at Kingstar Secondary School, I designed and developed software applications."
          />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Experience;
