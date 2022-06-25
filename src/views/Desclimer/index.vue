<template>
  <section class="container-disclaimer">
    <h1 class="desclimer-title">Disclaimer</h1>

    <div v-for="(block, i) in textBlocks" :key="i" class="desclimer-block">
      <h2 v-if="block.title" class="desclimer-block-title">{{ block.title }}</h2>
      <p v-if="block.text" class="desclimer-block-text">{{ block.text }}</p>

      <ol v-if="block.list" class="desclimer-block-list">
        <li v-for="el in block.list" :key="el" v-html="el"/>
      </ol>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    textBlocks: [{
      title: 'No Investment Advice',
      text: 'The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website\'s content as such. CertiK does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions.'
    }, {
      title: 'Accuracy of Information',
      text: 'CertiK will strive to ensure accuracy of information listed on this website although it will not hold any responsibility for any missing or wrong information. CertiK provides all information as is. You understand that you are using any and all information available here at your own risk. Any use or reliance on our content and services is solely at your own risk and discretion.'
    }, {
      title: 'Non Endorsement',
      text: 'All content provided herein our website, hyperlinked sites, associated applications, forums, blogs, social media accounts and other platforms on CertiK’s website does not constitute an endorsement, guarantee, warranty, or recommendation by CertiK. Do conduct your own due diligence before deciding to use any third party services. No content on our Site is meant to be a solicitation or offer.'
    }, {
      title: 'Official Domains',
      text: 'The domains certik.com, certik.io, and certik.org are official websites owned and operated by CertiK. Please verify that you are interacting with one of the following domains when visiting the Security Leaderboard or in communication with CertiK personnel.'
    }, {
      title: 'Important Notes',
      text: 'A CertiK KYC badge (a “Badge”) is issued to a project upon completion of our “know your customers (KYC)” vetting process for the project. Our vetting process is designed with the aim of de-anonymizing developers and enhancing transparency in the crypto industry. Specifically, our KYC vetting process consists of the following procedures:'
    }, {
      list: [
        'Identity Verification. We will collect [multiple forms of] identification documents from members<br/>of the project and run these documents through a third-party verification platform, in order to<br/> verify ID legitimacy, conduct liveness check and obtain an individualized risk score.',
        'KYC Questionnaire. We will send the project a questionnaire that collects information from<br/> persons internal to and responsible for the project as well as documentary evidence showing<br/> their roles with respect to the project.',
        'Investigation & Review. We will analyze and review the information collected through the<br/> procedures set forth above.',
        'Recorded Video Call. We will conduct a live, recorded meeting to live-verify all of the<br/> identification documents provided.'
      ]
    }, {
      text: 'The date indicated in a Badge for a project is the date on which we have completed our KYC vetting process set forth above for that project. As a result, you may not infer from the Badge that we have performed any procedures or we have renewed the KYC vetting process, in each case, at any time subsequent to the date for the Badge. In addition, our Badge is NOT a guarantee that the information that a developer provides us is trueful or complete, that such persons will not take any malicious actions, or that we can necessarily detect frauds perpetrated with "deep fake" or other sophisticated technologies. Instead, the Badge should be viewed as what it is: it is merely an indication that we have used commercially reasonable efforts to complete our KYC procedures set forth above on the date of the Badge.'
    }, {
      text: 'THE BADGE IS NOT A GUARANTEE FOR SAFETY. YOUR RELIANCE ON A BADGE IS SOLELY AT YOUR OWN RISK. WE ARE NOT RESPONSIBLE FOR YOUR INVESTMENT LOSS AND HEREBY EXPRESSLY DISCLAIM ANY LIABILITIES THAT MAY ARISE FROM YOUR USE OR REFERENCE OF THE BADGE.'
    }]
  })
}
</script>

<style scoped lang="scss">
  .container-disclaimer {
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

  .desclimer-block {
    max-width: 900px;

    .desclimer-block-title {
      font-weight: 700;
      font-size: 16px;
      line-height: 140%;
      margin: 24px 0 10px;
    }
  }

  .desclimer-block-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
  }

  .desclimer-block-list {
    padding-left: 18px;
  }
</style>
