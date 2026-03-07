import { motion } from 'motion/react'

function Layanan() {
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
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const services = [
    {
      title: "Cuci Kiloan",
      price: "Rp 6.000",
      unit: "/kg",
      description: "Cuci, kering, dan lipat. Cocok untuk pakaian sehari-hari Anda.",
      features: ["Proses 2-3 Hari", "Deterjen Premium", "Wangi Tahan Lama"]
    },
    {
      title: "Cuci Satuan",
      price: "Rp 15.000",
      unit: "/pcs",
      description: "Layanan khusus untuk jas, jaket, kebaya, dan pakaian pesta lainnya.",
      features: ["Penanganan Manual", "Setrika Uap", "Gantungan Gratis"]
    },
    {
      title: "Layanan Express",
      price: "Rp 12.000",
      unit: "/kg",
      description: "Butuh cepat? Pakaian Anda bersih dan rapi hanya dalam 6-12 jam.",
      features: ["Prioritas Utama", "Selesai di Hari yang Sama", "Layanan Kilat"]
    },
    {
      title: "Cuci Sepatu & Tas",
      price: "Rp 25.000",
      unit: "/item",
      description: "Perawatan mendalam untuk koleksi sepatu dan tas kesayangan Anda.",
      features: ["Deep Cleaning", "Anti Bakteri", "Kemasan Eksklusif"]
    }
  ]

  return (
    <div id='layanan'>
    <div id="layanan" className="py-24 bg-gradient-to-b from-white to-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header section */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.span
            className="text-stone-500 fontsemi uppercase tracking-widest text-sm mb-4 block"
            variants={itemVariants}
          >
            Daftar Harga
          </motion.span>
          <motion.h2
            className="fontsemi text-4xl md:text-5xl font-bold text-stone-950 mb-6"
            variants={itemVariants}
          >
            Layanan & <span className="text-stone-600">Pilihan Harga</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-stone-950 mx-auto mb-8 rounded-full"
            variants={itemVariants}
          ></motion.div>
          <motion.p
            className="fontnormal text-lg text-stone-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Pilih layanan yang sesuai dengan kebutuhan Anda. Kami menjamin kebersihan dan kualitas terbaik untuk setiap helai kain Anda.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col h-full relative overflow-hidden"
              variants={cardVariants}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 }
              }}
            >

              <h3 className="fontbold text-2xl text-stone-950 mb-3 group-hover:text-stone-800">
                {service.title}
              </h3>

              <div className="mb-4">
                <span className="text-3xl font-bold text-stone-950">{service.price}</span>
                <span className="text-stone-500 ml-1">{service.unit}</span>
              </div>

              <p className="fontnormal text-stone-600 mb-8 flex-grow">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm text-stone-500 fontsemi">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                className="w-full py-4 bg-stone-50 text-stone-950 font-bold rounded-2xl group-hover:bg-stone-950 group-hover:text-white transition-all duration-300 shadow-sm"
                whileTap={{ scale: 0.95 }}
              >
                Pilih Layanan
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-stone-600 mb-6 fontsemi">Pesanan lebih banyak? Hubungi kami untuk harga paket khusus!</p>
          <a
            href="https://wa.me/6281234567890"
            className="inline-flex items-center gap-2 px-10 py-4 bg-stone-950 text-white rounded-full font-bold hover:bg-stone-800 transition-all duration-300 shadow-xl"
          >
            Konsultasi Sekarang
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
    </div>
  )
}

export default Layanan