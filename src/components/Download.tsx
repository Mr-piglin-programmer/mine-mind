export default function Download() {
  return (
    <section id="download" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Card Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-[#12121a] to-blue-900/40 border border-white/10 rounded-3xl" />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative p-8 sm:p-12 lg:p-16 text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 mb-8 shadow-lg shadow-purple-500/25">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              开始你的
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}游戏之旅
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              免费下载 Nova Launcher，体验前所未有的游戏启动方式
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-xl shadow-purple-500/20 hover:shadow-purple-500/30 hover:scale-[1.02]">
                <i className="fa-brands fa-windows text-xl" />
                <div className="text-left">
                  <div className="text-[10px] text-purple-200 uppercase tracking-wider">下载适用于</div>
                  <div className="text-sm font-semibold">Windows 10/11</div>
                </div>
              </button>
              <button className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-[1.02]">
                <i className="fa-brands fa-apple text-xl" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">下载适用于</div>
                  <div className="text-sm font-semibold">macOS 12+</div>
                </div>
              </button>
              <button className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-[1.02]">
                <i className="fa-brands fa-linux text-xl" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">下载适用于</div>
                  <div className="text-sm font-semibold">Linux</div>
                </div>
              </button>
            </div>

            {/* Version Info */}
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <span>版本 2.0.3</span>
              <span>•</span>
              <span>62 MB</span>
              <span>•</span>
              <span>2024年12月更新</span>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {[
            { icon: '🔒', text: '安全无毒' },
            { icon: '⚡', text: '极速下载' },
            { icon: '🆓', text: '完全免费' },
            { icon: '🔄', text: '自动更新' },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-sm text-gray-400">
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
