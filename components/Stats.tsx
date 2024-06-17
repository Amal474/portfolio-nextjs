
"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 8,
    text: "Years of Experience",
  },
  {
    num: 21,
    text: "Projects Completed",
  },
  {
    num: 5,
    text: "Technologies Mastered",
  },
  {
    num: 3,
    text: "Languages",
  },
]

export default function Stats() {

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div>
          {stats.map((item, index) => {
            return (
              <div key={index}
                   className="flex-1 flex gap-4 items-center justify-center xl:justify-start" >
                <CountUp end={item.num}
                         duration={3}
                         delay={2}
                         className="text-4xl xl:text-6xl font-extrabold" />
                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}