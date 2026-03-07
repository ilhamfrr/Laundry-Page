import { motion } from 'motion/react'

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const benefits = [
    {
      title: "Pengiriman Cepat",
      description: "Layanan antar-jemput dalam 24 jam"
    },
    {
      title: "Mesin Modern",
      description: "Teknologi cuci terkini untuk hasil maksimal"
    },
    {
      title: "Deterjen Premium",
      description: "Menggunakan bahan berkualitas tinggi"
    },
    {
      title: "Garansi Kepuasan",
      description: "100% puas atau uang kembali"
    }
  ]

  return (
    <div id='tentang'>
    <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="fontsemi text-4xl md:text-6xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            Tentang Kami
          </motion.h2>
          <motion.p
            className="fontnormal text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Laundry Bersih Kilat hadir untuk memudahkan hidup Anda. Kami menggunakan deterjen berkualitas,
            mesin modern, dan proses cepat agar pakaian Anda selalu wangi dan rapi.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image Section */}
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src="https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tim Laundry Yuk Laundry"
                className="w-full max-w-lg h-auto rounded-3xl shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg mb-6"
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="fontbold text-2xl text-gray-800 mb-4">Misi Kami</h3>
              <p className="fontnormal text-gray-600 leading-relaxed">
                Memberikan layanan laundry berkualitas tinggi dengan harga terjangkau,
                menggunakan teknologi modern untuk memastikan kepuasan pelanggan maksimal.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="fontbold text-2xl text-gray-800 mb-4">Visi Kami</h3>
              <p className="fontnormal text-gray-600 leading-relaxed">
                Menjadi penyedia layanan laundry terdepan di Indonesia dengan inovasi
                berkelanjutan dan komitmen terhadap kepuasan pelanggan.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="text-4xl mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 200 }}
              >
                {benefit.icon}
              </motion.div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h4>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    </div>
  )
}

export default About