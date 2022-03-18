<template lang="pug">
section.page
  .container
    h1.title Персональные данные

    form.form(@submit.prevent='saveUser')
      .form__person
        label.form__label
          span.form__label-name {{ userFields.name }}
          input.form__input(v-model="user.name" @input='event => user.name = event.target.value.replace(/[^a-zA-Zа-яёА-ЯЁ]+$/g,"")' required)
        label.form__label
          span.form__label-name {{ userFields.age }}
          input.form__input(maxlength="2" v-model="user.age" @input='event => user.age = event.target.value.replace(/[^0-9]+$/g,"")' required)

      .form__children
        .form__children-header
          h2.title Дети (макс. 5)

          button.form__add(
            @click.prevent="addChild",
            :class="{ hide: user.children.length >= 5 }"
          )
            addIcon.form__add-img
            span.form__add-text Добавить ребенка

        .form__child(
          v-if="user.children.length",
          v-for="(child, i) in user.children",
          :key="i"
        )
          .form__field
            label.form__label.form__label--short 
              span.form__label-name {{ userFields.name }}
              input.form__input(v-model="child.name"  @input='event => child.name = event.target.value.replace(/[^a-zA-Zа-яёА-ЯЁ]+$/g,"")'  required)
          .form__field
            label.form__label.form__label--short 
              span.form__label-name {{ userFields.age }}
              input.form__input(maxlength="2" v-model="child.age" @input='event => child.age = event.target.value.replace(/[^0-9]+$/g,"")' required)

          button.form__child-del(@click.prevent="removeChild(i)") Удалить

      button.form__btn Сохранить
</template>

<script>
import addIcon from "@/assets/img/svg/add.svg";
export default {
  components: {
    addIcon,
  },
  data() {
    return {
      userFields: {
        name: "Имя",
        age: "Возраст",
      },

      user: {
        name: "",
        age: "",

        children: [],
      },
    };
  },

  methods: {

    addChild() {
      this.user.children.push({ name: "", age: "" });
    },

    removeChild(index) {
      this.user.children = this.user.children.filter((item, i) => i !== index);
    },

    saveUser() {
      this.$store.commit("user/setUser", this.user);
      this.$router.push('/preview')
    },
  },
};
</script>
