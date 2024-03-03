"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 ">
                            Hello, I am
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Jawad Shaikh',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'an Aspiring Software Engineer',
                                1000,
                                'a Problem Solver',
                                1000,
                                'an Innovator',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        I am a second-year Computer Science student at the University of Guelph minoring in Mathematics.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-blue-700 to-blue-600 hover:bg-slate-200 text-white">
                            Hire me
                        </button>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
                            Download Resume
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <Image
                        src="/images/myface2.0.jpeg"
                        alt="myFaceImage"
                        className="rounded-full bg-[#181818] w-[200]"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;