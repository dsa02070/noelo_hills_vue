<template>
<main>
  <!-- mainbanner -->
  <div id="mainbanner">
    <div class="inner">
        <div class="main_text">
          <h2>Baby Skincare<br>Perfected<br>by Experts</h2>
          <p>전문가 지식으로 완성한 유아 스킨케어</p>
          <a class="main_btn" href="#">Shop now</a>
        </div>
        <div class="banner_bg"></div>
      </div>
  </div>
  <!-- our_promise -->
  <section id="our_promise">
    <div class="title">
      <p class="subtitle">OUR PROMISE</p>
      <h3 class="maintitle">Safety &#38; Trust</h3>
    </div>
    <div class="list_wrap">
      <div class="list" v-for="(list, index) in listElem" v-bind:key="index">
        <img :src="list.src" :alt="list.alt">
        <h4 v-html="list.title"></h4>
        <p class="text_small">{{list.text}}</p>
      </div>
    </div>
  </section>
  <!-- our_product -->
  <section id="our_products">
    <div class="box_wrap">
      <div class="box">
        <p class="subtitle">OUR PRODUCTS</p>
        <h3 class="maintitle">Meet Our<br>Essentials</h3>
      </div>
      <div class="box" v-for="(list, index) in boxElem" v-bind:key="index">
        <img :src="list.src" :alt="list.alt">
        <h4 class="boxtitle" v-html="list.title"></h4>
        <p class="boxtext">{{list.text}}</p>
        <h4 class="boxtitle">{{list.price}}</h4>
        <a class="main_btn" href="#">See More</a>
      </div>
    </div>
  </section>
<!-- common 1st -->
  <section id="common">
    <div class="img_area">
      <img src="../assets/img/main/section02.png" alt="옷을 걸쳐입은 아기">
    </div>
    <div class="text_area">
      <img src="../assets/img/main/section02_img.png" alt="SAFETY TRUST 아이콘">
      <h3 class="maintitle">A Belief Based on Knowledge,<br>Conscience and Love</h3>
      <p class="text_small">내 아이의 피부에 직접 닿는 제품, 안심할 수 있는 성분으로 만들어,<br>공신력 있는 기관의 테스트를 통해 제품의 안전성에 대한 관리를 하고 있습니다.</p>
      <a href="#" class="sub_btn">Read more</a>
    </div>
  </section>
  <!-- common 2nd -->
  <section id="common">
    <div class="text_area">
      <img src="../assets/img/main/section03_img.png" alt="SAFETY TRUST 아이콘">
      <h3 class="maintitle">Smart Habits for Healthy<br>Baby Skin</h3>
      <p class="text_small">소중하다는 말로도 부족한 우리 아이들에게<br>최선의 피부관리 솔루션을 전해주기 위해<br>Noelo Hills의 진지한 고민은 오늘도 멈추지 않습니다.</p>
      <a href="#" class="sub_btn">Read more</a>
    </div>
    <div class="img_area">
      <img src="../assets/img/main/section03.png" alt="곰인형을 껴안고 누워있는 아기">
    </div>
  </section>
  <!-- common 3rd -->
  <section id="common">
    <div class="img_area">
      <img src="../assets/img/main/section04.png" alt="이야기하는 3명의 아기">
    </div>
    <div class="text_area">
      <img src="../assets/img/main/section04_img.png" alt="SAFETY TRUST 아이콘">
      <h3 class="maintitle">The Beginning of Noelo Hills</h3>
      <p class="text_small">우리가 가장 중요하게 여기는 가치는 진정성입니다.<br>우리가 하는 모든 일, 만드는 모든 제품 그리고 제공하는<br>모든 정보는 과학, 진실 그리고 양심에 기초합니다.</p>
      <a href="#" class="sub_btn">Read more</a>
    </div>
  </section>
  <!-- common 4th -->
  <section id="common">
    <div class="text_area">
      <img src="../assets/img/main/section05_img.png" alt="SAFETY TRUST 아이콘">
      <h3 class="maintitle">Our Promise to Use<br>Only the Best Ingredients</h3>
      <p class="text_small">내 아이의 피부에 직접 닿는 제품,<br>아무것이나 사용할 수 없기에 유해 논란이 있는 성분은 최대한<br>배제하고안심할 수 있는 성분으로 만들었습니다.</p>
      <a href="#" class="sub_btn">Read more</a>
    </div>
    <div class="img_area">
      <img src="../assets/img/main/section05.png" alt="눈 감고 있는 아이를 어른손으로 받치고 있는 모습">
    </div>
  </section>
  <div class="sns">
    <h3 class="maintitle">Instagram</h3>
  </div>
  </main>
</template>

<script>
export default {
  name: 'main-component',
  data () {
    return {
      listElem:[
        {src : require('../assets/img/main/promise01.png'), alt : 'german dermatest 글씨가 있는 모습', title : 'German Dermatest<br>Certified', text : '독일 더마테스트 완료'},
        {src : require('../assets/img/main/promise02.png'), alt : '원 안에 나뭇잎이 있는 모습', title : 'German Dermatest<br>Certified', text : '독일 더마테스트 완료'},
        {src : require('../assets/img/main/promise03.png'), alt : '눈 안에 하트가 있는 모습', title : 'German Dermatest<br>Certified', text : '독일 더마테스트 완료'},
        {src : require('../assets/img/main/promise04.png'), alt : '실험용 비커 안 물이 있는 모슴', title : 'German Dermatest<br>Certified', text : '독일 더마테스트 완료'},
      ],
      boxElem:[
        {src: require('../assets/img/main/section01-1.jpg'), alt: 'Noelo Hills Milk Essence Lotion', title: '밀크 에센스 로션 150ml', text:'[출시기념 이벤트] 입에 닿아도 안심', price:'45,000원'},
        {src: require('../assets/img/main/section01-2.jpg'), alt: 'Noelo Hills Moisturizing Lotion', title: '모이스처라이징 로션 200ml', text:'피부에 힘을 길러주는 보습장벽케어', price:'38,000원'}
      ]
    }
  }
}
</script>