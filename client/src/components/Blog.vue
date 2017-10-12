<template lang="html">
  <div class="">
    <div class="panel panel-default" v-for="article in tampilArticle">
      <div class="panel-heading">
        {{article.title}}
      </div>
      <div class="panel-body">
        {{article.content}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tampilArticle: []
    }
  },
  methods: {
    getArticle () {
      this.$http.get('/article')
      .then((dataArticle) => {
        this.tampilArticle = dataArticle.data
      })
    }
  },
  created () {
    this.getArticle()
  }
}
</script>

<style lang="css">

</style>
