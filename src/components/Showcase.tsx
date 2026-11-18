export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            界面预览
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            精心设计的{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              用户界面
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            简洁而不简单，每个像素都经过精心打磨
          </p>
        </div>

        {/* Mock UI */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glow effect behind the mockup */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-3xl blur-2xl" />
          
          {/* Main Window */}
          <div className="relative rounded-2xl border border-white/10 bg-[#12121a] overflow-hidden shadow-2xl">
            {/* Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d14] border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs text-gray-500 font-mono">Nova Launcher v2.0</div>
              <div className="w-16" />
            </div>

            {/* Content Area */}
            <div className="flex">
              {/* Sidebar */}
              <div className="hidden sm:block w-56 border-r border-white/5 p-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-sm text-purple-300">首页</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors">
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="text-sm text-gray-400">游戏库</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors">
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-sm text-gray-400">好友</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors">
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-400">历史</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors">
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-gray-400">设置</span>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6">
                {/* Featured Game */}
                <div className="relative rounded-xl overflow-hidden mb-6 bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="relative p-6 sm:p-8">
                    <div className="text-xs text-purple-300 font-medium mb-2">🔥 热门推荐</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">星际征途</h3>
                    <p className="text-sm text-gray-300 mb-4 max-w-md">探索无尽宇宙，征服星辰大海。全新资料片"暗物质觉醒"现已上线。</p>
                    <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-sm font-medium hover:from-purple-500 hover:to-blue-500 transition-all">
                      立即游玩
                    </button>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-24 h-24 sm:w-32 sm:h-32 opacity-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-purple-400">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="3" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                {/* Game Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: '幻境传说', status: '已安装', color: 'from-emerald-600/40 to-teal-600/40' },
                    { name: '机甲战士', status: '更新中...', color: 'from-orange-600/40 to-red-600/40' },
                    { name: '魔法学院', status: '已安装', color: 'from-blue-600/40 to-indigo-600/40' },
                    { name: '赛车狂飙', status: '未安装', color: 'from-pink-600/40 to-purple-600/40' },
                    { name: '末日生存', status: '已安装', color: 'from-gray-600/40 to-zinc-600/40' },
                    { name: '仙侠世界', status: '已安装', color: 'from-cyan-600/40 to-blue-600/40' },
                  ].map((game, i) => (
                    <div
                      key={i}
                      className={`relative p-4 rounded-lg bg-gradient-to-br ${game.color} border border-white/5 hover:border-white/10 transition-all cursor-pointer group`}
                    >
                      <div className="text-sm font-medium text-white mb-1">{game.name}</div>
                      <div className="text-xs text-gray-400">{game.status}</div>
                      <div className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
