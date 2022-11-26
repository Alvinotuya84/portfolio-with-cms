import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
type Props = {}

function ExperienceCard({}: Props) {
  return (
     <article className="flex flex-col rounded-lg space-y-7 flex-shrink-0 items-center w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
     cursor-pointer transition-opacity duration-200 overflow-hidden
     ">
        <motion.img
        initial={{y:-100,
        opacity: 0}}
        transition={{duration:1.2}}
        whileInView={{
            y: 0,
            opacity: 1,

        }}
        viewport={{once:true}}
        className="w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center" src="https://pbs.twimg.com/profile_images/1203183522732822528/musXeHQy_400x400.jpg" alt=''/>
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Lead Mobile Developer</h4>
            <p className="font-bold text-2xl mt-1">AutoLink Ventures</p>
            <div className="flex space-x-2 my-2">
            <img className="h-10 w-10 rounded-full" src="https://www.flaticon.com/svg/vstatic/svg/6422/6422234.svg?token=exp=1669391224~hmac=d238700756e328ab03102dc25d74aa24" alt='Profile'/>

            </div>
            <p className="uppercase py-5 text-gray-500">Started work .. ended...</p>
            <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>

            </ul>
        </div>
     </article>
    )
}

export default ExperienceCard