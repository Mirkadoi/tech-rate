<template>
  <section class="container-disclaimer">
    <h1 class="desclimer-title">Disclaimer</h1>

    <p class="text" v-for="text in texts" :key="text" v-html="text" />
  </section>
</template>

<script setup>

const texts = [
"This is&nbsp;a&nbsp;limited report on&nbsp;our findings based on&nbsp;our analysis, in&nbsp;accordance with good industry practice as&nbsp;at&nbsp;the date of&nbsp;this report, in&nbsp;relation to&nbsp;cybersecurity vulnerabilities and issues in&nbsp;the framework and algorithms based on&nbsp;smart contracts, the details of&nbsp;which are set out in&nbsp;this report. In&nbsp;order to&nbsp;get a&nbsp;full view of&nbsp;our analysis, it&nbsp;is&nbsp;crucial for you to&nbsp;read the full report. While we&nbsp;have done our best in&nbsp;conducting our analysis and producing this report, it&nbsp;is&nbsp;important to&nbsp;note that you should not rely on&nbsp;this report and cannot claim against&nbsp;us on&nbsp;the basis of&nbsp;what it&nbsp;says or&nbsp;doesn&rsquo;t say, or&nbsp;how we&nbsp;produced&nbsp;it, and it&nbsp;is&nbsp;important for you to&nbsp;conduct your own independent investigations before making any decisions. We&nbsp;go&nbsp;into more detail on&nbsp;this in&nbsp;the disclaimer below&nbsp;&mdash; please make sure to&nbsp;read it&nbsp;in&nbsp;full.",
  "DISCLAIMER: By&nbsp;reading this report or&nbsp;any part of&nbsp;it, you agree to&nbsp;the terms of&nbsp;this disclaimer. If&nbsp;you do&nbsp;not agree to&nbsp;the terms, then please immediately cease reading this report, and delete and destroy any and all copies of&nbsp;this report downloaded and/or printed by&nbsp;you. This report is&nbsp;provided for information purposes only and on&nbsp;a&nbsp;non-reliance basis, and does not constitute investment advice. No&nbsp;one shall have any right to&nbsp;rely on&nbsp;the report or&nbsp;its contents, and TechRate and its affiliates (including holding companies, shareholders, subsidiaries, employees, directors, officers and other representatives) (TechRate) owe no&nbsp;duty of&nbsp;care towards you or&nbsp;any other person, nor does TechRate make any warranty or&nbsp;representation to&nbsp;any person on&nbsp;the accuracy or&nbsp;completeness of&nbsp;the report. The report is&nbsp;provided &laquo;as&nbsp;is&raquo;, without any conditions, warranties or&nbsp;other terms of&nbsp;any kind except as&nbsp;set out in&nbsp;this disclaimer, and TechRate hereby excludes all representations, warranties, conditions and other terms (including, without limitation, the warranties implied by&nbsp;law of&nbsp;satisfactory quality, fitness for purpose and the use of&nbsp;reasonable care and skill) which, but for this clause, might have effect in&nbsp;relation to&nbsp;the report. Except and only to&nbsp;the extent that it&nbsp;is&nbsp;prohibited by&nbsp;law, TechRate hereby excludes all liability and responsibility, and neither you nor any other person shall have any claim against TechRate, for any amount or&nbsp;kind of&nbsp;loss or&nbsp;damage that may result to&nbsp;you or&nbsp;any other person (including without limitation, any direct, indirect, special, punitive, consequential or&nbsp;pure economic loss or&nbsp;damages, or&nbsp;any loss of&nbsp;income, profits, goodwill, data, contracts, use of&nbsp;money, or&nbsp;business interruption, and whether in&nbsp;delict, tort (including without limitation negligence), contract, breach of&nbsp;statutory duty, misrepresentation (whether innocent or&nbsp;negligent) or&nbsp;otherwise under any claim of&nbsp;any nature whatsoever in&nbsp;any jurisdiction) in&nbsp;any way arising from or&nbsp;connected with this report and the use, inability to&nbsp;use or&nbsp;the results of&nbsp;use of&nbsp;this report, and any reliance on&nbsp;this report.",
  "The analysis of&nbsp;the security is&nbsp;purely based on&nbsp;the smart contracts alone. No&nbsp;applications or&nbsp;operations were reviewed for security. No&nbsp;product code has been reviewed."
]

</script>

<style scoped lang="scss">
  .container-disclaimer {

    max-width: 900px;
    padding: 55px 100px 80px 100px;
    font-family: $font-base;
    color: $text-color-black;
    margin: 0 auto;
  }

  .title {
    font-family: $font-alt;
    font-size: 46px;
    line-height: 68px;
    margin-bottom: 30px;
  }

  .text {
    //max-width: 900px;
      font-weight: 400;
      font-size: 15px;
      line-height: 140%;
    text-align: justify;
    margin-bottom: 30px;
  }

</style>
