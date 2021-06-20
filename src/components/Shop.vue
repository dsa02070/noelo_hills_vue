<template>
  <div class="shop top_common">
    <div class="inner">
      <div class="location">
        <ul>
          <li><a href="#">HOME</a></li>
          <li>&#62;</li>
          <li><a href="#">Shop</a></li>
        </ul>
      </div>
    </div>
    <div class="sub_banner">
      <h2 class="sub_page_title">Shop</h2>
    </div>
    <div class="title inner">
      <p class="subtitle">OUR PRODUCTS</p>
      <h3 class="maintitle">Meet Our Essentials</h3>
    </div>
    <div class="box_wrap">
      <div class="box" v-for="(list, index) in boxElem" v-bind:key="index">
        <a href="#"><img :src="list.src" :alt="list.alt"></a>
        <h4 class="boxtitle" v-html="list.title"></h4>
        <p class="boxtext" v-html="list.text"></p>
        <h4 class="boxtitle">{{list.price}}</h4>
        <a class="main_btn" href="#">See More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop',
  data () {
    return {
      boxElem:[
        {src: require('../assets/img/shop/box01.jpg'),
         alt: '밀크 에센스 로션 150ml',
         title: '밀크 에센스 로션 150ml',
         text:'[출시기념 이벤트] 입에 닿아도 안심',
         price:'45,000원'
        },
        {src: require('../assets/img/shop/box02.jpg'),
         alt: '모이스처라이징 로션 200ml',
         title: '모이스처라이징 로션 200ml',
         text:'피부에 힘을 길러주는 보습장벽케어',
         price:'38,000원'
        },
        {src: require('../assets/img/shop/box03.jpg'),
         alt: '마일드 젤 워시 300ml',
         title: '마일드 젤 워시 300ml',
         text:'피부를 씻는 동시에 보호하는 워시케어',
         price:'35,000원'
        },
        {src: require('../assets/img/shop/box04.jpg'),
         alt: '피부발달 기프트세트',
         title: '피부발달 기프트세트',
         text:'소중한 아기피부를 위한 선물세트<br>(5% 상당의 가격 혜택 적용)',
         price:'75,000원'
        },
        {src: require('../assets/img/shop/box05.jpg'),
         alt: '모이스처라이징 로션 듀오',
         title: '모이스처라이징 로션 듀오',
         text:'피부에 힘을 길러주는 보습장벽케어<br>(5% 상당의 가격 혜택 적용)',
         price:'72,000원'
            },
        {src: require('../assets/img/shop/box06.jpg'),
         alt: '마일드 젤 워시 듀오',
         title: '마일드 젤 워시 듀오',
         text:'피부를 씻는 동시에 보호하는 워시케어<br>(5% 상당의 가격 혜택 적용)',
         price:'66,000원'
        },
        {src: require('../assets/img/shop/box07.png'),
         alt: '피부발달세트',
         title: '피부발달세트',
         text:'여린피부를 보호해주는 피부발달케어<br>(5% 상당의 가격 혜택 적용)',
         price:'69,000원'
        },
        {src: require('../assets/img/shop/box08.jpg'),
         alt: '기프트백',
         title: '기프트백',
         text:'노엘로힐스 시그니처 기프트백',
         price:'2,000원'
        },
      ]
    }
  }
}
</script>