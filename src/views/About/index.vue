<template>
  <section class="container-about">
    <h1 class="title">About Us</h1>

    <div class="description-block">
      <h2>Our team</h2>
<!--      <p>The information provided on this website does not constitute investment<br/> advice, financial advice, trading advice, or any other sort of advice and<br/> you should not treat any of the website's content as such. </p>-->
      <p>We are a team of engineers and analysts specialized in blockchain technology and business analytics with wide experience in crypto market. Our core team is famous for its market reports made during 2017-2018 bullish market and technical evaluation of the projects.</p>
      <p>We started as an Audit & Development firm for smart contracts in the beginning of the ICO rush and expanded our expertise to the market researches and exchange analytics, security and technical valuation of the projects.</p>
    </div>

    <TeamList />

    <div class="description-block">
      <h2 id='contact'>Contacts</h2>
    </div>

    <ContactList />

<!--    <div class="description-block">-->
<!--      <h2>In The News</h2>-->
<!--      <p>The information provided on this website does not constitute investment<br/> advice, financial advice, trading advice, or any other sort of advice and<br/> you should not treat any of the website's content as such. </p>-->
<!--    </div>-->

<!--    <news-list />-->
  </section>
</template>

<script>
import TeamList from "@/views/About/_components/TeamList";
import ContactList from '@/views/About/_components/ContactList';

import { goto } from '@/tools/utils';

import { watch } from 'vue';
import { useRoute } from 'vue-router';


// import Button from '@/components/ui/Button';
// import NewsList from "@/views/About/_components/NewsList";

export default {
  components: { TeamList, ContactList },

  setup() {
    const route = useRoute();

    watch(() => route.params.anchor,()=> {
      if (route.params.anchor === 'contact') {
        setTimeout(() => goto('contact'), 600)
      }
    },{immediate:true})

    return { goto }
  }
}
</script>

<style scoped lang="scss">
.container-about {
  width: 100%;
  padding: 55px 100px 80px 100px;
  font-family: $font-base;
  color: $text-color-black;
}

.title {
  font-family: $font-alt;
  font-size: 46px;
  line-height: 68px;
  margin-bottom: 30px;
}

.description-block {
  margin-bottom: 40px;

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    margin-bottom: 20px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    margin-bottom: 0;
    max-width: 548px;
  }
}
</style>
