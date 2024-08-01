import React from 'react'
import { Tilt } from 'react-tilt'
import { motion, spring } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc/SectionWrapper'
//import { scale } from 'maath/dist/declarations/src/vector2'
//import { scale } from '/node_modues/maath/vector2/dist/maath-vector2'

const ServiceCard = ({index, title, icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div variants=
        {fadeIn(
        'right', 'spring', 0.5 * index, 0.75
        )} 
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-Card '
        >
          <div
            options={{
              max:45,
              scale: 1,
              speed: 450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12
              min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title}
              className='w-16 h-16 object-contain '/>
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p
      variants={fadeIn('','',0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl  leading-[30px]'
      >
        Full-stack developer skilled in TypeScript,
        JavaScript, and Python, with experience 
        in React, Node.js, Three.js, and Flask. 
        I specialize in crafting dynamic, 
        responsive applications and delivering
        scalable solutions. My background in both
        frontend and backend development allows me to 
        build seamless user experiences and robust systems.
        Driven by a passion for technology and innovation, 
        I am committed to solving complex problems and continuously 
        improving my craft. Let's connect and explore opportunities 
        to create impactful solutions together!
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10 '>
      {services.map((service, index)=>(
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")