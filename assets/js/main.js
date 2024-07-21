// スクロールに応じてヘッダーの色を変更
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.classList.add('header-fixed');
    } else {
      header.classList.remove('header-fixed');
    }
  });
  
  // ナビゲーションメニューの開閉
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('nav-menu-open');
  });

  // 横スクロールを実装
document.addEventListener('DOMContentLoaded', function() {
    const memberScroll = document.querySelector('.member-scroll');

    memberScroll.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        memberScroll.scrollLeft += evt.deltaY;
    });
});

// メンバースムーズスクロール
document.addEventListener("DOMContentLoaded", function() {
  const hash = window.location.hash;
  if (hash) {
      const element = document.querySelector(hash);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
  }
});