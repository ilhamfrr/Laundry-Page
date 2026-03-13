import { motion } from 'motion/react';
import { Phone, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth feel
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#fafafa]">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-amber-100/50 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[5%] -right-[5%] w-[50%] h-[50%] bg-blue-50/60 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-24 pt-24 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-8 text-center lg:text-left"
          >

            {/* HEADLINE */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight"
            >
              Pakaian <span className="text-amber-600">Wangi</span>, <br />
              Bersih & <span className="text-amber-600">Rapi</span> <br />
              Tanpa Ribet.
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed fontnormal"
            >
              Bara Laundry hadir dengan layanan profesional yang memastikan pakaian Anda dicuci higienis, wangi tahan lama, dan dirawat dengan standar terbaik.
            </motion.p>

            {/* FEATURES LIST (Subtle) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8"
            >
              {[
                { text: "Cuci Higienis", icon: CheckCircle2 },
                { text: "Wangi 48 Jam", icon: CheckCircle2 },
                { text: "Pekerjaan Rapi", icon: CheckCircle2 }
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                  <feature.icon className="text-amber-500" size={18} />
                  <span className="text-sm md:text-base">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://wa.me/6289510274759?text=Halo%20Bara%20Laundry%20Saya%20Ingin%20Pesan"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="btn h-auto py-4 px-10 bg-amber-600 hover:bg-amber-700 text-white border-none rounded-2xl shadow-xl shadow-amber-200/50 flex items-center gap-3 transition-colors text-lg fontbold fontsemi"
              >
                <Phone size={20} />
                Pesan Sekarang
              </motion.a>

              <motion.a
                href="#layanan"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="btn h-auto py-4 px-10 border-2 border-gray-900 bg-transparent text-gray-900 rounded-2xl flex items-center gap-3 transition-all text-lg fontbold fontsemi"
              >
                Lihat Layanan
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex justify-center relative items-center"
          >
            {/* DECORATIVE BACKGROUND FOR IMAGE */}
            <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-3xl scale-90" />

            {/* FLOATING DECORATIONS */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 1 }}
              className="absolute -bottom-10 -left-4 md:left-10 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="bg-blue-100 p-2 rounded-lg">
                <CheckCircle2 className="text-blue-600" size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 uppercase font-bold">Tercepat</p>
                <p className="text-sm font-bold text-gray-900">Selesai 1 Hari</p>
              </div>
            </motion.div>

            {/* MAIN IMAGE */}
            <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1639580133969-48cbbce72e1f?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Laundry Service"
                className="w-full max-w-lg aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
