<template>
<div class="funevents top_common">
  <div class="inner">
      <div class="location">
        <ul>
          <li><a href="#">HOME</a></li>
          <li>&#62;</li>
          <li><a href="#">Fun Events</a></li>
        </ul>
      </div>
    </div>
  <div class="sub_banner">
    <h2 class="sub_page_title">Fun Events</h2>
  </div>
  <!-- events -->
  <div class="events">
    <div class="item" v-for="(list, index) in itemElem" v-bind:key="index">
      <a href="#"><img :src="list.src" :alt="list.alt"></a>
      <h3 class="text_mid">{{list.title}}</h3>
      <span class="text_small">{{list.writer}}</span>
      <span class="text_small">{{list.date}}</span>
    </div>
  </div>
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
          <option>일주일</option>
          <option>한달</option>
          <option>두달</option>
          <option>전체</option>
        </select>
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
  name: 'funevents',
  data () {
    return {
      itemElem: [
        {
          src: require('../assets/img/funevents/event01.png'),
          alt: 'SPECIAL PROMOTION Experience New Solution',
          title : '[4] 샘플링이벤트 3차(종료)[45]',
          writer : '노엘로힐스',
          date : '2021-06-02 12:14:52',
        },
        {
          src: require('../assets/img/funevents/event02.png'),
          alt: 'SPECIAL PROMOTION Experience New Solution',
          title : '[3] 베스트 리뷰맘! 후기를 부탁해![43]',
          writer : '노엘로힐스',
          date : '2021-05-24 14:20:38',
        },
        {
          src: require('../assets/img/funevents/event03.png'),
          alt: 'SPECIAL PROMOTION Experience New Solution',
          title : '[4] 샘플링이벤트(종료)[172]',
          writer : '노엘로힐스',
          date : '2021-05-20 17:59:37',
        },
        {
          src: require('../assets/img/funevents/event04.png'),
          alt: 'SPECIAL PROMOTION Experience New Solution',
          title : '[1] LAUNCHING PROMOTION[1]',
          writer : '노엘로힐스',
          date : '2021-04-14 21:46:37',
        },
      ],
      pageElem : [
        {num : '1'},
        {num : '2'},
        {num : '3'},
      ]
    }
  }
}
</script>