import { useState } from 'react';
import { 
  Package, 
  Clock, 
  Zap, 
  Rocket, 
  Shirt, 
  Box, 
  Home, 
  Scissors,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function Layanan() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const kiloanPlans = [
    { 
      name: "Reguler", 
      time: "Max 3 Hari", 
      price: "4.500", 
      icon: Package, 
      color: "gray",
      details: [
        "Cuci + Kering + Setrika",
        "Pengerjaan standar",
        "Wangi tahan lama",
        "Lipatan rapi",
        "Packing plastik tebal"
      ] 
    },
    { 
      name: "Premium", 
      time: "Max 1 Hari", 
      price: "8.000", 
      icon: Sparkles, 
      color: "blue",
      details: [
        "Prioritas pengerjaan",
        "Cuci + Kering + Setrika",
        "Parfum premium exclusive",
        "Packing eksklusif",
        "Layanan antar jemput prioritas"
      ] 
    },
    { 
      name: "Smart", 
      time: "Max 6 Jam", 
      price: "15.000", 
      icon: Zap, 
      color: "amber", 
      highlight: true,
      details: [
        "Selesai dalam 6 jam",
        "Cuci + Kering + Setrika",
        "Penanganan khusus",
        "Deterjen anti-bakteri",
        "Packing anti-kusut"
      ] 
    },
    { 
      name: "Express", 
      time: "Max 3 Jam", 
      price: "25.000", 
      icon: Rocket, 
      color: "orange", 
      highlight: true,
      details: [
        "Selesai kilat 3 jam",
        "Cuci + Kering + Setrika",
        "Antrean nomor satu",
        "Parfum bebas pilih",
        "Packing vakum tersedia"
      ] 
    },
  ];

  const satuanItems = [
    { name: "Kemeja", price: "7.000" }, { name: "Celana", price: "5.000" },
    { name: "Setelan Jas", price: "15.000" }, { name: "Jas", price: "10.000" },
    { name: "Gaun Besar", price: "15.000" }, { name: "Gaun Kecil", price: "10.000" },
    { name: "Bed Cover", price: "8.000 / kg" }, { name: "Selimut Kecil", price: "5.000" },
    { name: "Selimut Sedang", price: "8.000" }, { name: "Selimut Besar", price: "15.000" },
    { name: "Sprei Kecil", price: "3.000" }, { name: "Sprei Besar", price: "6.000" },
    { name: "Sepatu Kecil", price: "5.000" }, { name: "Sepatu Besar", price: "10.000" },
    { name: "Boneka Kecil", price: "8.000" }, { name: "Boneka Besar", price: "10.000" },
    { name: "Boneka Jumbo", price: "25.000" },
  ];

  return (
    <section id="layanan" className="py-24 bg-[#fafafa] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.span variants={itemVariants} className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 block">
            Daftar Layanan Kami
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Layanan & <span className="text-amber-600">Harga Terbaik</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto fontnormal">
            Pilih paket yang paling sesuai dengan kebutuhan Anda. Klik pada paket untuk melihat detail lengkap.
          </motion.p>
        </motion.div>

        {/* 1. PAKET TARIF KILOAN */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-amber-100 p-3 rounded-2xl">
              <Box className="text-amber-600" size={28} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Paket Tarif Kiloan</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kiloanPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedPackage(plan)}
                className={`relative p-8 rounded-[2.5rem] border cursor-pointer group transition-all duration-300 ${plan.highlight ? 'border-amber-400 bg-white shadow-2xl shadow-amber-100 hover:shadow-amber-200' : 'border-gray-100 bg-white shadow-xl shadow-gray-100 hover:shadow-gray-200'}`}
              >
                {plan.highlight && (
                  <div className="absolute top-6 right-6 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10">
                    Best Value
                  </div>
                )}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${plan.highlight ? 'bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'}`}>
                  <plan.icon size={28} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                  <Clock size={14} />
                  {plan.time}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-gray-400">Rp</span>
                  <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                  <span className="text-sm font-medium text-gray-400">/Kg</span>
                </div>
                
                <div className="mt-6 flex items-center gap-2 text-amber-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Lihat Detail <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2 & 3. SATUAN & KARPET SECTION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 uppercase font-bold tracking-tight">
          
          {/* SATUAN */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl shadow-gray-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
                <Shirt size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Paket Satuan</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {satuanItems.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-50 group hover:border-amber-200 transition-colors">
                  <span className="text-gray-600 font-medium fontnormal">{item.name}</span>
                  <span className="text-gray-900 font-bold">Rp {item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* KARPET & GORDYN */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* KARPET */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl shadow-gray-100 flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-2xl text-purple-600">
                  <Home size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Karpet</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Tebal Besar", price: "7.000 / m" },
                  { name: "Tipis Besar", price: "6.000 / m" },
                  { name: "Kecil", price: "25.000 / pc" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 fontnormal">{item.name}</span>
                    <span className="text-gray-900 font-bold">Rp {item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* GORDYN */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl shadow-gray-100 flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-2xl text-green-600">
                  <Scissors size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Gordyn</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Tebal", price: "7.000 / m" },
                  { name: "Sedang", price: "10.000 / pc" },
                  { name: "Tipis", price: "5.000 / pc" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 fontnormal">{item.name}</span>
                    <span className="text-gray-900 font-bold">Rp {item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 & 5. PAKET KILAT & LAINNYA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          
          {/* PAKET KILAT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-amber-600 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-amber-200 relative overflow-hidden group cursor-pointer"
            onClick={() => setSelectedPackage({
              name: "Paket Kilat",
              price: "Mulai 6.000",
              unit: "/ Kg",
              icon: Zap,
              isKilat: true,
              details: [
                "Minimum order 5 Kg",
                "Pilihan 4 jam, 6 jam, atau 1 hari",
                "Penanganan super prioritas",
                "Wangi maksimal",
                "Antar jemput tersedia"
              ]
            })}
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-white/20 p-3 rounded-2xl">
                <Zap size={28} />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Paket Kilat</h3>
                <p className="text-amber-100 text-sm font-medium">Minimum order 5 Kg</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { time: "4 Jam", price: "8.000" },
                { time: "6 Jam", price: "7.000" },
                { time: "1 Hari", price: "6.000" }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center bg-white/10 p-5 rounded-2xl hover:bg-white/20 transition-colors">
                  <span className="text-xl font-bold">{item.time}</span>
                  <span className="text-2xl font-black">Rp {item.price} <span className="text-sm font-medium opacity-70">/ Kg</span></span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-white font-bold opacity-80 group-hover:opacity-100 transition-opacity">
              Lihat Detail Paket Kilat <ArrowRight size={18} />
            </div>
          </motion.div>

          {/* LAINNYA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-gray-200"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-white/10 p-3 rounded-2xl">
                <CheckCircle2 size={28} className="text-amber-400" />
              </div>
              <h3 className="text-3xl font-bold">Layanan Tambahan</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: "Cuci Kering Setrika", price: "4.500 / Kg" },
                { name: "Cuci Manuel", price: "3.000 / Kg" },
                { name: "Cuci Kering", price: "3.500 / Kg" },
                { name: "Setrika", price: "3.500 / Kg" }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 border-b border-white/5 hover:bg-white/5 rounded-xl transition-all">
                  <span className="text-lg font-medium text-gray-300 fontnormal">{item.name}</span>
                  <span className="text-xl font-bold text-amber-400">Rp {item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA SECTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 border border-gray-100 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Sudah Tahu Paket Yang Anda Butuhkan?</h3>
            <p className="text-gray-600 fontnormal">Klik tombol di samping untuk langsung memesan melalui WhatsApp kami.</p>
          </div>
          <motion.a
            href="https://wa.me/6289510274759?text=Halo%20Bara%20Laundry%20Saya%20Ingin%20Pesan"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn h-auto py-5 px-12 bg-amber-600 hover:bg-amber-700 text-white border-none rounded-2xl shadow-xl shadow-amber-200 flex items-center gap-4 text-xl font-bold"
          >
            <Phone size={24} />
            Order via WhatsApp
            <ArrowRight size={24} />
          </motion.a>
        </motion.div>

      </div>

      {/* PACKAGE MODAL */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPackage(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-xl max-h-[90vh] bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Close Button - Fixed Position */}
              <button 
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors z-30 shadow-sm"
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>

              {/* Scrollable Area */}
              <div className="overflow-y-auto custom-scrollbar flex-1 p-6 md:p-12">
                <div className="flex flex-col items-center text-center mb-8 md:mb-10">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[2rem] flex items-center justify-center mb-4 md:mb-6 shadow-xl ${selectedPackage.highlight || selectedPackage.isKilat ? 'bg-amber-100 text-amber-600 shadow-amber-100' : 'bg-gray-100 text-gray-600 shadow-gray-100'}`}>
                    <selectedPackage.icon size={32} className="md:w-10 md:h-10" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{selectedPackage.name}</h3>
                  <div className="flex items-center gap-2 text-gray-500 font-medium mb-4 md:mb-6 text-sm md:text-base">
                    <Clock size={16} className="text-amber-500 md:w-[18px] md:h-[18px]" />
                    <span>Lama Pengerjaan: <span className="text-gray-900 font-bold">{selectedPackage.time || "Kilat"}</span></span>
                  </div>
                  <div className="flex items-baseline gap-1 text-amber-600">
                    <span className="text-base md:text-lg font-bold">Rp</span>
                    <span className="text-4xl md:text-5xl font-black">{selectedPackage.price}</span>
                    <span className="text-base md:text-lg font-medium opacity-60">/{selectedPackage.unit || "Kg"}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8 md:mb-10">
                  <h4 className="text-base md:text-lg font-bold text-gray-900 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-green-500 md:w-5 md:h-5" />
                    Apa yang Anda dapatkan:
                  </h4>
                  <ul className="grid grid-cols-1 gap-2 md:gap-3">
                    {selectedPackage.details?.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 p-3 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl text-gray-600 text-sm md:text-base font-medium fontnormal">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-500 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.a
                  href={`https://wa.me/6289510274759?text=Halo%20Bara%20Laundry%20Saya%20Ingin%20Pesan%20Paket%20${selectedPackage.name}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-block h-auto py-4 md:py-5 bg-amber-600 hover:bg-amber-700 text-white border-none rounded-xl md:rounded-2xl shadow-xl shadow-amber-200 flex items-center justify-center gap-3 md:gap-4 text-lg md:text-xl font-bold"
                >
                  <Phone size={20} className="md:w-6 md:h-6" />
                  Pesan via WhatsApp
                </motion.a>
                
                <p className="text-center text-[10px] md:text-xs text-gray-400 mt-6 pt-6 border-t border-gray-100">
                  Harga dapat berubah sewaktu-waktu. Hubungi kami untuk informasi lebih lanjut.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Layanan;