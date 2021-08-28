<template>
  <div>
    <router-view name="header"></router-view>

    <router-view></router-view>
    <!-- <transition name="fade" mode="out-in">
      
    </transition> -->
  </div>
</template>

<style scoped>
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s;
}

</style>