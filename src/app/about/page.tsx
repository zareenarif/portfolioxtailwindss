/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { Skills } from '@/components/skills';






const  About = () =>{

    return(
        <div>
           <h2 className='mt-24 text-center text-4xl font-bold underline text-green-600 hover:text-green-300'>About Me</h2>
          <div className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" 
    
    src="/images/Profile picture (1).jpg" alt="my picture" width={400} height={400} 
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-600 hover:text-green-400">
        Someting About Me 
      </h1>
      <p className="mb-8 leading-relaxed text-green-200">
      I have done masters in statistics with Q.C.major from Karachi University and also done a internship as a Q.A. officer at Lakson Tubacco, now I am a passionate developer specializing in building responsive web applications.I am a student of Governer Sindh I.T. university in GIAIC .SO I am a future web developer who wanna be experience in creating dynamic and responsive websites. I love coding and solving problems with innovative solutions.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-[30px] text-blue-600 border-0 py-2 px-6  hover:bg-green-900 rounded text-lg">
        <FaLinkedin />
        </button>
        <button className="inline-flex text-[30px] text-purple-600 border-0 py-3 px-8  hover:bg-green-900 rounded text-lg">
        <FaGithub />
        </button>
        <button className="inline-flex text-[30px] text-blue-500 border-0 py-2 px-6  hover:bg-green-900 rounded text-lg">
        <FaFacebookSquare />
        </button>
        <button className="inline-flex text-[30px] text-red-600 border-0 py-2 px-6  hover:bg-green-900 rounded text-lg">
        <SiInstagram />
        </button>
        <button className="inline-flex text-[30px] text-blue-600 border-0 py-2 px-6  hover:bg-green-900 rounded text-lg">
        <FaTwitter />

        </button>

      </div>
    </div>
  </div>
</div>
<Skills/>
</div>


    )
}

export default About





// export const  Skills= () =>{
//   return(
//       <div>
//         <h2 className='mt-18 mb-24 text-center text-4xl font-bold underline text-green-600 hover:text-green-300'>My Skills</h2>
//         <ul>
//           <li className='mb-3 text-2xl text-yellow-500 ml-16'>HTML</li><div className='w-[38%] ml-16 mb-3 h-4 bg-green-800 rounded-2xl'></div>
//           <li className='mb-3 text-2xl text-yellow-500 ml-16'>CSS</li><div className='w-[40%] ml-16 mb-3 h-4 bg-green-700 rounded-2xl'></div>
//           <li className='mb-3 text-2xl text-yellow-500 ml-16'>Typescript</li> <div className='w-[45%] ml-16 mb-3 h-4 bg-green-600 rounded-2xl'></div>
//           <li className='mb-3 text-2xl text-yellow-500 ml-16'>React</li><div className='w-[25%] ml-16 mb-3 h-4 bg-yellow-300 rounded-2xl'></div>
//           <li className='mb-3 text-2xl text-yellow-500 ml-16'>Next.js</li><div className='w-[20%] ml-16 mb-3 h-4 bg-yellow-600 rounded-2xl'></div>
//           <li className='mb-3 text-2xl text-yellow-500 ml-16'>TailwindCSS</li><div className='w-[35%] ml-16 mb-3 h-4 bg-pink-600 rounded-2xl'></div>
//           <li className='mb-3 text-2xl text-yellow-500 ml-16'>Statistical Analysis</li><div className='w-[55%] ml-16 mb-3 h-4 bg-green-400 rounded-2xl'></div>
//         </ul> 
        
//       </div>
//   )
// }