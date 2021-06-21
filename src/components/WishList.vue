<template>
  <div class="wishlist top_common">
    <div class="inner">
      <div class="location">
        <ul>
          <li><a href="#">HOME</a></li>
          <li>&#62;</li>
          <li><a href="#">장바구니</a></li>
        </ul>
      </div>
    </div>
    <div class="title">
      <h2 class="maintitle">장바구니</h2>
    </div>
    <div class="benefit">
      <span>혜택정보</span><span>가용적립금<em>0원</em></span><span>쿠폰<em>3개</em></span>
    </div>
    <div class="product">
      <h4 class="text_title">일반상품 (2)</h4>
      <table class="item_table">
        <tbody>
          <tr v-for="(list, index) in listElem" v-bind:key="index">
            <td><a href="#"><img :src="list.src01" :alt="list.alt01"></a></td>
            <td><a href="#"><img :src="list.src02" :alt="list.alt02"></a></td>
            <td>
              <h5 class="text_mid">{{list.title}}</h5>
              <p class="saved">{{list.saved}}</p>
              <div class="count">
                <input type="text" value="1">
                <a class="upbtn" href="#"><img :src="list.upbtn" :alt="list.upbtnAlt"></a>
                <a class="downbtn" href="#"><img :src="list.downbtn" :alt="list.downbtnAlt"></a>
              </div>
              <a class="change">{{list.change}}</a>
              <span class="sum">{{list.sum}}</span>
            </td>
            <td>
              <p class="deliver">{{list.deliver}}</p>
            </td>
            <td>
              <p class="cost">{{list.cost}}</p>
            </td>
            <td>
              <ul>
                <li><a class="yellow_btn" href="#">{{list.sidebtn01}}</a></li>
                <li><a class="gray_btn" href="#">{{list.sidebtn02}}</a></li>
                <li><a class="white_btn" href="#">{{list.sidebtn03}}</a></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="table_sum">
        <div class="sum_num">
          <span class="text_normal">[기본배송]</span>
          <span>상품구매금액 37,000 + 배송비 3,000 = 합계 : <em>40,000원</em></span>
        </div>
        <div class="info">
          <p class="text_normal">할인 적용 금액은 주문서작성의 결제예정금액에서 확인 가능합니다.</p>
        </div>
        <div class="select_btn">
          <span>선택상품을<a class="white_btn" href="#">삭제하기</a></span><a class="gray_btn" href="#">장바구니비우기</a>
        </div>
        <div class="total">
          <table class="total_table">
            <tr>
              <th>총 상품금액</th>
              <th>총 배송비</th>
              <th>결제예정금액</th>
            </tr>
            <tr>
              <td>37,000원</td>
              <td>+ 3,000원</td>
              <td><em>= 40,000원</em></td>
            </tr>
          </table>
          <div class="btn_wrap">
            <a class="yellow_btn" href="#">전체상품주문</a><a class="gray_btn" href="#">선택상품주문</a>
          </div>
        </div>
      </div>
    </div>
    <div class="guide">
      <h4 class="text_title">이용안내</h4>
      <div class="top">
        <h5 class="text_mid">장바구니 이용안내</h5>
        <p>선택하신 상품의 수량을 변경하시려면 수량변경 후 [변경] 버튼을 누르시면 됩니다.</p>
        <p>장바구니와 관심상품을 이용하여 원하시는 상품만 주문하거나 관심상품으로 등록하실 수 있습니다.</p>
      </div>
      <div class="bottom">
        <h5 class="text_mid">무이자할부 이용안내</h5>
        <p>상품별 무이자할부 혜택을 받으시려면 무이자할부 상품만 선택하여 [주문하기] 버튼을 눌러 주문/결제 하시면 됩니다.</p>
        <p>[전체 상품 주문] 버튼을 누르시면 장바구니의 구분없이 선택된 모든 상품에 대한 주문/결제가 이루어집니다.</p>
        <p>단, 전체 상품을 주문/결제하실 경우, 상품별 무이자할부 혜택을 받으실 수 없습니다.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wishlist',
  data () {
    return {
      listElem: [
        {
          src01 : require('../assets/img/wishlist/check_icon.png'),
          alt01 : 'check icon',
          src02 : require('../assets/img/wishlist/item02.jpg'),
          alt02 : '기프트백 썸네일',
          title : '기프트백',
          saved : '적 60원',
          upbtn : require('../assets/img/wishlist/up_btn.png'),
          upbtnAlt : '더하기 버튼',
          downbtn : require('../assets/img/wishlist/down_btn.png'),
          downbtnAlt : '빼기 버튼',
          change : '변경',
          sum : '합계: 2,000원',
          deliver : '기본배송',
          cost : '배송비:3,000원',
          sidebtn01 : '주문하기',
          sidebtn02 : '관심상품',
          sidebtn03 : '삭제하기',
        },
        {
          src01 : require('../assets/img/wishlist/check_icon.png'),
          alt01 : 'check icon',
          src02 : require('../assets/img/wishlist/item01.jpg'),
          alt02 : '마일드 젤 워시 썸네일',
          title : '마일드 젤 워시 300ml',
          saved : '적 1050원',
          upbtn : require('../assets/img/wishlist/up_btn.png'),
          upbtnAlt : '더하기 버튼',
          downbtn : require('../assets/img/wishlist/down_btn.png'),
          downbtnAlt : '빼기 버튼',
          change : '변경',
          sum : '합계: 35,000원',
          deliver : '기본배송',
          cost : '배송비:3,000원',
          sidebtn01 : '주문하기',
          sidebtn02 : '관심상품',
          sidebtn03 : '삭제하기',
        },
      ]
    }
  }
}
</script>