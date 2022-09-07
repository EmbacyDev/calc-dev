<template>
  <section>
    <div class="page">
      <div class="container">
        <h1 v-if="lengthTotal"> Ваш охуенный результат </h1>
        <h1 v-else>Необходимо выбрать данные в калькуляторе</h1>
        <h2>{{ variant }}</h2>
        <h3>{{ pageType }}</h3>
        <ul v-for="item in calcTotal"
            :key="item">
          <li>Вопрос: {{ item.q }}, выбраное значение {{ item.v }}</li>
        </ul>
        <router-link class="btn-link"
                     @click="removeTotalAll"
                     to="/">Врнуться на главную
        </router-link>
        <span @click="removeTotalAll()"
              @keydown="removeTotalAll">Очистить результат</span>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TotalPage',
  components: {},
  props: {},
  data() {
    return {
      variant: '',
      pageType: ''
    };
  },
  computed: {
    lengthTotal() {
      return this.calcTotal.length > 1;
    },
    ...mapGetters([
      'TOTAL',
      'VARIANT'
    ]),
    calcTotal() {
      let allProductInCart = [];
      if (this.TOTAL.length) {
        this.TOTAL.forEach(item => {
          allProductInCart.push(item);
        });
      } else {
        allProductInCart = '0';
      }
      return allProductInCart;
    }
  },
  watch: {},
  mounted() {
    if (this.VARIANT[0] === 1) {
      this.variant = 'Code';
    }
    if (this.VARIANT[0] > 2) {
      this.variant = 'No code';
    }
    if (this.VARIANT[0] > 3) {
      this.pageType = 'Коорпор сайт';
    }
    if (this.VARIANT[0] > 4) {
      this.pageType = 'Landing page';
    }
  },
  methods: {
    ...mapActions([
      'ALL_REMOVE_TOTAL'
    ]),
    removeTotalAll() {
      this.ALL_REMOVE_TOTAL();
    }
  }
};
</script>

<style lang="sass">
</style>
