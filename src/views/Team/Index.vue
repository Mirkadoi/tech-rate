<template>
  <section class="container">
    <h1 class="title">About Us</h1>

    <div class="description-block">
      <h2>Our team</h2>
      <p>The information provided on this website does not constitute investment<br/> advice, financial advice, trading advice, or any other sort of advice and<br/> you should not treat any of the website's content as such. </p>
    </div>

    <team-list />

    <div class="description-block">
      <h2>In The News</h2>
      <p>The information provided on this website does not constitute investment<br/> advice, financial advice, trading advice, or any other sort of advice and<br/> you should not treat any of the website's content as such. </p>
    </div>

    <news-list />
  </section>
</template>

<script>
import TeamList from "@/views/Team/_components/TeamList";
import NewsList from "@/views/Team/_components/NewsList";

export default {
  components: { TeamList, NewsList }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@700&family=Sen:wght@700&display=swap');

.container {
  padding: 24px 40px 80px;
  font-family: 'Open Sans';
  color: $text-color-black;
  background: #FAFAFA;
}

.title {
  font-family: 'Cairo';
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
