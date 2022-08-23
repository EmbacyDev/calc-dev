<template>
  <div class='total-page'>
    <div class="container">
      <h1 v-if="lengthTotal"> Ваш охуенный результат </h1>
      <h1 v-else>Необходимо выбрать данные в калькуляторе</h1>
      <ul v-for="item in calcTotal"
          :key="item">
        <li>BTC {{ item }}</li>
      </ul>
      <router-link class="btn-link"
                   @click="removeTotal"
                   to="/calculator">Пройти заново</router-link>
      <router-link class="btn-link"
                   @click="removeTotal"
                   to="/">Врнуться на главную</router-link>
      <span @click="removeTotal()"
            @keydown="removeTotal">Очистить результат</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TotalPage',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    lengthTotal() {
      return this.calcTotal.length > 1;
    },
    ...mapGetters([
      'TOTAL'
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
  methods: {
    ...mapActions([
      'ALL_REMOVE_TOTAL'
    ]),
    removeTotal() {
      this.ALL_REMOVE_TOTAL();
    }
  }
};
</script>

<style lang="sass">

</style>
