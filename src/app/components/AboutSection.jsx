"use client";
import React, {useTransition, useState} from 'react';
import Image from "next/image";
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content : (
            <ul  className='list-disc pl-2'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>C</li>
                <li>R</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content : (
            <ul className='list-disc pl-2'>
                <li>Bachelor of Computing 2nd University of Guelph</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content : (
            <ul className='list-disc pl-2'>
                <li>Responsive Web Design : FreeCodeCamp</li>
                <li>The Complete Python BootCamp : Udemy</li>
                <li>Data Structures and Algorithms : FreeCodeCamp</li>
            </ul>
        )
    }
]
const AboutSection = ()=>{
    const [tab,setTab] = useState("skills")
    const [isPending,startTransition ] = useTransition();

    const handleTabChange = (id) =>{
        startTransition(()=>{
            setTab(id);
        });
    }
    return (
        <section className='text-white ' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/IMG_2382.jpg" width={500} height={500}/>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4 '>About Me</h2>
                    <p className='text-base lg:text-lg '>
                    I am a second year Computer Science student at the University of Guelph minoring in Mathematics. I am aspiring to become a skilled Software Engineer that writes clean and efficient code. I am looking forward to working at a company where I can apply my Mathematics and Computer Science skills to build something truly amazing. I am a dependable and friendly student searching for a Co-op position to apply my skills to help build outstanding software. I currently reside in Mississauga Ontario where I have been living for my whole life. I like the balance between urban cities and rural countrysides. I am a hardworking individual and can accomplish anything as long as I work hard.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={()=> handleTabChange("skills")} active={tab == "skills"}>Skills</TabButton>
                        <TabButton selectTab={()=> handleTabChange("education")} active={tab == "education"}>Education</TabButton>
                        <TabButton selectTab={()=> handleTabChange("certifications")} active={tab == "certifications"}>Certifications</TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    )
}
export default AboutSection;
