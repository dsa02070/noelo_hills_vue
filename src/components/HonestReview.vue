<template>
  <div class="honestreview top_common">
    <div class="inner">
      <div class="location">
        <ul>
          <li><a href="#">HOME</a></li>
          <li>&#62;</li>
          <li><a href="#">Honest Review</a></li>
        </ul>
      </div>
    </div>
    <div class="sub_banner">
      <h2 class="sub_page_title">Honest Review</h2>
    </div>
    <!-- table -->
    <table>
      <thead>
        <tr>
          <th>순번</th>
          <th>제품</th>
          <th>내용</th>
          <th>아이디</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(list, index) in tableElem" v-bind:key="index">
          <td>{{list.number}}</td>
          <td><a href="#"><img :src="list.src" :alt="list.alt"></a></td>
          <td>
            <p class="text_normal">{{list.subtitle}}</p>
            <h3 class="text_mid"><a href="#">{{list.title}}</a></h3>
            <img :src="list.point" :alt="list.pointAlt">
          </td>
          <td>{{list.id}}</td>
        </tr>
      </tbody>
    </table>
    <!-- page_num -->
    <div class="page_num">
      <ul>
        <li>
          <a href="#">
             <img src="../assets/img/honestreview/prev_btn.png" alt="이전 버튼">
          </a>
        </li>
        <li class="number" v-for="(list, index) in pageElem" v-bind:key="index">
          <a href="#">{{list.num}}</a>
        </li>
        <li><a href="#"><img src="../assets/img/honestreview/next_btn.png" alt="다음 버튼"></a></li>
      </ul>
    </div>
    <!-- search -->
    <div class="search">
      <form>
        <select>
          <option>제목</option>
          <option>내용</option>
          <option>글쓴이</option>
          <option>아이디</option>
          <option>별명</option>
          <option>상품정보</option>
        </select>
        <input type="text" placeholder="검색어를 입력하세요">
        <button>검색</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'honestreview',
  data () {
    return {
      tableElem:[
        {
         number : '274',
         src: require('../assets/img/honestreview/data01.jpg'),
         alt: '촉촉한 에센스 로션',
         subtitle: '밀크 에센스 로션 150ml',
         title: '촉촉한 에센스 로션',
         point: require('../assets/img/honestreview/point04.png'),
         pointAlt : '평가 4점',
         id:'1****',
        },
        {
         number : '273',
         src: require('../assets/img/honestreview/data02.jpg'),
         alt: '촉촉한 에센스 로션',
         subtitle: '모이스처라이징 로션 200ml',
         title: '믿고 쓸 수 있는 고보습 로션!',
         point: require('../assets/img/honestreview/point05.png'),
         pointAlt : '평가 5점',
         id:'2****',
        },
        {
         number : '272',
         src: require('../assets/img/honestreview/data03.jpg'),
         alt: '촉촉한 에센스 로션',
         subtitle: '마일드 젤 워시 300ml',
         title: '엄청순하네요~',
         point: require('../assets/img/honestreview/point04.png'),
         pointAlt : '평가 4점',
         id:'3****',
        },
        {
         number : '271',
         src: require('../assets/img/honestreview/data01.jpg'),
         alt: '촉촉한 에센스 로션',
         subtitle: '밀크 에센스 로션 150ml',
         title: '좋은 보습제 만들어주셔서 감사해요',
         point: require('../assets/img/honestreview/point04.png'),
         pointAlt : '평가 4점',
         id:'4****',
        },
        {
         number : '270',
         src: require('../assets/img/honestreview/data02.jpg'),
         alt: '촉촉한 에센스 로션',
         subtitle: '모이스처라이징 로션 200ml',
         title: '입에닿아도안심!',
         point: require('../assets/img/honestreview/point05.png'),
         pointAlt : '평가 5점',
         id:'5****',
        },
        {
         number : '269',
         src: require('../assets/img/honestreview/data03.jpg'),
         alt: '촉촉한 에센스 로션',
         subtitle: '마일드 젤 워시 300ml',
         title: '와~인생 로션 만났네요!',
         point: require('../assets/img/honestreview/point04.png'),
         pointAlt : '평가 4점',
         id:'6****',
        },
        {
         number : '268',
         src: require('../assets/img/honestreview/data01.jpg'),
         alt: '촉촉한 에센스 로션',
         subtitle: '밀크 에센스 로션 150ml',
         title: '건조한 민감피부도 부드러워졌어요!!~~♡',
         point: require('../assets/img/honestreview/point04.png'),
         pointAlt : '평가 4점',
         id:'7****',
        },
        {
         number : '267',
         src: require('../assets/img/honestreview/data02.jpg'),
         alt: '촉촉한 에센스 로션',
         subtitle: '모이스처라이징 로션 200ml',
         title: '노엘로힐스의 진심이 느껴지는 로션',
         point: require('../assets/img/honestreview/point05.png'),
         pointAlt : '평가 5점',
         id:'8****',
        },
        {
         number : '266',
         src: require('../assets/img/honestreview/data03.jpg'),
         alt: '촉촉한 에센스 로션',
         subtitle: '마일드 젤 워시 300ml',
         title: '먹어도 안심 믿고 쓸수있는 노엘로힐스♥︎',
         point: require('../assets/img/honestreview/point04.png'),
         pointAlt : '평가 4점',
         id:'9****',
        },
        {
         number : '265',
         src: require('../assets/img/honestreview/data03.jpg'),
         alt: '촉촉한 에센스 로션',
         subtitle: '마일드 젤 워시 300ml',
         title: '﻿푸드 그레이드 성분으로 입에 닿아도 안심할 수 있는 유아 스킨케어 노엘로힐스',
         point: require('../assets/img/honestreview/point04.png'),
         pointAlt : '평가 4점',
         id:'10***',
        },
      ],
      pageElem : [
        {num : '1'},
        {num : '2'},
        {num : '3'},
        {num : '4'},
        {num : '5'},
        {num : '6'},
        {num : '7'},
        {num : '8'},
        {num : '9'},
        {num : '10'}
      ]
    }
  }
}
</script>