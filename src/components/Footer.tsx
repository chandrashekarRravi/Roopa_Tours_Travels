export default function Footer() {
  return (
    <footer className="bg-[#0E14CC] py-12 border-t border-[#FFFFFF]/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 mb-12">
          <div className="md:col-span-2">
            <div className="font-playfair text-2xl font-bold tracking-tight text-[#FFFFFF] mb-4">
              Roopa <span className="text-[#EAFFBF]">Travels</span>
            </div>
            <p className="text-[#FFFFFF]/70 max-w-sm">
              Your trusted partner for premium travel experiences and reliable cab services in Karnataka. Discover the beauty of South India with us.
            </p>
          </div>

          <div>
            <h4 className="text-[#FFFFFF] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#FFFFFF]/70 text-sm">
              <li><a href="#" className="hover:text-[#EAFFBF] transition-colors">Home</a></li>
              <li><a href="#packages" className="hover:text-[#EAFFBF] transition-colors">Tour Packages</a></li>
              <li><a href="#cabs" className="hover:text-[#EAFFBF] transition-colors">Cab Services</a></li>
              <li><a href="#destinations" className="hover:text-[#EAFFBF] transition-colors">Destinations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFFFFF] font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-[#FFFFFF]/70 text-sm">
              <li><a href="#" className="hover:text-[#EAFFBF] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#EAFFBF] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#EAFFBF] transition-colors">Cancellation Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#FFFFFF]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#FFFFFF]0">
          <p>&copy; {new Date().getFullYear()} Roopa Tours & Travels Mangalore. All rights reserved.</p>
          <p>Designed by <a href="https://weandyoumarketing.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#EAFFBF] transition-colors">weandyou</a></p>
        </div>
      </div>
    </footer>
  );
}
