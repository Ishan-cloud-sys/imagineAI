import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'
const Steps = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-32'
                initial={{y:100,opacity:0.2}}
                transition={{duration:1}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it works</h1>
      <p className='text-lg text-gray-600 mb-8'>Transform Words Into Stunning Images</p>
      <div className='space-y-4 w-full max-w-3xl text-sm'>
        {stepsData.map((item,index)=>(
            <div key={index}
            className='felx items-center gap-4 p-5 px-8 bg-white/20 shadow-md border-amber-100 cursor-pointer hover:scale-102 transition-all duration-300 rounded-lg'>
                <img src={item.icon} alt="" />
                <h2 className='text-xl font-medium'>{item.title}</h2>
                <p className='text-gray-500'>{item.description}</p>
            </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
