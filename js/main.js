let swiper = new Swiper('.swiper-container', {
  loop: false,
  slidesPerView: 1,
  breakpoints: {
    426: {
      slidesPerView: 2,
      centeredSlides : true,
    },
    769: {
      slidesPerView: 3,
      centeredSlides : true,
    }
  },
  grabCursor: true,
  // initialSlide: 0,
  // spaceBetween: 100,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

function　scrollFunction() {
  var this_y = window.pageYOffset;
  if (this_y > 820) {
      document.getElementById("header__color").classList.add("color-black");
      document.getElementById("header__logo-color").classList.add("logo-black");
  } else {
      document.getElementById("header__color").classList.remove("color-black");
      document.getElementById("header__logo-color").classList.remove("logo-black");
  }
};

window.onload = function() {
  scrollFunction();
}
window.onscroll = function() {
  scrollFunction();
}


const surveyUrl = 'https://forms.gle/YQ9PUDf2TMezfkPQA'

function surveyConfirm() {
  var options = {
      text: 'このサイトは公立はこだて未来大学の学生が授業課題で作成したもので、実際に支援する機能はありません\n\nよろしければアンケートのご協力お願いいたします\n※別タブでアンケートフォームを開きます', //\nでテキストの改行が出来ます
      buttons: {
          cancel: 'キャンセル',
          ok: 'アンケートに答える'
      }
  };
  swal(options).then(function(value){
      if(value){
          //表示するを選んだ場合の処理
          window.open(surveyUrl, '_blank')
      }
  });
};

for (var i = 1; i < 10; ++i) {
  document.getElementById("survey-link-" + i).onclick = function() {
    surveyConfirm();
  }
}

function copyUrl() {
  console.log("ok");
  var url = location.href;
  navigator.clipboard.writeText(url);
}

for (var i = 1; i < 3; ++i) {
  document.getElementById("copy-url-" + i).onclick = function() {
    copyUrl();
  }
}