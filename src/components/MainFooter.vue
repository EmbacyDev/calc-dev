<template>
  <section>
    <div class="footer">
      <div class="footer_left">
        <img class="footer_logo"
             src="../assets/images/png/logoEmbacyFooter.png"
             alt="embacy">
      </div>
      <div class="footer-grid">
        <div class="footer-grid_item_top">
          <div class="footer-grid_title">
            <p>Agency</p>
          </div>
          <a class="link-gr"
             v-for="item in linkAgency"
             :key="item.name"
             :href="item.href">{{ item.name }}
          </a>
        </div>
        <div class="footer-grid_item_top">
          <div class="footer-grid_title">
            <p>Services</p>
          </div>
          <a class="link-gr"
             v-for="item in linkServices"
             :key="item.name"
             :href="item.href">{{ item.name }}
          </a>
        </div>
        <div class="footer-grid_item_top">
          <div class="footer-grid_title">
            <p>Services</p>
          </div>
          <a class="link-gr"
             v-for="item in linkContact"
             :key="item.name"
             :href="item.href">{{ item.name }}
          </a>
        </div>
        <div class="footer-grid_item_top">
          <div class="footer-grid_title">
            <p>Mail</p>
          </div>
          <a class="link-gr"
             href="mailto:hello@embacy.io">hello@embacy.io</a>
        </div>
        <div class="footer-grid_item_bottom"
             v-for="item in timeZones"
             :key="item.name">
          <p>{{ item.name }}</p>
          <p :id="item.id">{{ item.time }}</p>
          <a class="link-gr"
             :href="`tel:${item.telephone}`">{{ item.telephone }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'MainFooter',
  components: {},
  props: {},
  data() {
    return {
      linkAgency: [
        { name: 'Works', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Culture', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Showreel', href: '#' }
      ],
      linkServices: [
        { name: 'Branding', href: '#' },
        { name: 'Web Design', href: '#' },
        { name: 'User Interfaces', href: '#' },
        { name: 'Web Development', href: '#' }
      ],
      linkContact: [
        { name: 'Clutch', href: 'https://clutch.co/profile/embacy#summary' },
        { name: 'Behance', href: 'https://www.behance.net/embacy_team' },
        { name: 'Instagram', href: 'https://www.instagram.com/embacy.io/' },
        { name: 'Facebook', href: 'https://www.facebook.com/embacy.io/' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/company/embacy/' },
        { name: 'Webflow', href: 'https://webflow.com/embacy' }
      ],
      timeZones: [
        { id: 'paris-time', name: 'Paris, France', timeZon: 2, time: '', telephone: '+33 65 811 8161' },
        { id: 'moscow-time', name: 'Moscow, Russia', timeZon: 3, time: '', telephone: '+7 999 987 41 15' },
        { id: 'yerevan-time', name: 'Yerevan, Armenia', timeZon: 1, time: '', telephone: '+35 79 514 4972' },
        { id: 'bali-time', name: 'Bali, Indonesia', timeZon: 8, time: '', telephone: '+62 881 037 345 995' }
      ],
      localTime: ' '
    };
  },
  computed: { },
  watch: {},
  mounted() {
    this.getTime();
    setInterval(this.getTime, 60000);
  },
  methods: {
    getCurrentTime(j) {
      const time = new Date(Date.now());
      const h = time.getUTCHours();
      let m = time.getUTCMinutes();
      if (m < 10) {
        m = `0${m}`;
      }
      return `${h + j}:${m}`;
    },
    getTime() {
      const items = Object.values(this.timeZones);
      items.forEach(el => {
        el.time = this.getCurrentTime(el.timeZon);
      });
    }
  }
};
</script>

<style lang="sass">
.footer
  display: grid
  grid-template-columns: 0.455fr 1fr
  grid-column-gap: 1.25em
  grid-template-rows: auto
  margin-right: auto
  margin-left: auto
  padding: 12.25em 3.625em 2.62em 3.625em
  justify-content: space-between
  .footer_left
    margin-top: -0.0625em
    .footer_logo
      width: 10.75em
  .footer-grid
    display: grid
    grid-auto-columns: 1fr
    grid-column-gap: 3.5em
    grid-row-gap: 6.5em
    grid-template-columns: 1fr 1fr 1fr 1fr
    grid-template-rows: auto auto
    .footer-grid_item_top
      display: flex
      flex-direction: column
      grid-row-gap: 0.5em
      grid-column-start: span 1
      grid-column-end: span 1
      grid-row-start: span 1
      grid-row-end: span 1
      .footer-grid_title
        margin-bottom: 0.5em
    .footer-grid_item_bottom
      display: flex
      flex-direction: column
      grid-row-gap: 0.25em
      grid-column-start: span 1
      grid-column-end: span 1
      grid-row-start: span 1
      grid-row-end: span 1

@include tablet-d
  .footer
    display: flex
    padding-top: 19.01vw
    padding-bottom: 5.7vw
    flex-direction: column
    .footer_left
      background: red
      margin-bottom: 8.33vw
      .footer_logo
        width: 22.3vw
    .footer-grid
      grid-column-gap: 5.2vw
      grid-row-gap: 10.41vw
      .footer-grid_item_top
        grid-row-gap: 1.04vw
        .footer-grid_title
          margin-bottom: 1.04vw
      .footer-grid_item_bottom
        grid-row-gap: 0.5vw

@include small-d
  .footer
    padding-top: 125px
    padding-bottom: 36px
    .footer_left
      background: green
      margin-top: 0
      margin-bottom: 0
      .footer_logo
        width: 172px
    .footer-grid
      grid-column-gap: 36px
      grid-row-gap: 56px
      grid-template-columns: 1fr 1fr
      .footer-grid_item_top
        grid-row-gap: 8px
        .footer-grid_title
          margin-bottom: 8px
      .footer-grid_item_bottom
        margin-top: 7px
</style>
