<template>
  <section class="container">
    <slot></slot>
  </section>
</template>

<style scoped>
.container {
  padding: 1rem 13rem;
}

@media screen and (max-width: 991px) {
  .container {
    padding: 1rem 1rem;
  }
}
</style>