<template>
  <div class="team-list">
    <div v-for="(el, i) in team" :key="i" class="team-item">
      <img class="team-img" :src="el.img">

      <p class="team-name">{{ el.name }}</p>
      <p class="team-position">{{ el.position }}</p>
      <p class="team-description">{{ el.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    team: [
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        name: 'Ivan Smirnov',
        position: 'Software Engineer',
        description: 'The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website\'s content as such. '
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        name: 'Alex Ivanov',
        position: 'Software Engineer',
        description: 'The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you. '
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        name: 'Oleg Nikolaev',
        position: 'Software Engineer',
        description: 'The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website\'s content as such. '
      }
    ]
  })
}
</script>

<style scoped lang="scss">
 .team-list {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   margin-bottom: 80px;
   grid-gap: 30px;

   .team-item {
     flex: 1;
     background: $color-white;
     border: 1px solid $border-color-l1;
     border-radius: 8px;
     padding: 25px 25px 35px;

     .team-img {
       width: 90px;
       height: 90px;
       border-radius: 50%;
       margin-bottom: 20px;
     }

     .team-name {
       font-weight: 600;
       font-size: 18px;
       line-height: 140%;
       color: $brand-color-pink;
       margin: 0 0 5px;
     }

     .team-position {
       font-size: 12px;
       line-height: 140%;
       letter-spacing: 0.05em;
       text-transform: uppercase;
       color: $text-color-dark-blue;
       margin: 0 0 16px;
     }

     .team-description {
       font-size: 14px;
       line-height: 150%;
       margin-bottom: 0;
     }
   }
 }
</style>
