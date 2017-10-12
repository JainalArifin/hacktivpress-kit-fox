<template lang="html">
  <div class="container">
    <div class="col-md-8">
      <!-- <Maincontent></Maincontent> -->
      <Blog></Blog>
      <router-view></router-view>
    </div>
    <div class="col-md-4">
      <Sidebar v-for="article in allArticle" :propSidebar="article" :key="article._id"></Sidebar>
    </div>
  </div>
</template>

<script>
import Blog from '@/components/Blog'
import Maincontent from '@/components/Maincontent'
import Sidebar from '@/components/Sidebar'
export default {
  components: {
    Maincontent,
    Sidebar,
    Blog
  },
  data () {
    return {
      allArticle: []
    }
  },
  methods: {
    getArticle () {
      this.$http.get('/article')
      .then((dataArticle) => {
        this.allArticle = dataArticle.data
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
