import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Internship = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          <h2 className="text-4xl font-bold">Internship</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
      </div>
    </motion.div>
  );
};

export default Internship;
