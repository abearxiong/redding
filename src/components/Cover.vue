<template>
  <div class="cover" style="pointer-events:none;">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "Cover"
}
</script>

<style>
.cover {
    position: fixed;
    /* background-color: white; */
    left: 0;
    width: 100%;
    height: 100%;
}
</style>