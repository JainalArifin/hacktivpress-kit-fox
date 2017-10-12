<template lang="html">
  <div class="container">
    <div class="col-md-8">
      <Maincontent></Maincontent>
    </div>
    <div class="col-md-4">
      <Sidebar></Sidebar>
    </div>
  </div>
</template>

<script>
import Maincontent from '@/components/Maincontent'
import Sidebar from '@/components/Sidebar'
export default {
  components: {
    Maincontent,
    Sidebar
  }
}
</script>

<style lang="css">
</style>
