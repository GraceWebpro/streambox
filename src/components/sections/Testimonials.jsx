import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { testimonials } from "./../../data/testimonials"

const PremiumTestimonials = () => {
  const [index, setIndex] = useState(0)

  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-dark dark:to-black">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          What Customers Say
        </h2>

        <p className="opacity-70 mb-14">
          Loved by thousands of happy customers
        </p>

        {/* Carousel */}
        <div className="relative h-[320px] flex items-center justify-center">

          {testimonials.map((item, i) => (
            i === index && (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="absolute w-full md:w-[600px]"
              >
                <div className="
                  backdrop-blur-xl
                  bg-white/70 dark:bg-white/10
                  border border-white/20
                  shadow-2xl
                  rounded-3xl
                  p-10
                ">
                  {/* Avatar */}
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />

                  {/* Name */}
                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mt-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>

                  {/* Review */}
                  <p className="mt-6 text-lg opacity-80 leading-relaxed">
                    "{item.review}"
                  </p>
                </div>
              </motion.div>
            )
          ))}

        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                index === i
                  ? "bg-primary scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default PremiumTestimonials