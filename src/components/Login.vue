<template>
  <div class="login top_common">
    <div class="inner">
      <div class="location">
        <ul>
          <li><a href="#">HOME</a></li>
          <li>&#62;</li>
          <li><a href="#">로그인</a></li>
        </ul>
      </div>
    </div>
    <div class="title">
      <h2 class="maintitle">로그인</h2>
    </div>
    <form>
      <input type="text" placeholder="아이디를 입력하세요.">
      <div class="check">
        <a class="id" href="#">아이디 저장</a><a class="secure" href="#">보안접속</a>
      </div>
      <input type="password" autocomplete="off" placeholder="비밀번호를 입력하세요.">
      <div class="question">
        <a href="#">아이디를 잊으셨습니까?</a><a href="#">비밀번호를 잊으셨습니까?</a>
      </div>
      <button class="yellow_btn">로그인</button>
    </form>
    <div class="social">
      <h3 class="text_mid">소셜아이디로 간편로그인</h3>
      <ul>
        <li><a href="#"><img src="../assets/img/login/naver.png" alt="네이버 아이콘"></a></li>
        <li><a href="#"><img src="../assets/img/login/kakao.png" alt="카카오 아이콘"></a></li>
        <li><a href="#"><img src="../assets/img/login/facebook.png" alt="페이스북 아이콘"></a></li>
      </ul>
      <div class="btn_wrap">
        <a href="#">계정이 없으신가요? <em>회원가입</em></a>
        <a href="#">비회원 구매조회</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      
    }
  }
}
</script>