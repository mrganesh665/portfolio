import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

// renamed the component to Education
// This component displays education and job experience in two sections: Education Quality and Job Experience.
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor  Of Technology(B.Tech)"
            subTitle="Punjab Technical University(2020 - 2024)"
            result="7.6/10"
            des="Throughout my Bachelor  Of Technology(B.Tech) at the Punjab Technical University, 
           Completed Bachelor of Technology in Electronics and Communication Engineering with a strong inclination toward software development and programming. Focused on building logical thinking, problem-solving, and analytical skills applicable to software engineering. Actively explored software technologies alongside core academics, strengthening adaptability to modern development environments. This combination of engineering fundamentals and software focus supports effective problem-solving in real-world applications."
          />
          <ResumeCard
            title="Higher Secondary education"
            subTitle="Don Bosco Senior Sec. School (2019)"
            result="7.25/10"
            des="Completed Higher Secondary education with Physics, Chemistry, and Mathematics (PCM) as core subjects. Built a solid understanding of mathematical reasoning, scientific principles, and analytical problem-solving. Developed structured thinking and quantitative skills essential for engineering and technology fields. Actively engaged in academic learning and practical problem analysis, laying the groundwork for future studies in engineering and technology."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Blooming Buds Academy (2017)"
            result="8.8/10"
            des="Completed Secondary School education with a well-rounded academic curriculum. Developed strong fundamentals in mathematics, science, and language skills. Built discipline, consistency, and a structured learning approach during early academic years. This stage laid the foundation for higher technical and analytical studies."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024-2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Development Trainee"
            subTitle="Qspiders - (July 2024 - Aug 2024)"
            result="NOIDA"
            des="Gained hands-on experience in software development practices and coding standards."
          />
           <ResumeCard
            title="React Native Developer Intern"
            subTitle="Doj Apps - (Sep 2024 - Dec 2024)"
            result="NOIDA"
            des="Worked on mobile app features, bug fixes, and performance improvements in collaboration with senior developers."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Unico Global Solutions - (Jan 2025 - Dec 2025)"
            result="REMOTE"
            des="Developed user-friendly interfaces and contributed to the e-commerce platform UI."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
