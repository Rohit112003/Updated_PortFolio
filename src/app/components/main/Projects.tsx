import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className=" h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/ngo.png"
          title="BlockChain Campaign"
        //   link="https://github.com/Rohit112003/BlockChain-CamPaign"
      
        />
        <ProjectCard
          src="/Certificate.png"
          title="Real-World Ceritificate System using BlockChain"
        //   link="https://github.com/Rohit112003/BirthCertificate_Dapp"
        />
        <ProjectCard
          src="/netflix.png"
          title="A Netlix Clone"
        //   link="https://github.com/Rohit112003/netflix_clone_with_tailwind"
         
        />
      </div>
    </div>
  );
};

export default Projects;