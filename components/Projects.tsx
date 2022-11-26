import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

function Projects({}: Props) {
    const projects=[1,2,3,4,5]
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0 ">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80">
                {projects.map((project,index)=>(
                    <div key={index} className=" flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img
                    initial={{
                        opacity: 0,
                        y: -300,

                    }}
                    transition={{
                        duration:1.2
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true
                    }}

                    className="" src="https://pbs.twimg.com/profile_images/1203183522732822528/musXeHQy_400x400.jpg" alt="" />
                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center"><span className="underline decoration-[#F7AB0A]/50">Case Study {index+1} of {projects.length}</span>:Uber clone</h4>
                        <p className="text-lg text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sed aperiam rem, ducimus esse provident minima est nulla. Possimus ad sed incidunt, maiores laborum a ducimus autem deserunt praesentium mollitia?</p>
                    </div>
                    </div>
                ))
                 }
            </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  )
}

export default Projects