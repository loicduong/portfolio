export default defineAppConfig({
  appName: 'Loic Duong Portfolio',
  appDescription: 'Canvas is a simple but beautiful portfolio template for designers and developers built with Nuxt and Tailwind CSS. Made with ❤️ by Loic Duong',
  profilePicture: '/assets/loic-duong.webp',
  footerName: 'Loic Duong',
  email: 'dploc96@gmail.com',
  twitterUsername: '@HugoRCD__',
  phone: '(+84) 842 575 139',
  openGraphImage: 'https://canvas.hrcd.fr/social-preview.jpg',
  socials: {
    github: 'https://github.com/loicduong',
    // twitter: 'https://twitter.com/HugoRCD__',
    linkedin: 'https://www.linkedin.com/in/loicduong',
    // instagram: 'https://www.instagram.com/hugo.rcd_',
    // spotify: 'https://open.spotify.com/user/yuvl0zpp3bpx4hne1ag7huten?si=df7ee2777c0c4fc4',
  },
  ui: {
    primary: 'emerald',
    gray: 'zinc',
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    input: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
    textarea: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
  },
})
