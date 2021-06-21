<template>
  <div class="mypage top_common">
    <div class="inner">
      <div class="location">
        <ul>
          <li><a href="#">HOME</a></li>
          <li>&#62;</li>
          <li><a href="#">마이쇼핑</a></li>
        </ul>
      </div>
    </div>
    <div class="title">
      <h2 class="maintitle">마이쇼핑</h2>
    </div>
    <div class="saved">
      <div class="left">
        <ul>
          <li>
            <span>가용 적립금</span><span>1,200원<a class="white_btn" href="#">조회</a></span>
          </li>
          <li>
            <span>사용 적립금</span><span>1,300원</span>
          </li>
          <li>
            <span>쿠폰</span><span>3개<a class="white_btn" href="#">조회</a></span>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li>
            <span>총 적립금</span><span>2,500원</span>
          </li>
          <li>
            <span>총 주문</span><span>3,000원(1회)</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="my_order">
      <h3 class="text_mid">나의 주문처리 현황 <em>(최근 3개월 기준)</em></h3>
      <ul class="order_info">
        <li v-for="(list, index) in orderElem" v-bind:key="index">
          <p>{{list.title}}</p>
          <p>{{list.number}}</p>
        </li>
      </ul>
      <div class="btn_wrap">
        <a class="white_btn" href="#">취소 3</a>
        <a class="white_btn" href="#">교환 5</a>
        <a class="white_btn" href="#">반품 1</a>
      </div>
    </div>
    <div class="menu_wrap">
      <div class="menu">
        <a href="#"><img src="../assets/img/mypage/mypage01.png" alt="문서모양 아이콘"></a>
        <p class="subtitle">ORDER</p>
        <a class="text_mid" href="#">주문내역조회</a>
      </div>
      <div class="menu">
        <a href="#"><img src="../assets/img/mypage/mypage02.png" alt="명함모양 아이콘"></a>
        <p class="subtitle">PROFILE</p>
        <a class="text_mid" href="#">회원정보관리</a>
      </div>
      <div class="menu">
        <a href="#"><img src="../assets/img/mypage/mypage03.png" alt="채팅모양 아이콘"></a>
        <p class="subtitle">1:1 CONSULT</p>
        <a class="text_mid" href="#">1:1 맞춤상담</a>
      </div>
    </div>
    <div class="list_menu">
      <ul>
        <li v-for="(list, index) in listElem" v-bind:key="index">
          <a class="text_min" href="#">{{list.title}}<span>{{list.text}}</span></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mypage',
  data () {
    return {
      orderElem: [
        {
          title : '입금전',
          number : '8'
        },
        {
          title : '배송준비중',
          number : '5'
        },
        {
          title : '배송중',
          number : '2'
        },
        {
          title : '배송완료',
          number : '124'
        },
      ],
      listElem: [
        {
          title : 'WISHLIST',
          text : '관심 상품',
        },
        {
          title : 'MILEAGE',
          text : '적립금',
        },
        {
          title : 'COUPON',
          text : '쿠폰',
        },
        {
          title : 'BOARD',
          text : '게시물 관리',
        },
        {
          title : 'ADDRESS',
          text : '배송 주소록 관리',
        },
      ]
    }
  }
}
</script>