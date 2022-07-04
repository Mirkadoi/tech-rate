<template>
  <section class="container-about">
    <h1 class="title">About Us</h1>

    <div class="description-block">
      <h2>Our team</h2>
      <p>The information provided on this website does not constitute investment<br/> advice, financial advice, trading advice, or any other sort of advice and<br/> you should not treat any of the website's content as such. </p>
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
  padding: 24px 40px 80px;
  font-family: $font-base;
  color: $text-color-black;
  background: #FAFAFA;
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
  }
}
</style>
