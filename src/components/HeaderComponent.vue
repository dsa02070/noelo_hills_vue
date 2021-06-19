<template>
  <header>
    <div class="inner">
      <div id="logo">
          <h1>
              <router-link to="/"><img src="../assets/img/common/logo.png" alt="노엘로힐즈 로고"></router-link>
        </h1>
      </div>
      <nav>
          <ul>
              <li v-for="(list, index) in menuList" v-bind:key="index">
                  <router-link v-bind:to="list.alink">{{list.text}}</router-link>
             </li>
          </ul>
      </nav>
      <div class="user_menu">
        <ul>
           <li v-for="(list, index) in usermenu" v-bind:key="index">
                  <router-link v-bind:to="list.ahref">
                    <img :src="list.src" :alt="list.alt">
                  </router-link>
             </li>
        </ul>
      </div>
      </div>
  </header>
</template>

<script>
export default {
  name: 'header-component',
  data () {
    return {
      menuList: [
          {text : 'Shop', alink: '/shop'},
          {text : 'Our Story', alink: '/ourstory'},
          {text : 'Happy Formula', alink: '/happyformula'},
          {text : 'Healthy Care', alink: '/healthycare'},
          {text : 'Honest Review', alink: '/honestreview'},
          {text : 'Fun Events', alink: '/funevents'},
      ],
      usermenu:[
        {src : require('../assets/img/common/cart.png'), alt : '장바구니', ahref: '/wishlist'},
        {src : require('../assets/img/common/user.png'), alt : '마이페이지', ahref: '/mypage'},
        {src : require('../assets/img/common/login.png'),alt : '로그인', ahref: '/login'},
      ],
    }
  },
}
</script>


