export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Nova Launcher
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4 max-w-xs">
              新一代游戏启动器，为你提供极致流畅的游戏启动体验。
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: 'fa-brands fa-discord', label: 'Discord' },
                { icon: 'fa-brands fa-twitter', label: 'Twitter' },
                { icon: 'fa-brands fa-github', label: 'GitHub' },
                { icon: 'fa-brands fa-bilibili', label: 'Bilibili' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all"
                >
                  <i className={`${social.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">产品</h4>
            <ul className="space-y-2.5">
              {['功能介绍', '更新日志', '路线图', 'Beta 测试'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">支持</h4>
            <ul className="space-y-2.5">
              {['帮助中心', '常见问题', '社区论坛', '反馈建议'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">关于</h4>
            <ul className="space-y-2.5">
              {['关于我们', '隐私政策', '服务条款', '联系我们'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2024 Nova Launcher. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">隐私政策</a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">服务条款</a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Cookie 设置</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
