<template lang="html">
  <div class="row">
    <div class="col-md-4">
      <div class="thumbnail">
        <h3>{{articleId.title}}</h3>
        <p>{{articleId.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['_id'],
  data () {
    return {
      articleId: []
    }
  },
  methods: {
    getArticle () {
      this.$http.get(`/article/${this._id}`)
      .then((dataArticle) => {
        this.articleId = dataArticle.data
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  created () {
    this.getArticle()
  },
  watch: {
    _id () {
      this.getArticle()
    }
  }
}
</script>

<style lang="css">
</style>
