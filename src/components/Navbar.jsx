import { useState } from 'react';
import { Home, Info, ShoppingBag, MessageSquare, X, Menu, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Beranda', href: '/home', icon: Home },
    { name: 'Tentang Kami', href: '#tentang', icon: Info },
    { name: 'Layanan & Harga', href: '#layanan', icon: ShoppingBag },
    { name: 'Testimonials', href: '#testimonials', icon: MessageSquare },
  ];

  return (
    <div className="fontnormal">
      <div className="navbar fixed z-50 bg-base-100 shadow-sm px-4 lg:px-24">
        <div className="navbar-start">
          {/* LOGO */}
          <a href="/" className="flex items-center">
            <img src="/assets/img/logo.png" alt="Bara Laundry" className="w-20 lg:w-24 transition-transform hover:scale-105" />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-10">
            {menuItems.map((item) => (
              <li key={item.name} className="text-base font-medium transition-all hover:text-amber-600">
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:block">
            <a href="https://wa.me/6289510274759" className="btn btn-warning bg-amber-600 hover:bg-amber-700 text-white border-none px-8 rounded-xl fontsemi transition-all shadow-md hover:shadow-lg">
              Kontak Kami
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="btn btn-ghost btn-circle text-amber-600"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[300px] bg-white z-[70] shadow-2xl flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <img src="/assets/img/logo.png" alt="Logo" className="w-16" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn btn-ghost btn-circle text-gray-400 hover:text-amber-600"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-6">
                <ul className="flex flex-col gap-2 px-4">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 p-4 rounded-xl text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors font-medium"
                      >
                        <item.icon size={20} className="text-amber-600/70" />
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Sidebar Footer */}
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <a
                  href="https://wa.me/6289510274759"
                  className="btn btn-block bg-amber-600 hover:bg-amber-700 text-white border-none rounded-xl gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <Phone size={18} />
                  Hubungi Kami
                </a>
                <p className="text-center text-xs text-gray-400 mt-4">
                  © 2026 Bara Laundry. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
