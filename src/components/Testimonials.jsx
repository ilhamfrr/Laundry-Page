import { motion } from 'motion/react'
import { Quote, Star } from 'lucide-react'

function Testimonials() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    const testimonials = [
        {
            name: "Sarah Wijaya",
            role: "Ibu Rumah Tangga",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
            text: "Sangat puas dengan layanan Yuk Laundry! Baju anak-anak yang tadinya kena noda membandel bisa bersih total dan wanginya enak banget, tahan lama.",
            rating: 5
        },
        {
            name: "Budi Santoso",
            role: "Karyawan Swasta",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
            text: "Layanan express-nya juara! Pagi antar, sore sudah sampai di kantor dengan rapi. Sangat membantu buat saya yang jadwalnya padat.",
            rating: 5
        },
        {
            name: "Amanda Putri",
            role: "Mahasiswi",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
            text: "Harganya sangat bersahabat buat kantong mahasiswa, tapi kualitasnya gak murahan. Sepatu putih saya yang dekil jadi kayak baru lagi!",
            rating: 5
        }
    ]

    return (
        <div id='testimonials'>
        <div id="testimoni" className="py-24 bg-stone-50 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-block px-4 py-1.5 text-stone-700 text-xs fontbold uppercase tracking-wider mb-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        Testimonial
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl fontbold text-stone-950 mb-4">
                        Apa Kata <span className="text-stone-600">Pelanggan Kami?</span>
                    </h2>
                    <p className="text-stone-500 max-w-xl mx-auto text-lg fontnormal">
                        Kepuasan Anda adalah prioritas kami. Lihat bagaimana pelanggan kami merasa terbantu dengan layanan kami.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 relative group flex flex-col h-full"
                            variants={cardVariants}
                            whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.08)" }}
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-8 right-8 text-stone-100 group-hover:text-stone-200 transition-colors duration-500">
                                <Quote size={60} fill="currentColor" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6 relative z-10 transition-transform group-hover:scale-110 origin-left duration-300">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="#FACC15" color="#FACC15" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-stone-600 text-lg italic leading-relaxed mb-8 flex-grow relative z-10">
                                "{item.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 border-t border-stone-50 pt-6 mt-auto">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-stone-100 group-hover:border-stone-200 transition-colors">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-stone-950 fontbold text-lg leading-tight">{item.name}</h4>
                                    <p className="text-stone-400 text-sm">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Badge/Stats (Optional visual flair) */}
                <motion.div
                    className="mt-20 flex flex-wrap justify-center gap-10 opacity-70"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.7 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="text-center">
                        <h5 className="text-2xl fontbold text-stone-950">500+</h5>
                        <p className="text-stone-500 text-sm">Pelanggan Aktif</p>
                    </div>
                    <div className="text-center">
                        <h5 className="text-2xl fontbold text-stone-950">4.9/5</h5>
                        <p className="text-stone-500 text-sm">Rating Rata-rata</p>
                    </div>
                    <div className="text-center">
                        <h5 className="text-2xl fontbold text-stone-950">10k+</h5>
                        <p className="text-stone-500 text-sm">Pakaian Dicuci</p>
                    </div>
                </motion.div>
            </div>
        </div>
        </div>
    )
}

export default Testimonials;
