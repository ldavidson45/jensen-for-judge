<template>
  <div>
    <NavBar />
    <div class="body">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.body {
  min-height: calc(100vh - 70px);
}
</style>
