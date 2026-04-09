"use client";

import { ChevronLeft, Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pb-24 md:pb-12 text-[#1A2E44]">
      {/* 1. Header Area with Pink Background */}
      <div className="bg-[#F7D8D9] pt-12 pb-6 px-5 rounded-b-2xl md:rounded-none">
        <div className="w-full max-w-md mx-auto flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="p-1 -ml-1 hover:bg-white/20 rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6 text-[#1A2E44]" strokeWidth={2.5} />
            </Link>
            <div className="font-serif text-[22px] italic font-bold text-[#1A2E44] leading-none tracking-tight text-right">
              Grace
              <br />
              <span className="text-[14px]">Mission</span>
            </div>
          </div>
          <h1 className="font-serif text-[40px] font-bold text-[#1A2E44] tracking-tight leading-none mt-2">
            Get in Touch
          </h1>
        </div>
      </div>

      <div className="max-w-md mx-auto w-full px-5 pt-8 flex flex-col gap-8">
        {/* 2. Contact Form with Underlined Inputs */}
        <form className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="text-[12px] font-bold text-[#1A2E44] mb-0.5 tracking-wide">Name</label>
            <input 
              type="text" 
              placeholder="Jane Doe"
              className="bg-transparent border-b-2 border-[#1A2E44] py-1.5 focus:outline-none focus:border-[#1A2E44] text-[15px] font-medium placeholder-[#1A2E44] min-h-[30px]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[12px] font-bold text-[#1A2E44] mb-0.5 tracking-wide">Email Address</label>
            <input 
              type="email" 
              placeholder="Email address@imail.com"
              className="bg-transparent border-b-2 border-[#1A2E44] py-1.5 focus:outline-none focus:border-[#1A2E44] text-[15px] font-medium placeholder-[#1A2E44] min-h-[30px]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[12px] font-bold text-[#1A2E44] mb-0.5 tracking-wide">Subject</label>
            <input 
              type="text" 
              placeholder="Please enter your query"
              className="bg-transparent border-b-2 border-[#1A2E44] py-1.5 focus:outline-none focus:border-[#1A2E44] text-[15px] font-medium placeholder-[#1A2E44] min-h-[30px]"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-[12px] font-bold text-[#1A2E44] mb-0.5 tracking-wide">Message</label>
            <textarea 
              rows={1}
              placeholder="Please enter your query"
              className="bg-transparent border-b-2 border-[#1A2E44] py-1.5 focus:outline-none focus:border-[#1A2E44] text-[15px] font-medium placeholder-[#1A2E44] resize-none min-h-[30px] overflow-hidden"
            />
          </div>

          <button 
            type="button"
            className="w-full bg-[#1A2E44] hover:bg-[#112030] text-[#F7D8D9] font-bold text-[15px] py-3.5 rounded-[16px] shadow-[0_8px_16px_rgba(26,46,68,0.2)] transition-all"
          >
            Send Message
          </button>
        </form>

        {/* 3. Quick Contact Grid */}
        <div className="mt-4">
          <h2 className="font-bold text-[20px] text-[#1A2E44] mb-4 tracking-tight">Quick Contact</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#1A2E44] rounded-[24px] p-4 flex flex-col items-center justify-center gap-2 aspect-[1.1] shadow-sm hover:scale-[1.02] transition-transform cursor-pointer">
              <Phone className="w-8 h-8 text-[#F7D8D9]" strokeWidth={1.5} />
              <span className="text-[#F7D8D9] text-[12px] font-medium tracking-wide">Call Us</span>
            </div>
            <div className="bg-[#1A2E44] rounded-[24px] p-4 flex flex-col items-center justify-center gap-2 aspect-[1.1] shadow-sm hover:scale-[1.02] transition-transform cursor-pointer">
              <Mail className="w-8 h-8 text-[#F7D8D9]" strokeWidth={1.5} />
              <span className="text-[#F7D8D9] text-[12px] font-medium tracking-wide">Email Us</span>
            </div>
            <div className="bg-[#1A2E44] rounded-[24px] p-4 flex flex-col items-center justify-center gap-2 aspect-[1.1] shadow-sm hover:scale-[1.02] transition-transform cursor-pointer">
              <MessageCircle className="w-8 h-8 text-[#F7D8D9]" strokeWidth={1.5} />
              <span className="text-[#F7D8D9] text-[12px] font-medium tracking-wide">WhatsApp</span>
            </div>
          </div>
        </div>

        {/* 4. Map Section */}
        <div className="mt-2 mb-8 relative">
          <div className="relative w-full h-[180px] rounded-[20px] overflow-hidden bg-[#E2E6E2] shadow-sm border border-gray-150">
            {/* Fake map background using pure CSS generic layout */}
            <div 
              className="absolute inset-0 opacity-40 flex items-center justify-center" 
              style={{ backgroundImage: "radial-gradient(#C4C6C4 2px, transparent 2px)", backgroundSize: "16px 16px" }}
            >
               {/* Roads styling implied */}
               <div className="absolute top-1/2 w-[140%] h-[12px] bg-white transform -rotate-12 rounded-full" />
               <div className="absolute left-[35%] w-[12px] h-[140%] bg-white transform rotate-12 rounded-full" />
            </div>
            
            {/* Context Elements */}
            <div className="absolute top-2 left-2 text-[8px] font-bold text-gray-500 uppercase">Philodel St</div>
            <div className="absolute top-4 right-8 text-[8px] font-bold text-gray-500 uppercase">Weeton St</div>
            <div className="absolute bottom-6 right-2 text-[8px] font-bold text-gray-500">Legal</div>
            <div className="absolute bottom-2 left-2 font-bold text-gray-600 text-[10px] flex items-center">
              <span className="text-xl leading-none mr-0.5"></span>Maps
            </div>

            {/* Marker Overlay */}
            <div className="absolute inset-0 flex flex-col items-center pt-6 pointer-events-none">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-[#EF4444] shadow-[0_4px_12px_rgba(239,68,68,0.5)] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                </div>
                {/* Pin pointer tip */}
                <div className="absolute -bottom-[5px] left-1/2 transform -translate-x-1/2 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#EF4444]" />
              </div>
              <p className="text-[10px] font-bold text-[#1A2E44] mt-2 leading-none">Grace Mission School</p>
              
              {/* Float Button Override */}
              <button className="mt-4 pointer-events-auto bg-[#1A2E44] hover:bg-[#112030] text-[#F7D8D9] px-6 py-2 rounded-full text-[13px] font-bold shadow-[0_4px_12px_rgba(26,46,68,0.3)] transition-colors whitespace-nowrap">
                Open in Maps
              </button>

              <div className="flex flex-col items-center mt-3 text-[10px] text-gray-600 font-medium">
                <p className="flex items-center gap-1"><span className="text-[#EF4444]">📍</span> Grace Mission School</p>
                <p>Langalone Street, WA 60046</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
