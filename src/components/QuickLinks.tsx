'use client';

export default function QuickLinks() {
  const quickLinks = [
    {
      icon: 'fa-briefcase',
      title: 'Jobs',
      link: '/jobs',
      description: 'Find career opportunities'
    },
    {
      icon: 'fa-exclamation-circle',
      title: 'Report a Concern',
      link: '/report',
      description: 'Submit issues or concerns'
    },
    {
      icon: 'fa-file-alt',
      title: 'Agendas & Minutes',
      link: '/agendas',
      description: 'Access meeting documents'
    },
    {
      icon: 'fa-money-bill',
      title: 'Pay Utility Bill',
      link: '/pay',
      description: 'Manage your utility payments'
    },
    {
      icon: 'fa-calendar-check',
      title: 'Activity Registration',
      link: '/activities',
      description: 'Sign up for city programs'
    },
    {
      icon: 'fa-tv',
      title: 'Watch DBTV Live',
      link: '/dbtv',
      description: 'Stream city meetings live'
    },
    {
      icon: 'fa-bell',
      title: 'Notify Me',
      link: '/notifications',
      description: 'Get city alerts & updates'
    },
    {
      icon: 'fa-map',
      title: 'Land Management',
      link: '/land-management',
      description: 'View zoning information'
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptLTExLjk5NyAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyeiIgc3Ryb2tlPSIjNjk3N2E5IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] bg-repeat opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <a href={link.link} key={index} className="group">
              <div className="relative bg-white rounded-2xl p-6 h-full transition-all duration-500 border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:-translate-y-1">
                {/* Icon Container */}
                <div className="absolute -top-4 left-6 w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center transform transition-all duration-500 group-hover:bg-brand-blue group-hover:scale-110 group-hover:rotate-[360deg]">
                  <i className={`fas ${link.icon} text-xl text-white`}></i>
                </div>

                {/* Content */}
                <div className="pt-8">
                  <h3 className="font-dunbar text-lg text-gray-800 mb-2 transition-colors duration-300 group-hover:text-brand-blue">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm transition-colors duration-300">
                    {link.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 transform translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  <i className="fas fa-arrow-right text-brand-blue"></i>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
