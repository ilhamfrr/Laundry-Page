import { motion } from 'motion/react';
import { Truck, Zap, Droplets, ShieldCheck, Target, Eye } from 'lucide-react';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const benefits = [
    {
      title: "Antar Jemput Gratis",
      description: "Layanan jemput dan antar gratis tanpa minimum order (S&K berlaku).",
      icon: Truck,
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Proses Kilat",
      description: "Pakaian bersih, wangi, dan rapi dalam waktu kurang dari 24 jam.",
      icon: Zap,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Deterjen Premium",
      description: "Menggunakan bahan pilihan yang aman untuk serat kain dan kulit.",
      icon: Droplets,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Garansi Higienis",
      description: "Setiap pesanan diproses tersendiri untuk menjaga kebersihan maksimal.",
      icon: ShieldCheck,
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section id="tentang" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">

        {/* HEADER SECTION */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Mengenal Lebih Dekat
          </motion.span>
          <motion.h2
            className="fontsemi text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Tentang Bara Laundry
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-8"
          />
          <motion.p
            className="fontnormal text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Kami adalah mitra terpercaya Anda dalam perawatan pakaian. Dengan komitmen pada kualitas dan kecepatan, kami memastikan setiap helai pakaian Anda mendapatkan perawatan terbaik yang layak mereka dapatkan.
          </motion.p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch mb-24">

          {/* IMAGE SECTION */}
          <motion.div
            className="relative h-full min-h-[400px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-100 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-50 rounded-full blur-2xl z-0" />

            <div className="relative z-10 h-full group overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1677666923839-b99aff80a827?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Proses Laundry Profesional"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-2xl font-bold mb-2">Higienis & Terpercaya</p>
                <p className="text-sm opacity-90">Setiap proses diawasi ketat untuk hasil maksimal.</p>
              </div>
            </div>
          </motion.div>

          {/* MISSION & VISION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="flex flex-col gap-6"
          >
            <motion.div
              className="bg-[#fafafa] border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col items-start gap-4"
              variants={cardVariants}
            >
              <div className="bg-amber-100 p-3 rounded-2xl">
                <Target size={28} className="text-amber-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Misi Kami</h3>
                <p className="text-gray-600 leading-relaxed fontnormal">
                  Memberikan layanan laundry berkualitas tinggi dengan teknologi modern dan deterjen ramah lingkungan, memastikan kepuasan pelanggan melalui kecepatan dan kebersihan yang tak tertandingi.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#fafafa] border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col items-start gap-4"
              variants={cardVariants}
            >
              <div className="bg-blue-100 p-3 rounded-2xl">
                <Eye size={28} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Visi Kami</h3>
                <p className="text-gray-600 leading-relaxed fontnormal">
                  Menjadi solusi laundry nomor satu di Indonesia yang dikenal karena inovasi layanan, keberlanjutan proses, dan dedikasi penuh terhadap kenyamanan serta gaya hidup pelanggan.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* BENEFITS GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white border border-gray-100 rounded-[2rem] p-8 text-center transition-all hover:shadow-2xl hover:shadow-gray-200/50"
            >
              <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:rotate-12`}>
                <benefit.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
