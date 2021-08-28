<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザ1</router-link>
    <router-link to="/users/2">ユーザ2</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile'">次のユーザー</router-link>    <router-view></router-view>
    <div style="height: 700px;"></div>
    <router-link id="next-user" :to="{ name : 'users-id-profile', params: { id: Number(id) + 1}, query:{ lang:'ja', page: '2' }, hash: '#next-user' }">次のユーザー</router-link>
    <div style="height: 1400px;"></div>
  </div>
</template>

<script>
export default {
  props:["id"],
  beforeRouteEnter(to, from, next){
    next();
  },
  beforeRouteUpdate(to, from, next){
    next();
  },
  beforeRouteLeave(to, from, next){
    next();
  }
}
</script>