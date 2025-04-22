export default defineAppConfig({
  appName: 'Loic Duong Portfolio',
  appDescription: 'Canvas is a simple but beautiful portfolio template for designers and developers built with Nuxt and Tailwind CSS. Made with ❤️ by Loic Duong',
  profilePicture: '/assets/loic-duong.webp',
  footerName: 'Loic Duong',
  email: 'dploc96@gmail.com',
  // twitterUsername: '@HugoRCD__',
  phone: '(+84) 842 575 139',
  openGraphImage: 'https://canvas.hrcd.fr/social-preview.jpg',
  socials: {
    linkedin: 'https://www.linkedin.com/in/loicduong',
    github: 'https://github.com/loicduong',
    telegram: 'https://t.me/loicduong',
    gmail: 'mailto:dploc96@gmail.com',
    whatapps: 'https://wa.me/+84842575139',
    upwork: 'https://www.upwork.com/freelancers/~01b8c755abb9d27024',
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
