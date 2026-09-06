import React from "react";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#070B18] text-white px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto border-t border-white/8 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <p className="text-xs md:text-sm text-slate-500">
            © 2026 Aakash Developer. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 text-xs md:text-sm text-slate-500">
            Made with
            <Heart
              size={14}
              className="text-violet-400 fill-violet-400"
            />
            by
            <span className="text-slate-300 font-medium">Aakash</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
