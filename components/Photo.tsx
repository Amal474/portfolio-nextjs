
"use client";
import { motion } from "framer-motion"
import Image from "next/image";

export default function Photo() {

  return (
    <div className="w-full h-full relative">
      <motion.div animate={{
                    scale: [1, 0.5, 1, 1.5, 2, 1.5, 1],
                    rotate: [0, 0, 72, 144, 216, 288, 360],
                    transition: {delay: 2, duration: 3,}
                  }}
      >
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
          <Image src="/portfolio-nextjs/assets/dp.png"
                 priority
                 quality={100}
                 fill
                 alt="my-image"
                 className="object-contain"/>
        </div>
        <motion.svg className="w-[300px] xl:w-[500px] h-[300px] xl:h-[506px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg" >
          <motion.circle cx="253"
                         cy="253"
                         r="250"
                         stroke="#1a75ff"
                         strokeWidth="4"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         initial={{strokeDasharray: "24 10 0 0"}}
                         animate={{
                          strokeDasharray: ["15 120  25 25", "16 25 92 72", "4 250 22 22"],
                          rotate: [120, 360]
                         }}
                         transition={{
                          duration: 20,
                          repeat: Infinity,
                          repeatType: "reverse",
                         }}/>
        </motion.svg>
      </motion.div>
    </div>
  );
}