import React from "react";
import Image from "next/image";

const  Projects= () => {
    return (
        <div>
          <section className="text-RED-600 body-font">
          <h2 className='mt-20 mb-18 text-center text-4xl font-bold underline text-green-600 hover:text-green-300'>My Projects</h2>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-green-400 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500" />
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-green-600  hover:text-green-300 font-medium title-font text-2xl mb-2 sm:mb-0">
          PROJECTS
        </h1>
        <p className="sm:w-3/5 leading-relaxed text-base text-green-600  hover:text-green-300 sm:pl-10 pl-0">
          Some of my projects are there , its just a beginning of my work inshaallah looking forward for bright future and a long journy in this field.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image
          width={300}
          height={300}
            alt="content"
            className="object-cover object-center h-full w-full hover:border-green-600 hover:border-2"
            src="/images/cli-calculator.jpg"
          />
        </div>
        
        <p className="text-center text-green-700 hover:text-green-300 leading-relaxed mt-9">
          Cli-Calculator by using Typescript
        </p>
        
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image
          width={300}
          height={300}
            alt="content"
            className="object-cover object-center h-full w-full hover:border-green-600 hover:border-2"
            src="/images/clone-panaclud.JPG"
          />
        </div>
        
        <p className="text-center  text-green-700 hover:text-green-300 leading-relaxed mt-9">
          Clone of panacloud website by using HTML and CSS.
        </p>
        
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image
          width={300}
          height={300}
            alt="content"
            className="object-cover object-center h-full w-full hover:border-green-400 hover:border-2"
            src="/images/resume2.jpg"
          />
        </div>
        
        <p className="text-center text-green-700 hover:text-green-300 leading-relaxed mt-9">
        Static Resume by using HTML ,CSS and Typescript.
        </p>
        
      </div>
      
    </div>
    
  </div>
</section>

            {/* <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-green-600 lg:w-1/3 lg:mb-0 mb-4">
        These are some of my Projects
      </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto text-green-600 leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them man bun deep jianbing selfies heirloom.
      </p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image
          width={300}
          height={300}
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="/images/cli-calculator.jpg"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
          width={300}
          height={300}
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="/images/hq720.jpg"
          />
        
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image
          width={300}
          height={300}
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src="/images/resume2.jpg"
          />
          
        </div>
      </div>
      <div className="">
        <div className="md:p-2 p-1 w-full">
          <Image
          width={300}
          height={300}
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src="/images/todo-list.jpg"
          />
        </div>
       
        
      </div>
    </div>
  </div>
</section> */}

        </div>
    )
}

export default Projects