// js/i18n.js
(function () {
  const dict = {
    /* ================== 한국어 ================== */
    ko: {
      /* 공통 */
      "meta.title": "절구팩토리 메인",
      "nav.home": "홈",
      "nav.jeolguFactory": "절구팩토리",
      "nav.jeolguMill": "절구방앗간",
      "nav.familyism": "팩토리패밀리즘",
      "nav.inquiry": "문의 사항",

      /* 기존 메인 텍스트 */
      "hero.eyebrow": "Recruitment Agency ⑦",
      "hero.title": "2STO 최고의 해외 취업 프로그램 ⑧",
      "hero.desc": "전문적인 인력과 노하우를 바탕으로 고객분들의 성공적인 진행을 위해 항상 최선을 다합니다. ⑨",
      "hero.cta": "자세히 보기 ⑩",

      "feat.1.title": "전문성 ⑪",
      "feat.1.desc": "전문적인 인력과 노하우를 바탕으로 합니다. ⑫",
      "feat.2.title": "성공적 ⑬",
      "feat.2.desc": "고객분들의 성공적인 진행을 위해 최선을 다합니다. ⑭",
      "feat.3.title": "확장성 ⑮",
      "feat.3.desc": "더 넓은 세상에서의 꿈을 이룰 수 있도록. ⑯",

      "clients.eyebrow": "클라이언트님들을 위한 ⑰",
      "clients.title": "FOR CLIENTS ⑱",
      "clients.desc": "우수 인재 확보를 위한 맞춤 전략을 기획·수립하고, 이에 대한 합리적인 결과치를 제공합니다. ⑲",
      "clients.cta": "자세히 보기 ⑳",

      "cands.eyebrow": "지원자님들을 위한 ㉑",
      "cands.title": "FOR CANDIDATES ㉒",
      "cands.desc": "고용노동부에 정식 등록된 기관으로서 전문성을 바탕으로 여러분의 커리어를 서포트합니다. ㉓",
      "cands.cta": "자세히 보기 ㉔",

      /* 절구팩토리 페이지 */
      "jeolguFactory.metaTitle": "절구팩토리 | 브랜드 소개",
      "jeolguFactory.eyebrow": "JEOLGU FACTORY",
      "jeolguFactory.title": "쫀득·따뜻·수제 떡을 만드는 절구팩토리",
      "jeolguFactory.desc": "브랜드 스토리, 사용하는 재료, 생산 방식, 협업 스튜디오 정보를 담는 영역입니다.",
      "jeolguFactory.section1.title": "절구팩토리는",
      "jeolguFactory.section1.body": "전통 떡의 식감과 요즘 디저트의 비주얼을 섞어서 계절 한정 메뉴를 기획하는 브랜드입니다.",
      "jeolguFactory.section2.title": "핵심 포인트",
      "jeolguFactory.section2.item1": "국산 재료 위주 레시피",
      "jeolguFactory.section2.item2": "절구 방식 식감 일부 도입",
      "jeolguFactory.section2.item3": "촬영·납품용 패키징",
      "jeolguFactory.section2.item4": "공동 브랜드 가능",

      /* 절구방앗간 페이지 */
      "jeolguMill.metaTitle": "절구방앗간 | 메뉴·원재료",
      "jeolguMill.eyebrow": "절구방앗간",
      "jeolguMill.title": "원재료, 가공, 패키지 정보를 한 번에",
      "jeolguMill.desc": "실제 제조와 납품에 필요한 정보를 묶어두는 페이지입니다.",
      "jeolguMill.card1.title": "국산 원미·찹쌀",
      "jeolguMill.card1.desc": "농가 연계로 들어오는 기본 원재료",
      "jeolguMill.card1.item1": "올해 수확분",
      "jeolguMill.card1.item2": "도정일자 표시",
      "jeolguMill.card1.item3": "대량 주문 가능",
      "jeolguMill.card2.title": "냉동 납품 라인",
      "jeolguMill.card2.desc": "카페·촬영용으로 소분해두는 라인",
      "jeolguMill.card2.item1": "-18℃ 급속 냉동",
      "jeolguMill.card2.item2": "데이미지 최소화",
      "jeolguMill.card2.item3": "1box 20~40ea",
      "jeolguMill.card3.title": "패키징·택배",
      "jeolguMill.card3.desc": "배송 요일, 패키지, 스티커 교체",
      "jeolguMill.card3.item1": "택배 가능 요일",
      "jeolguMill.card3.item2": "패키지 리뉴얼 내역",
      "jeolguMill.card3.item3": "브랜드 스티커 교체",

      /* 팩토리패밀리즘 페이지 */
      "familyism.metaTitle": "팩토리패밀리즘 | 함께 만드는 사람들",
      "familyism.eyebrow": "FACTORY FAMILYISM",
      "familyism.title": "콘텐츠, 납품, 촬영을 같이 하는 패밀리",
      "familyism.desc": "같이 일하는 파트너/크루들을 모아 보여줄 때 사용하는 페이지입니다.",
      "familyism.card1.title": "콘텐츠 팀",
      "familyism.card1.desc": "유튜브/블로그/쇼츠 촬영",
      "familyism.card2.title": "제휴 카페·디저트숍",
      "familyism.card2.desc": "납품받는 매장 리스트",
      "familyism.card3.title": "시제품 테스트 그룹",
      "familyism.card3.desc": "새 레시피 테스트",

      /* 문의 사항 페이지 */
      "inquiry.metaTitle": "문의 사항 | 절구팩토리",
      "inquiry.eyebrow": "INQUIRY",
      "inquiry.title": "떡 주문, 납품, 촬영 협찬 문의 주세요",
      "inquiry.desc": "수량, 일정, 지역, 콜라보 제안 모두 이 폼으로 받습니다.",
      "inquiry.form.name": "이름 / 업체명",
      "inquiry.form.email": "연락처 / 이메일",
      "inquiry.form.type": "문의 종류",
      "inquiry.form.type.1": "떡 주문 / 납품",
      "inquiry.form.type.2": "촬영 협찬 / 제품 대여",
      "inquiry.form.type.3": "기타 문의",
      "inquiry.form.msg": "문의 내용",
      "inquiry.form.submit": "문의 보내기",
      "inquiry.info.title": "다른 연락 방법",
      "inquiry.info.desc": "카톡 채널, 인스타 DM, 네이버 예약 링크도 여기에 넣을 수 있어요.",

      /* 푸터 */
      "footer.copy": "© 2025 2STO Clone. All rights reserved. ㉕",
      "footer.address": "서울특별시 강남구 테헤란로 123, 2STO 빌딩 6층",
      "footer.tel": "TEL. 02-1234-5678, E-mail. info@2sto.com"
    },

    /* ================== 영어 ================== */
    en: {
      "meta.title": "Jeolgu Factory",
      "nav.home": "Home",
      "nav.jeolguFactory": "Jeolgu Factory",
      "nav.jeolguMill": "Jeolgu Mill",
      "nav.familyism": "Factory Familyism",
      "nav.inquiry": "Inquiry",
      /* 나머진 위 한국어 버전 참고해서 필요할 때 채우면 돼 */
    },

    /* ================== 일본어 ================== */
    ja: {
      "meta.title": "ジョルグファクトリー",
      "nav.home": "ホーム",
      "nav.jeolguFactory": "ジョルグファクトリー",
      "nav.jeolguMill": "ジョルグ精米所",
      "nav.familyism": "ファクトリーファミリズム",
      "nav.inquiry": "お問い合わせ",
    }
  };

  const i18nEls = document.querySelectorAll("[data-i18n]");
  const langSelects = document.querySelectorAll("[data-lang-select]");
  let currentLang = "ko";

  function applyLang(lang) {
    const table = dict[lang];
    if (!table) return;

    if (table["meta.title"]) document.title = table["meta.title"];

    i18nEls.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (table[key]) el.innerText = table[key];
    });

    langSelects.forEach((sel) => {
      sel.value = lang;
    });

    currentLang = lang;
  }

  langSelects.forEach((sel) => {
    sel.addEventListener("change", (e) => {
      applyLang(e.target.value);
    });
  });

  applyLang(currentLang);
})();
