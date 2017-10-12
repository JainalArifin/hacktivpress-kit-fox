<template lang="html">
  <div>
    <router-link :to="{ name: 'Artikel_Pilih', params: {_id: propSidebar._id} }">
      <ul>
        <li>{{propSidebar.title}}</li>
        <hr>
      </ul>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['propSidebar']
}
</script>

<style lang="css">
</style>
