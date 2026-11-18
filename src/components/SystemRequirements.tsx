export default function SystemRequirements() {
  return (
    <section id="requirements" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-4">
            系统要求
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            轻量级{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              低配置运行
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            优化极致，即使是老旧设备也能流畅运行
          </p>
        </div>

        {/* Requirements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Minimum */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gray-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">最低配置</h3>
                <p className="text-xs text-gray-500">基础运行要求</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: '操作系统', value: 'Windows 7 / macOS 10.13' },
                { label: '处理器', value: 'Intel Core i3 / AMD Ryzen 3' },
                { label: '内存', value: '4 GB RAM' },
                { label: '存储空间', value: '500 MB 可用空间' },
                { label: '网络', value: '宽带互联网连接' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                  <span className="text-sm text-gray-400">{item.label}</span>
                  <span className="text-sm text-gray-200 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-purple-500/[0.05] to-blue-500/[0.05] border border-purple-500/20">
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 rounded-md bg-purple-500/20 text-purple-300 text-xs font-medium">推荐</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">推荐配置</h3>
                <p className="text-xs text-gray-500">最佳体验配置</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: '操作系统', value: 'Windows 10/11 / macOS 12+' },
                { label: '处理器', value: 'Intel Core i5 / AMD Ryzen 5' },
                { label: '内存', value: '8 GB RAM' },
                { label: '存储空间', value: '1 GB SSD 可用空间' },
                { label: '网络', value: '高速宽带连接' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                  <span className="text-sm text-gray-400">{item.label}</span>
                  <span className="text-sm text-gray-200 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform Support */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">支持平台</p>
          <div className="flex items-center justify-center gap-6 sm:gap-8">
            {[
              { name: 'Windows', icon: 'fa-brands fa-windows' },
              { name: 'macOS', icon: 'fa-brands fa-apple' },
              { name: 'Linux', icon: 'fa-brands fa-linux' },
            ].map((platform) => (
              <div key={platform.name} className="flex flex-col items-center gap-2 group">
                <i className={`${platform.icon} text-2xl sm:text-3xl text-gray-500 group-hover:text-white transition-colors`} />
                <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
