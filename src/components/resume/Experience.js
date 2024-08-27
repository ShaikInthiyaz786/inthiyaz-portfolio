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
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-4xl font-bold">Web Certifications</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full-stack training"
            subTitle="Nxtwave Disruptive Technologies"
            result="CERTIFICATE"
            link="https://drive.google.com/file/d/1O6SNTLFtaECVXptARRwsbnssqJQ7bJw4/view?usp=drive_link"
            des="Nxtwave Disruptive Technologies training provided comprehensive full-stack development skills through hands-on projects and real-world problem-solving."
          />
          <ResumeCard
            title="Programming experience"
            subTitle="Nxtwave Disruptive Technologies"
            result="CERTIFICATE"
            link="https://drive.google.com/file/d/1kuYBoUyIHpAuU7Js4hXWt1gSLxr3kEVv/view?usp=sharing"
            des="Nxtwave Disruptive Technologies strengthened my Python programming skills through intensive hands-on projects and real-world application development."
          />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Programing Certifications</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="AWS cloud Virtual Internship"
            subTitle="AWS cloud Virtual Internship in EduSkills"
            result="CERTIFICATE"
            link="https://drive.google.com/file/d/1hI9FZiVbqqQQDqm9TI8Nx4yGmHYnvi6o/view?usp=sharing"
            des="I gained hands-on experience with AWS services like EC2, S3, and Lambda, enhancing my skills in cloud infrastructure management and deployment."
          />
          <ResumeCard
            title="JAVA PROGRAMMING INTERNSHIP"
            subTitle="Java Programming Internship in DevSkillHub"
            result="CERTIFICATE"
            link="https://drive.google.com/file/d/1MxxYqhjKQ1xOUYrO0EugEgJshXmE6SQw/view?usp=sharing"
            des="My Java Programming Internship provided practical experience in building and optimizing Java applications, sharpening my technical and analytical skills."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
