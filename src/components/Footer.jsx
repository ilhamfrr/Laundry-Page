import { motion } from 'motion/react'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react'

function Footer() {
    const currentYear = new Date().getFullYear()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
    }

    const footerLinks = {
        layanan: [
            { name: "Paket Kiloan", href: "#layanan" },
            { name: "Satuan Premium", href: "#layanan" },
            { name: "Paket Kilat 3 Jam", href: "#layanan" },
            { name: "Karpet & Gordyn", href: "#layanan" },
        ],
        perusahaan: [
            { name: "Beranda", href: "#home" },
            { name: "Tentang Kami", href: "#about" },
            { name: "Layanan & Harga", href: "#layanan" },
            { name: "Promo Spesial", href: "#promo" },
        ]
    }

    return (
        <footer className="bg-gray-950 text-gray-400 pt-24 pb-12 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-24">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Brand Section */}
                    <motion.div variants={itemVariants} className="flex flex-col items-start">
                        <div className="flex items-center mt-[-66px] gap-3 mb-8 group cursor-pointer">
                            <img
                                src="/assets/img/logo.png"
                                alt="Bara Laundry Logo"
                                className="h-24 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <p className="mb-10 leading-relaxed text-gray-400 text-lg fontnormal italic">
                            "Kebersihan Sempurna, Kenyamanan Utama." Kami hadir memberikan solusi laundry terbaik dengan standar premium untuk pakaian kesayangan Anda.
                        </p>
                        <div className="flex gap-5">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-xl"
                                    whileHover={{ y: -8, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links - Services */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-10">Layanan Unggulan</h4>
                        <ul className="space-y-5">
                            {footerLinks.layanan.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="hover:text-amber-500 transition-colors flex items-center group font-medium fontnormal">
                                        <ArrowRight size={16} className="mr-3 text-amber-600 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Quick Links - Company */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-10">Navigasi Cepat</h4>
                        <ul className="space-y-5">
                            {footerLinks.perusahaan.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="hover:text-amber-500 transition-colors flex items-center group font-medium fontnormal">
                                        <ArrowRight size={16} className="mr-3 text-amber-600 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-10">Hubungi Kami</h4>
                        <ul className="space-y-8">
                            <li className="flex items-start gap-4 group">
                                <div className="bg-amber-600/10 p-3 rounded-2xl text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-gray-400 font-medium fontnormal leading-relaxed">Jl. Raya Perjuangan No. 88, <br />Kota Jakarta Selatan, 12345</span>
                            </li>
                            <li className="flex items-center gap-4 group cursor-pointer">
                                <a href="https://wa.me/6289510274759" className="flex items-center gap-4">
                                    <div className="bg-amber-600/10 p-3 rounded-2xl text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <span className="text-gray-400 font-medium fontnormal">+62 895 1027 4759</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="bg-amber-600/10 p-3 rounded-2xl text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 shrink-0">
                                    <Mail size={20} />
                                </div>
                                <span className="text-gray-400 font-medium fontnormal">halo@baralaundry.com</span>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent w-full mb-12"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-sm font-medium fontnormal">
                        © {currentYear} <span className="text-white font-bold">Bara Laundry</span>. Created with IlhamFrr.
                    </p>
                    <div className="flex gap-10 text-xs font-bold uppercase tracking-widest">
                        <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        </footer>
    )
}

export default Footer;
