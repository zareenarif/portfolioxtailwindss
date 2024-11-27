import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";


const Contact = () =>{
    return(
        <div>
<section className="text-green-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-green-600 hover:text-green-300">
        Contact Me
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base hover:text-green-300">
        Thanks to visit my portfolio you can contact me freely and can leave your message to me below.
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-green-600  hover:text-green-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-green-100 bg-opacity-50 rounded border border-green-300 focus:border-green-500 focus:bg-green-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-green-700  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-green-600  hover:text-green-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-green-100 bg-opacity-50 rounded border border-green-300 focus:border-green-500 focus:bg-green-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-green-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-green-600 hover:text-green-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-green-100 bg-opacity-50 rounded border border-green-300 focus:border-green-500 focus:bg-green-200 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-400 rounded text-lg">
            Submit
          </button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-indigo-500 hover:text-indigo-600 hover:text-[27px] ">zarfeen.zareen@gmail.com</a>
          <p className="leading-normal my-5">
            You can sent me mail here.
            <br />
            And also can contact here.
          </p>
          <div className="flex justify-center">
          <a href="https://www.linkedin.com/in/zarfeen-zarfeen-65198a2ba" target="_blank" rel="noopener noreferrer">
        <button className="inline-flex text-[50px] text-blue-600 border-0 py-2 px-6  hover:bg-green-900 rounded text-lg hover:text-[30px]">
        <FaLinkedin />
        </button></a>
        <button className="inline-flex text-[50px] text-purple-600 border-0 py-3 px-8  hover:bg-green-900 rounded text-lg hover:text-[30px]">
        <FaGithub />
        </button>
        <button className="inline-flex text-[50px] text-blue-500 border-0 py-2 px-6  hover:bg-green-900 rounded text-lg hover:text-[30px]">
        <FaFacebookSquare />
        </button>
        <button className="inline-flex text-[50px] text-orange-600 border-0 py-2 px-6  hover:bg-green-900 rounded text-lg hover:text-[30px]">
        <SiInstagram />
        </button>
        <button className="inline-flex text-[50px] text-blue-600 border-0 py-2 px-6  hover:bg-green-900 rounded text-lg hover:text-[30px]">
        <FaTwitter />

        </button>

      </div>
          {/* <span className="inline-flex">
            <a className="text-green-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-4 text-green-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-4 text-green-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-4 text-green-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span> */}
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export default Contact