import { SiMysql } from "react-icons/si"
import { SiPhp } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import {RiReactjsLine} from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { FaVuejs } from "react-icons/fa"
import { animate, motion } from "framer-motion"

const iconVariant = (duration)=>({
    intial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl ">Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        intial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariant(2.5)}
            intial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={iconVariant(3)}
            intial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaVuejs className="text-7xl text-emerald-500" />
            </motion.div>
            <motion.div 
            variants={iconVariant(5)}
            intial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariant(2)}
            intial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPhp className="text-7xl text-blue-600" />
            </motion.div>
            <motion.div 
            variants={iconVariant(6)}
            intial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariant(4)}
            intial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-blue-700" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies