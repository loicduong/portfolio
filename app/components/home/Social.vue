<script setup lang="ts">
const socialMediaRegexMap = [
  { regex: /github\.com/, name: 'GitHub', logo: 'SvgoGithub' },
  { regex: /linkedin\.com/, name: 'LinkedIn', logo: 'SvgoLinkedin' },
  { regex: /upwork\.com/, name: 'Upwork', logo: 'SvgoUpwork' },
  { regex: /wa\.me/, name: 'WhatsApp', logo: 'SvgoWhatsapp' },
  { regex: /mailto/, name: 'Gmail', logo: 'SvgoGmail' },
]

const { socials } = useAppConfig()
const mappedSocials = Object.values(socials).map((link) => {
  const foundSocial = socialMediaRegexMap.find(social => social.regex.test(link))
  if (!foundSocial) throw new Error(`No social media found for link: ${link}`)
  const { name, logo } = foundSocial
  return { name, link, logo }
})
</script>

<template>
  <div class="my-7 flex items-center justify-center gap-6 sm:gap-10">
    <UTooltip
      v-for="social in mappedSocials"
      :key="social.name"
      :text="social.name"
    >
      <NuxtLink
        :to="social.link"
        target="_blank"
        class="flex items-center justify-center"
        :aria-label="'Go to ' + social.name + ' profile'"
      >
        <component
          :is="social.logo"
          class="social-item size-6 text-muted transition-all duration-300 hover:text-main"
          :font-controlled="false"
          :alt="social.name + ' logo'"
          :aria-label="social.name + ' logo'"
        />
      </NuxtLink>
    </UTooltip>
  </div>
</template>
