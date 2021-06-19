<template>
  <footer>
      <div class="inner">
          <div class="ftop">
            <ul>
                <li v-for="(list, index) in fmenulist" v-bind:key="index">
                    <router-link :to="list">{{list.text}}</router-link>
                </li>
            </ul>
            <div class="insta">
                <a href="#"><img src="../assets/img/common/instagram.png" alt="인스타그램 아이콘"><span>Noelo Hills</span></a>
            </div>
          </div>
          <div class="fbottom">
              ⓒ Copyright Seisson Inc. All rights reserved.
          </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'footer-component',
  data () {
    return {
      fmenulist:[
          {text : 'Noelo Hills'},
          {text : 'CS center'},
          {text : 'Privacy Policy'},
          {text : 'Terms & Condition'},
      ]
    }
  }
}
</script>