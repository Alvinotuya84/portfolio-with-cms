import React from 'react'
import {PhoneIcon,MapPinIcon,EnvelopeIcon} from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";


type Props = {}
type Inputs = {
    name: string,
    email: string,
    subject:string,
    message:string
  };
function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
       window.location.href= `mailto:otuyaalvin33@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.  ${formData.message} ${formData.email}`;
    };
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center ">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact </h3>
        <div>
            <h4 className="text-4xl font-semibold text-center">
                I have got just what you need .{" "}
                <span className="decoration-[#F7AB0A]/50 underline">Lets Talk</span>
            </h4>
        </div>
        <div className="space-y-10">
        <div className="flex items-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
            <p className="text-2xxl">+254799039109</p>
        </div>
        <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
            <p className="text-2xxl">otuyaalvin@gmail.com</p>
        </div>
        <div className="flex items-center space-x-5">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
            <p className="text-2xxl">Nairobi, Kenya</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-2">
                <input {...register("name")} type="text" placeholder='Name' className="contactInput"   />
                <input {...register("email")} type="email" placeholder='Email' className="contactInput"  />
            </div>
            <input {...register("subject")} placeholder="Subject" type="text" className="contactInput"  name="" id="" />
            <textarea {...register("message")} placeholder="Message" name=""  className="contactInput" id="" />
            <button type="submit" className="bg-[#F7AB0A] py-5 rounded-md text-black font-bold text-lg">Submit</button>
        </form>
        </div>

    </div>
  )
}

export default ContactMe