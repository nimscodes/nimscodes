import React from 'react'
import Title from './layout/Title'
import { profile } from '@/public/assets'
import Image from 'next/image'


const About = () => {

    return (
        <div id='about' className='max-w-[1240px] px-2 md:px-10 flex items-center justify-center min-h-screen lg:mx-auto mb-10'>
            <div className='md:w-[95%] w-full flex flex-col p-5 gap-7'>
                <Title title='About' desc='who i am' />
                <div className='md:grid grid-cols-3 gap-5'>
                    <div className='flex flex-col gap-4 md:flex-2 col-span-2 text-gray-600 tracking-wide text-justify font-light'>
                        <p>As a recent graduate with master’s degree in mechatronics and a
                            passion for software development, I am excited to pursue a career as a software developer.
                            I have a strong foundation in programming languages such as JavaScript and Python, and
                            I am always eager to learn new technologies and techniques.
                            Throughout my academic and personal projects, I have honed my problem-solving skills,
                            attention to detail, and ability to work collaboratively in a team environment.
                        </p>
                        <p>
                            I am committed to developing high-quality, efficient, and
                            user-friendly software that meets the needs of end-users. In pursuit of a
                            challenging and dynamic work environment, I am seeking opportunities to
                            continue learning and growing as a software developer while
                            contributing to meaningful projects that positively impact society.
                        </p>
                    </div>
                    <div className='hidden md:flex justify-end relative'>
                        <Image className='border-gray-400 z-10 rounded-sm' src={profile} width={250} height={250} alt='profile'/>
    
                        <div className='hidden absolute -bottom-2 right-2 w-[250px] h-[320px] bg-gradient-to-r from-gray-400
                to-[#5651ef] shadow-shadowOne lg:flex justify-center item-center animate-pulse'></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About