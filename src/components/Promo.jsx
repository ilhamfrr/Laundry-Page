import { motion } from 'motion/react'
import { Tag, TicketPercent, Clock, Sparkles } from 'lucide-react'

function Promo() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
                duration: 0.5,
            },
        },
    }

    return (
        <div id="promo" className="py-20 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-stone-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-stone-50 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    className="bg-stone-950 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    {/* Animated Background Sparkle */}
                    <motion.div
                        className="absolute top-10 right-10 text-stone-700 opacity-20"
                        animate={{
                            rotate: 360,
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                        <Sparkles size={200} />
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Left Content */}
                        <div>
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-stone-300 text-sm fontsemi mb-6"
                                variants={itemVariants}
                            >
                                <Tag size={16} className="text-stone-400" />
                                Promo Spesial Terbatas
                            </motion.div>

                            <motion.h2
                                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                                variants={itemVariants}
                            >
                                Diskon <span className="text-stone-400">20%</span> Untuk <br className="hidden md:block" />
                                Pelanggan Baru!
                            </motion.h2>

                            <motion.p
                                className="text-stone-400 text-lg mb-10 max-w-md leading-relaxed"
                                variants={itemVariants}
                            >
                                Nikmati layanan laundry premium kami dengan harga lebih hemat. Berlaku untuk semua jenis layanan pencucian pertama Anda.
                            </motion.p>

                            <motion.div
                                className="flex flex-wrap gap-6"
                                variants={itemVariants}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                                        <TicketPercent className="text-stone-300" />
                                    </div>
                                    <div>
                                        <p className="text-stone-500 text-xs uppercase tracking-wider">Kode Promo</p>
                                        <p className="fontbold text-lg">YUKBERSIH20</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                                        <Clock className="text-stone-300" />
                                    </div>
                                    <div>
                                        <p className="text-stone-500 text-xs uppercase tracking-wider">Berakhir Dalam</p>
                                        <p className="fontbold text-lg">3 Hari Lagi</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Content - Visual Card */}
                        <motion.div
                            className="relative"
                            variants={itemVariants}
                        >
                            <div className="bg-gradient-to-br from-stone-800 to-stone-900 p-8 rounded-3xl border border-white/5 shadow-inner relative group">
                                <div className="absolute -top-4 -right-4 bg-white text-stone-950 fontbold px-6 py-3 rounded-2xl shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                    SAVE 20%
                                </div>

                                <h3 className="text-xl fontbold mb-4">Kenapa Memilih Kami?</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Proses Higienis & Terpisah",
                                        "Deterjen Ramah Lingkungan",
                                        "Gratis Antar-Jemput*",
                                        "Packaging Rapi & Eksklusif"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-center gap-3 text-stone-300">
                                            <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-[10px]">
                                                ✓
                                            </div>
                                            {text}
                                        </li>
                                    ))}
                                </ul>

                                <motion.button
                                    className="w-full mt-10 py-5 bg-white text-stone-950 fontbold rounded-2xl hover:bg-stone-200 transition-colors shadow-lg"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <a href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20menggunakan%20promo%20YUKBERSIH20">
                                        Klaim Promo via WhatsApp
                                    </a>
                                </motion.button>
                            </div>

                            {/* Blur Shadow for the card */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-stone-500/20 blur-[100px] rounded-full"></div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Promo;
