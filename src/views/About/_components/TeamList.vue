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
        name: 'Zufar G',
        position: 'Co - founder',
        description: 'Zufar worked at PwC for several years, managed BizDev unit at the famous startup rating agency and running his own startups. Swimmer, tennis player.'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        name: 'Il K',
        position: 'Co - founder',
        description: 'Il is ex Callisto Network and ICORating security engineer and Blockchain analyst, also he is a tech consultant in various fields such as blockchain, mobile development, ML, NN and AI.'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        name: 'Farkhad G',
        position: 'Team Lead',
        description: 'Farkhad is our Team Lead with several years\' experience of working as a senior engineer in a Russian IT company'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        name: 'Alice G',
        position: 'CMO',
        description: 'Alice worked as a marketing specialist at top blockchain focused agencies and passioned in crypto growth hacking.'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        name: 'Aynoor J',
        position: 'Sales & Business Development manager',
        description: 'Aynoor is our experienced Sales leader, previously involved in digital marketing project and client relationships.'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        name: 'Emil T',
        position: 'Sales & Business Development manager\n',
        description: 'Emil is our experienced Sales leader, previously involved in client relationships.'
      },

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
