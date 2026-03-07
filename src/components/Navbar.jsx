

function Navbar() {
  return (
    <div>
        <div className="navbar fixed z-50 bg-base-100 shadow-sm">
  <div className="navbar-start">
    {/* DESKTOP VERSION */}
    <div className="hidden lg:block">
    <a href="#" className="fontbrand ml-30 text-2xl tracking-widest">Yuk <span className="text-stone-500">Laundry</span></a>
    </div>
    {/* DESKTOP VERSION */}
    {/* DESKTOP VERSION */}
    <div className="block lg:hidden">
    <a href="#" className="fontbrand ml-6 text-xl tracking-widest">Yuk <span className="text-stone-500">Laundry</span></a>
    </div>
    {/* DESKTOP VERSION */}
  </div>
  <div className="navbar-center">
    {/* DESKTOP VERSION */}
  <div className="hidden lg:block">
    <ul className="menu-horizontal gap-12 px-1">
      <li className="fontnormal text-base hover:tracking-widest"><a href="/home">Beranda</a></li>
      <li className="fontnormal text-base hover:tracking-widest"><a href="#tentang">Tentang Kami</a></li>
      <li className="fontnormal text-base hover:tracking-widest"><a href="#layanan">Layanan & Harga</a></li>
      <li className="fontnormal text-base hover:tracking-widest"><a href="#testimonials">Testimonials</a></li>
    </ul>
    </div>
    {/* DESKTOP VERSION */}
  </div>
  <div className="navbar-end">
    {/* DESKTOP VERSION */}
    <div className="hidden lg:block">
    <a href="/pesan" className="fontsemi mr-20 bg-stone-950/80 rounded-xl px-6 py-3 text-stone-50 hover:bg-stone-50 hover:text-stone-950">Kontak Kami</a>
    </div>
    {/* DESKTOP VERSION */}
        {/* MOBILE VERSION */}
    <div className="block lg:hidden">
    <div className="drawer mr-6">
  <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-1" className="btn drawer-button">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li className="fontnormal text-base mt-16 mb-4 hover:tracking-widest"><a href="/home">Beranda</a></li>
      <li className="fontnormal text-base mb-4 hover:tracking-widest"><a href="#tentang">Tentang Kami</a></li>
      <li className="fontnormal text-base mb-4 hover:tracking-widest"><a href="#layanan">Layanan & Harga</a></li>
      <li className="fontnormal text-base mb-4 hover:tracking-widest"><a href="#testimonials">Testimonials</a></li>
    </ul>
  </div>
</div>
    </div>
    {/* MOBILE VERSION */}
  </div>
</div>
    </div>
  )
}

export default Navbar