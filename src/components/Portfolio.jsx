import React from 'react'

import project1 from '../assets/portfolio/project1.jpeg'
import project2 from '../assets/portfolio/project2.jpeg'
import project3 from '../assets/portfolio/project3.jpeg'
import project4 from '../assets/portfolio/project4.jpeg'
import project5 from '../assets/portfolio/project5.jpeg'
import project6 from '../assets/portfolio/project6.jpeg'





const Portfolio = () => {

    const portfolios=[
        {
            id:1,
            src:project1,
            title: 'Chat Application with login feature built with React and firebase'
        },
        {
            id:2,
            src:project2,
            title: 'Android App for elderly used in case of health issues'
        },
        {
            id:3,
            src:project3,
            title: 'Fully functional E-commercial website using React with Login and cart functionality'

        },
        {
            id:4,
            src:project4,
            title: 'Digital lock coded using Verilog and implented on a Xilinx'
        },
        {
            id:5,
            src:project5,
            title: 'Bud Detection model based on YoLo-v5 and CoCo'
            
        },
        {
            id:6,
            src:project6,
            title: 'To do list using React and firebase'
        },
    ]


  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>
                <p className='py-6 font-2xl'>
                Check out some of my work ! Feel free to contact me if you would like to know more about any of my work.
                </p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                portfolios.map(({id,src,title})=>(
                    
                         <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src}alt='' className='rounded-md duration-200 hover:scale-105'/>
                                <div className='flex items-center justify-center'>
                                    <p className='font-thin py-1'>{title}</p>
                                </div>
                    
                        </div>
                    


                ))
            }
             </div>



            
        </div>


    </div>
  )
}

export default Portfolio