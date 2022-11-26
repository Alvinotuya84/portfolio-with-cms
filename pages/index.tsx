import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

import styles from '../styles/Home.module.css'
import { Experience, PageInfo, Project, Skill, Social } from '../typing'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocial } from '../utils/fetchSocial'
type Props={
  pageInfo:PageInfo;
  experiences:Experience[];
  projects:Project[];
  skills:Skill[];
  socials:Social[];
}


export default function Home(     { pageInfo,
  experiences,
  projects,
  skills,
  socials}:Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
     scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{pageInfo?.name}</title>
        <meta name="description" content="Alvin Otuya Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header socials={socials}/>
      <section id='hero' className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience/>
      </section>
      <section id="skills" className="snap-start">
        <Skills/>
      </section>
      <section id="projects" className="snap-start">
        <Projects/>
      </section>
      <section id="contact" className="snap-start">
        <ContactMe/>
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src="https://pbs.twimg.com/profile_images/1203183522732822528/musXeHQy_400x400.jpg"alt=""/>
          </div>

        </footer>
      </Link>
    </div>
  )
}


export const getStaticProps: GetStaticProps<Props>=async()=>{
   const pageInfo:PageInfo= await fetchPageInfo()
   const experiences:Experience[]=await fetchExperiences();
   const skills:Skill[]=await fetchSkills();
   const projects:Project[]=await fetchProjects();
   const socials:Social[]=await fetchSocial()

   return {
    props:{
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
    },
    revalidate:3600
   }
}