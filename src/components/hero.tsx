import React from "react"
import Image from "next/image"
import Link from "next/link"

const Hero= ()=> {
    return(
        <div className="grid lg:grid-cols-2 md:grid-cols-2">
            <div className="ml-[0%] mt-8">
            <Image 
  src="/images/Profile picture (1).jpg" 
  alt="my picture" 
  width={500} 
  height={500} 
  className="rounded-full ml-[10%] animate-pulse"
/>
</div>
            <div>
            <h2 className=" text-6xl text-left gap-y-2 ml-[10%] font-bold text-green-600 mt-16 hover:text-green-400">Hello,<br/><br/> I am <br/>Zareen Arif <br/>wellcome to my portfolio</h2>

<br/>
<br/>
            <div className="ml-[10%] flex gap-14 mt-12">
                <button className="text-xl text-green-400 p-3 border-2 border-cyan-600 rounded-2xl  hover:bg-green-900"><Link href="/about">About Me</Link></button>
                <button className="text-xl text-green-400 p-3 border-2 border-cyan-600 rounded-2xl hover:bg-green-900"><Link href="/contact">Contact</Link></button>
            </div>
            </div>
        </div>
    )
}

export default Hero

