<template lang="pug">
section.preview
  .container
    h1.title {{title}}

    .preview__wrapper(v-if='user.name')
      p.preview__user.text {{ user.name }}, {{ plural(user.age) }}

      .preview__children(v-if="user.children.length")
        h2.title Дети

        ul.preview__list
          li.preview__list-item(v-for="(child, i) in user.children", :key="i")
            p.preview__list-text.text {{ child.name }}, {{ plural(child.age) }}
    
    p.text(v-else) Вы еще не ввели Ваши "{{title}}" :с
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      title: 'Персональные данные'
    }
  },

  computed: {
    ...mapGetters("user", ["user"]),
  },

  methods: {
    plural(number) {
      let cases = [2, 0, 1, 1, 1, 2];

      var declension = ["год", "года", "лет"];
      return number + ' ' + declension[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : cases[number % 10 < 5 ? number % 10 : 5]
      ];
    },
  },
};
</script>
