import Vue from 'vue';
import Router from 'vue-router';

// import Home from './views/Home.vue';
// import Users from './views/Users.vue';
// import UsersPosts from './views/UsersPosts.vue';
// import UsersProfile from './views/UsersProfile.vue';
// import HeaderHome from './views/HeaderHome.vue';
// import HeaderUsers from './views/HeaderUsers.vue';

const Home = () =>  import(/* webpackChunkName: "Home" */'./views/Home.vue');
const Users = () =>  import(/* webpackChunkName: "Users" */'./views/Users.vue');
const UsersPosts = () =>  import(/* webpackChunkName: "UsersPosts" */'./views/UsersPosts.vue');
const UsersProfile = () =>  import(/* webpackChunkName: "UsersProfile" */'./views/UsersProfile.vue');
const HeaderHome = () =>  import(/* webpackChunkName: "HeaderHome" */'./views/HeaderHome.vue');
const HeaderUsers = () =>  import(/* webpackChunkName: "HeaderUsers" */'./views/HeaderUsers.vue');



Vue.use(Router)

export default new Router({
	mode:"hash",
	routes:
  [
		{
      path: '/', 
      components: {
        default: Home,
        header: HeaderHome
      },
      beforeEnter(to, from, next){
        next();
      }
    }, 
    {
      path: '/users/:id', 
      components: {
        default: Users,
        header: HeaderUsers
      },
      props: {
        default: true,
        header: false
      },
      children:[
        { path:"posts", component: UsersPosts },
        { path:"profile", component: UsersProfile ,name: "users-id-profile"}
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    }
    if(to.hash){
      return{
        selector: to.hash
      };
    }
    return {x : 0, y : 0}
  }
});