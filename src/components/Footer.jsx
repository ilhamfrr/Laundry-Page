import { motion } from 'motion/react'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

function Footer() {
    const currentYear = new Date().getFullYear()

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    }

    const footerLinks = {
        layanan: [
            { name: "Cuci Kiloan", href: "#layanan" },
            { name: "Cuci Satuan", href: "#layanan" },
            { name: "Layanan Express", href: "#layanan" },
            { name: "Cuci Sepatu & Tas", href: "#layanan" },
        ],
        perusahaan: [
            { name: "Tentang Kami", href: "#tentang" },
            { name: "Testimoni", href: "#testimoni" },
            { name: "Promo", href: "#promo" },
            { name: "Hubungi Kami", href: "https://wa.me/6281234567890" },
        ]
    }

    return (
        <footer className="bg-stone-950 text-stone-400 pt-20 pb-10 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Brand Section */}
                    <motion.div variants={itemVariants} className="col-span-1 lg:col-span-1">
                        <h2 className="text-3xl font-bold text-white mb-6 fontbrand">
                            Yuk <span className="text-stone-500">Laundry</span>
                        </h2>
                        <p className="mb-8 leading-relaxed">
                            Solusi laundry profesional, cepat, dan terpercaya untuk gaya hidup modern Anda. Kami menjaga kualitas pakaian Anda seperti milik kami sendiri.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-stone-950 transition-all duration-300"
                                    whileHover={{ y: -5 }}
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links - Services */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-white fontbold text-lg mb-6 uppercase tracking-wider text-sm">Layanan Kami</h4>
                        <ul className="space-y-4">
                            {footerLinks.layanan.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="hover:text-white transition-colors flex items-center group">
                                        <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Quick Links - Company */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-white fontbold text-lg mb-6 uppercase tracking-wider text-sm">Perusahaan</h4>
                        <ul className="space-y-4">
                            {footerLinks.perusahaan.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="hover:text-white transition-colors flex items-center group">
                                        <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-white fontbold text-lg mb-6 uppercase tracking-wider text-sm">Kontak Kami</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <MapPin size={20} className="text-stone-500 shrink-0 mt-1" />
                                <span>Jl. Kebersihan No. 123, <br />Kota Jakarta Selatan, 12345</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone size={20} className="text-stone-500 shrink-0" />
                                <span>+62 812 3456 7890</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={20} className="text-stone-500 shrink-0" />
                                <span>halo@yuklaundry.com</span>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-stone-900 w-full mb-10"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm">
                        © {currentYear} Yuk Laundry. Seluruh hak cipta dilindungi.
                    </p>
                    <div className="flex gap-8 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
                        <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
        </footer>
    )
}

export default Footer;
