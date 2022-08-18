import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                About
                </p>
                <p className='text-xl mt-20'>
                Hello! I am currently a rising junior at Boston University studying Computer Engineering with a minor in Economics. I recently switched from majoring in Mechanical engineering to Computer engineering and have been since deeply interested in learning about the intersection of tech and business. 
                Some of my recent projects have allowed me to gain an understanding of object oriented programming, web development, machine learing and cloud services.
               
                </p>
                <br/>
                <p className='text-xl'>
                I love learning new technologies and then applying them to various fields. I recently worked on an ETA prediction model for a delivery app in South Africa which gave me deeper insights about machine learning and the various models used these days. I strongly beleive in the expansion of tech to all most all fields in the coming years and that has led me to explore and read about the various upcoming technologies including blockchain and the concept of WEB 3.0. Apart from being fascinated about tech, I spend my time swing trading in the Indian stock market, working as a xtutor at the engineering college and watching football.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About