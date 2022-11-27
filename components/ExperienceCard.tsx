import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { Experience } from '../typing'
import { urlFor } from '../sanity'
type Props = {
    experience:Experience
}


function ExperienceCard({experience}: Props) {


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
        className="w-full  xl:w-full xl:h-[200px] object-cover object-center" src={urlFor(experience?.companyImage).url()} alt=''/>
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
            <p className="font-bold text-2xl mt-1">{experience?.company}</p>
            <div className="flex space-x-2 my-2">
            {
                experience?.technologies.map((technology,index)=>(
<img key={index} className="h-10 w-10 rounded-full" src={urlFor(technology?.image).url()} alt='Profile'/>
                ))
            }

            </div>
            <p className="uppercase py-5 text-gray-500">{experience?.isCurrentWorkingHere?'Ended':'Still Working'}</p>
            <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
                {
                    experience?.points?.map((point,index)=>(
                        <li key={index} className="flex space-x-2 my-2">{point}</li>
                    ))
                }


            </ul>
        </div>
     </article>
    )
}

export default ExperienceCard