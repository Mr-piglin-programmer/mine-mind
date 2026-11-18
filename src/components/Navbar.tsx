import { useState } from 'react';

interface NavbarProps {
  scrollY: number;
}

export default function Navbar({ scrollY }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = scrollY > 50;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-purple-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Nova Launcher
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">功能特性</a>
            <a href="#showcase" className="text-sm text-gray-300 hover:text-white transition-colors">界面预览</a>
            <a href="#requirements" className="text-sm text-gray-300 hover:text-white transition-colors">系统要求</a>
            <a href="#download" className="text-sm text-gray-300 hover:text-white transition-colors">下载</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#download"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-sm font-medium hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              立即下载
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block text-sm text-gray-300 hover:text-white py-2">功能特性</a>
            <a href="#showcase" className="block text-sm text-gray-300 hover:text-white py-2">界面预览</a>
            <a href="#requirements" className="block text-sm text-gray-300 hover:text-white py-2">系统要求</a>
            <a href="#download" className="block text-sm text-gray-300 hover:text-white py-2">下载</a>
            <a
              href="#download"
              className="block text-center px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-sm font-medium mt-4"
            >
              立即下载
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
