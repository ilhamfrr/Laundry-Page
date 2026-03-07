// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  }

  return (
    <div className="hero min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-5xl mt-20 font-bold text-stone-950 bg-clip-text mb-2"
              variants={textVariants}
            >
              Laundry Bersih & Cepat,
            </motion.h1>
            <motion.h1
              className="text-5xl md:text-5xl font-bold text-stone-950 bg-clip-text mb-6"
              variants={textVariants}
            >
              Hanya Di <span className='fontbrand'>Yuk <span className="text-stone-500">Laundry</span></span>.
            </motion.h1>
            <motion.p
              className="fontnormal text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
              variants={textVariants}
            >
              Cuci, kering, dan wangi, hanya dengan sekali klik. Pesan sekarang via WhatsApp.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={textVariants}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r bg-stone-950 text-stone-50 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://wa.me/6281234567890?text=Halo%20Yuk%20Laundry,%20saya%20ingin%20memesan%20laundry.">Pesan Sekarang</a>
              </motion.button>
              <motion.button
                className="fontsemi px-16 py-4 border-2 border-stone-700 text-stone-950 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#promo">Promo</a>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1639580133969-48cbbce72e1f?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Laundry Service"
                className="w-full max-w-md h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero