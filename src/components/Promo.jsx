import { motion } from 'motion/react'
import { Tag, TicketPercent, Clock, Sparkles, Phone, ArrowRight, CheckCircle2 } from 'lucide-react'

function Promo() {
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
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            },
        },
    }

    return (
        <section id="promo" className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-50 rounded-full blur-[120px] opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-40"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-24">
                <motion.div
                    className="bg-gray-950 rounded-[3rem] p-8 md:p-16 lg:p-20 text-white relative overflow-hidden shadow-2xl shadow-gray-200"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    {/* Decorative Sparkle */}
                    <motion.div
                        className="absolute -top-20 -right-20 text-white/5 opacity-40"
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                        <Sparkles size={400} />
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                        {/* LEFT CONTENT */}
                        <div className="text-center lg:text-left">
                            <motion.div
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl rounded-full text-amber-400 text-sm font-bold mb-8 items-center"
                                variants={itemVariants}
                            >
                                <Tag size={16} className="text-amber-500" />
                                <span className="uppercase tracking-widest">Penawaran Spesial</span>
                            </motion.div>

                            <motion.h2
                                className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-[1.1]"
                                variants={itemVariants}
                            >
                                Hemat <span className="text-amber-500">20%</span> <br />
                                Laundry Pertama!
                            </motion.h2>

                            <motion.p
                                className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed fontnormal"
                                variants={itemVariants}
                            >
                                Nikmati layanan cuci premium dengan harga lebih bersahabat. Khusus untuk pelanggan baru yang ingin merasakan kebersihan sempurna.
                            </motion.p>

                            <motion.div
                                className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12"
                                variants={itemVariants}
                            >
                                <div className="flex items-center gap-4 group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
                                        <TicketPercent className="text-amber-500" size={28} />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Kode Promo</p>
                                        <p className="font-black text-xl text-white tracking-tight">BARA20</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
                                        <Clock className="text-amber-500" size={28} />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Berlaku S/D</p>
                                        <p className="font-black text-xl text-white tracking-tight">Akhir Bulan</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT CONTENT - VISUAL CARD */}
                        <motion.div
                            className="relative"
                            variants={itemVariants}
                        >
                            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-3xl p-10 md:p-12 rounded-[2.5rem] border border-white/10 shadow-3xl group">
                                <div className="absolute -top-6 -right-2 bg-amber-500 text-white font-black px-8 py-4 rounded-2xl shadow-2xl rotate-[15deg] group-hover:rotate-0 transition-all duration-500 text-xl">
                                    SAVE 20%
                                </div>

                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <Sparkles className="text-amber-500" />
                                    Keuntungan Member
                                </h3>
                                
                                <ul className="space-y-5">
                                    {[
                                        "Gratis Antar Jemput (Min. 5kg)",
                                        "Pengerjaan Higienis & Steril",
                                        "Parfum Grade A Tahan Lama",
                                        "Garansi Cuci Ulang Jika Kurang Puas"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-center gap-4 text-gray-300 font-medium fontnormal">
                                            <div className="w-6 h-6 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center shrink-0">
                                                <CheckCircle2 size={14} strokeWidth={3} />
                                            </div>
                                            {text}
                                        </li>
                                    ))}
                                </ul>

                                <motion.a
                                    href="https://wa.me/6289510274759?text=Halo%20Bara%20Laundry%20Saya%20Ingin%20Klaim%20Promo%20Pelanggan%20Baru%20BARA20"
                                    className="w-full mt-12 py-5 bg-amber-600 hover:bg-amber-700 text-white font-black rounded-2xl flex items-center justify-center gap-3 shadow-xl transition-all shadow-amber-900/40"
                                    whileHover={{ scale: 1.02, y: -4 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Phone size={20} />
                                    Klaim via WhatsApp
                                    <ArrowRight size={20} />
                                </motion.a>
                            </div>

                            {/* Decorative blur effect */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-amber-500/10 blur-[100px] rounded-full"></div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Promo;
