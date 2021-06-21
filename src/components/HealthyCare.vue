<template>
  <div class="healthycare top_common">
    <div class="inner">
      <div class="location">
        <ul>
          <li><a href="#">HOME</a></li>
          <li>&#62;</li>
          <li><a href="#">Healthy care</a></li>
        </ul>
      </div>
    </div>
    <div class="sub_banner">
      <h2 class="sub_page_title">Healthy care</h2>
    </div>
    <div class="baby_skin">
      <h3 class="maintitle">What You Need to Know<br>About Baby Skin</h3>
      <div class="text">
        <p class="text_normal">
          두꺼운 옷이 몸을 잘 보호하듯, 피부도 마찬가지입니다. 하지만 우리 아이들이 ‘입고 있는’ 피부를 옷에
          비유하면 얇은 실로 헐겁게 짜인 스웨터 정도라고 합니다. 추운 날씨에 이런 스웨터를 입고 있다고
          상상해보세요. 몸이 떨리는 정도가 아니라 아플 수도 있겠죠!<br><br>

          아기 피부 장벽은 성인보다 약 30% 얇고, 표피는 약 20% 얇습니다. 게다가 세라마이드, 콜레스테롤, 지방산 등 보호요소 역시 성인보다 부족하기에, 피부 장벽기능이 성인보다 약할 수밖에 없겠죠.
          따라서 올바른 방법으로 케어해주지 않으면 아기 피부는 불안정화되기 쉬울뿐더러, 면역 체계에도 문제가 생길 수 있어요. 아기 피부가 성인만큼의 구조와 기능을 갖추기 위해 필요한 기간, 생후 2년에서 4년 동안 올바른 스킨케어가 정말로 중요한 이유가 여기에 있습니다.
        </p>
      </div>
    </div>
    <div class="smart_habits bgyellow">
      <div class="inner">
        <div class="title">
          <div class="subtitle">SMART HABITS FOR HEALTHY SKIN</div>
          <div class="maintitle">Don’t Worry Care</div>
        </div>
        <div class="text">
          <p class="text_normal">
           유아 피부에 발라주는 로션, 크림과 같은 제품은 약이 아니라는 점을 명심하세요. 부모님들이 가정에서 사용하는 제품은 연약한 피부를 보호하기 위한 선제적 조치로, 문제<br>
           발생 가능성을 낮추는 것이 목적이 되어야 한답니다. Noelo Hills 전문지식 패널의 도움을 기반으로 제안하는 Don’t Worry Care 루틴을 실천해보세요. 아기의 컨디션을<br>
           좋은 상태로 유지하고 연약한 피부를 보호할 수 있는 쉽고도 효과적인 방법입니다.<br><br>

           <em>*모든 아이에게는 특정한 피부 조건이 있습니다.</em><br>
           <em>따라서 피부 질환에 대해서는 담당 의사와 상담할 것을 권장합니다.</em>
          </p>
        </div>
        <div class="list_wrap">
          <div class="list" v-for="(list, index) in listElem" v-bind:key="index">
            <img :src="list.src" :alt="list.alt">
            <h4 class="text_title" v-html="list.title"></h4>
            <p class="text_normal">{{list.text}}</p>
            <a href="#" class="normal_btn">{{list.btn}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'healthycare',
  data () {
    return {
      listElem:[
        {src: require('../assets/img/healthycare/list01.png'),
         alt: '아기 발 이미지',
         title: 'Understand the<br>Ingredients',
         text:'성분을 이해하세요',
         btn:'More'
        },
        {src: require('../assets/img/healthycare/list02.png'),
         alt: '아기와 어머니가 얼굴을 맞대고 있는 이미지',
         title: 'Stay Away from<br>Fragrances',
         text:'향료를 조심하세요',
         btn:'More'
        },
        {src: require('../assets/img/healthycare/list03.png'),
         alt: '손가락에 스킨을 올려놓은 이미지',
         title: 'Keep Skin<br>Moisturized',
         text:'수분을 지켜주세요',
         btn:'More'
        },
        {src: require('../assets/img/healthycare/list04.png'),
         alt: '등에 스킨을 바르는 이미지',
         title: 'Take Care of<br>Skin Barrier',
         text:'장벽을 케어하세요',
         btn:'More'
        },
        {src: require('../assets/img/healthycare/list05.png'),
         alt: '아기의 온도를 측정하고 있는 이미지',
         title: 'Maintain Right<br>Temperature',
         text:'온도를 유지하세요',
         btn:'More'
        },
      ]
    }
  }
}
</script>