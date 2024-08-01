import { motion } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc/SectionWrapper"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants/index.js"

const FeedbackCard=({index, testimonial, name, designation, company, image})=>(
  <motion.div variants={fadeIn('','spring', index * 0.5, 0.75)}
    className="bg-black-200 p10 rounded-3xl xs:w-[320px w-full]"
  >
    <p className="text-white font-black text-[48px]">''</p>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px font-medium]">{testimonial}</p>
      <div className="justify-between flex mt-7 items-center gap-1">
        <div className="flex flex-col flex-1">
          <p className='text-white font-medium text-[16px]'>
            <span className="blue-text-gradient">@</span>{name}

          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
        <div>
          <img 
            src={image}
            alt={`feedback ny-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          
          />
        </div>

      </div>
    </div>
    
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="mt-2 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`} >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>what others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index)=>{
          return(
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          );
          
        })}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,'')