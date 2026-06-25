'use client';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full max-w-5xl mx-auto py-24 px-4 scroll-mt-32">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-light text-white mb-4 tracking-tight">
            Let's architect your next <span className="font-bold text-[#5EEAD4]">system.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Whether you need a custom ERP, a high-speed web application, or a complete database overhaul, Onyq Tech is ready to engineer the solution.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-gray-300">
              <span className="w-10 h-10 rounded-full bg-[#1e1f24] flex items-center justify-center border border-white/10">📍</span>
              <span>Pune, Maharashtra</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <span className="w-10 h-10 rounded-full bg-[#1e1f24] flex items-center justify-center border border-white/10">📜</span>
              <span>MSME Registered Enterprise</span>
            </div>
            
            <div className="flex items-center space-x-4 text-gray-300 pt-4 border-t border-white/5">
              <span className="w-10 h-10 rounded-full bg-[#1e1f24] flex items-center justify-center border border-white/10">✉️</span>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-1">Direct Inquiry</span>
                <a href="mailto:onyqtech@gmail.com" className="text-white hover:text-[#5EEAD4] transition-colors font-medium">
                  onyqtech@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
            
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</label>
                <input name="name" required type="text" className="w-full bg-[#151619] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#5EEAD4] transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</label>
                <input name="email" required type="email" className="w-full bg-[#151619] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#5EEAD4] transition-colors" placeholder="john@company.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone Number</label>
                <input name="phone" required type="tel" className="w-full bg-[#151619] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#5EEAD4] transition-colors" placeholder="+91 98765 43210" />
              </div>
              <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Service Required</label>
                  <select name="service" required className="w-full bg-[#151619] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#5EEAD4] transition-colors appearance-none">
                    <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                    <option value="Custom ERP / Dashboard">Custom ERP / Dashboard</option>
                    <option value="Database Architecture">Database Architecture</option>
                    <option value="Technical Consultation">Technical Consultation</option>
                  </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Project Brief</label>
              <textarea name="message" required rows={4} className="w-full bg-[#151619] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#5EEAD4] transition-colors resize-none" placeholder="Tell us about the system you need built..."></textarea>
            </div>

            <input type="hidden" name="subject" value="New Inquiry from Onyq Tech Website" />

            <button type="submit" className="w-full bg-white text-black font-bold text-sm tracking-wider uppercase py-4 rounded-lg hover:bg-gray-200 transition-colors mt-2">
              Submit Inquiry
            </button>
            
          </form>
        </div>

      </div>
    </section>
  );
}