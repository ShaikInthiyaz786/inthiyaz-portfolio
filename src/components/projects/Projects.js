import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree, chatting, socialMedia, todoList } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Hangout Meals"
          des="Developed a food delivery web application using React, Node.js, 
          and MongoDB to address a problem I personally experienced. The application 
          facilitates connections between customers and offers a solution to the issue."
          src={projectOne}
          link="http://hangoutmeals.in"
        />
        <ProjectsCard
          title="Chatting App"
          des="Developed a full-stack chat app using the MERN stack with real-time messaging, 
          JWT authentication, group chat, profile management, responsive design, and search functionality."
          src={chatting}
          link="https://talk-a-tive-7fgq.onrender.com/"
        />
        <ProjectsCard
          title="Video Streaming Website"
          des="Developed a video streaming website with user authentication, video upload, real-time streaming, 
          and responsive design using React, Node.js."
          src={projectTwo}
          link="https://nxthup.ccbp.tech/"
        />
        <ProjectsCard
          title="E-commerce"
          des="Developed an e-commerce website for lunch box meals using the MERN stack, featuring product listings, 
          customer reviews, secure payment integration, and order management."
          src={projectThree}
          link="https://nandhanxttrendz.ccbp.tech/login"
        />
        <ProjectsCard
          title="Todo List"
          des="Built a dynamic to-do list website with task management, prioritization, and real-time updates using 
          HTML, CSS, JavaScript, and React."
          src={todoList}
          link="https://todositems.netlify.app/"
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE "
          des="Developed a social media platform with user profiles, posts, comments, likes, and real-time notifications 
          using the MERN stack."
          src={socialMedia}
        />
      </div>
    </section>
  );
};

export default Projects;
