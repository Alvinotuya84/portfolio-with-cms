import { Skill, Social } from "../typing";

export const fetchSocial= async()=>{
    console.log(process.env.NEXT_PUBLIC_BASE_URL)
    const res =await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
    const data =await res.json()
    const socials:Social[]=data.socials;
    return socials;

}