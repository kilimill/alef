<template lang="pug">
header.header
  .header__inner
    router-link(:to='{ name: "index"}').logo
      Logo.logo__img(src='~@/assets/img/logo.png')
    
    ul.header__list
      li.header__list-item(v-for='(link, i) in links' :key='i')
        router-link.header__list-link(:to='link.url') {{link.title}}
</template>

<script>
import Logo from "@/assets/img/svg/logo.svg";

export default {
  data() {
    return {
      links: [
        {
          title: 'Форма',
          url: '/'
        },
        {
          title: 'Превью',
          url: '/preview'
        }
      ]
    }
  },

  components: {
    Logo
  },

  methods: {
    linkPage(url) {
      this.$router.push(`${url}`)
    }
  }
};
</script>
