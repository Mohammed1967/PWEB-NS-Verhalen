
//----------------- hover aan -----------------
var liken = document.querySelector('body>main>section:nth-of-type(3)>img:first-of-type');
var like_show = document.querySelector('body>main>section:nth-of-type(3)>p:nth-of-type(1)');
var verander_getal = 12;


function liken_function(){
  liken.src='img/hart_icoon_liked.svg';
  liken.classList.add('liken_animatie');
  like_show.classList.add('like_show');
  verander_getal++;
  document.querySelector('body>main>section:nth-of-type(1)>p:nth-of-type(1)').innerHTML = verander_getal + ' likes';
}


liken.addEventListener('click', liken_function);
