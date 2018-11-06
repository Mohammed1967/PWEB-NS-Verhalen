/*--------------------------------------------------------------------------
                                  LIKEN 1st STORY
---------------------------------------------------------------------------*/
var add = document.querySelector('body>main>section:nth-of-type(1)>div>article:first-of-type>header>a:first-of-type>img');

var lijstbounce = document.querySelector('body>header>p');
var lijstnummer = 11;

function add_function(){
  add.src='img/toevoegen_done.svg';
  nummer = 0;
  lijstbounce.classList.add('lijstbounce');
  lijstnummer++;
  document.querySelector('body>header>p').innerHTML = lijstnummer;
}

add.addEventListener('click', add_function);


/*--------------------------------------------------------------------------
                                  LIKEN 2nd STORY
---------------------------------------------------------------------------*/
var add2 = document.querySelector('body>main>section:nth-of-type(1)>div>article:nth-of-type(2)>header>a:first-of-type>img');

var lijstbounce = document.querySelector('body>header>p');
var lijstnummer = 11;

function add2_function(){
  add2.src='img/toevoegen_done.svg';
  nummer = 0;
  lijstbounce.classList.add('lijstbounce');
  lijstnummer++;
  document.querySelector('body>header>p').innerHTML = lijstnummer;
}

add2.addEventListener('click', add2_function);


/*--------------------------------------------------------------------------
                                  LIKEN 2nd STORY
---------------------------------------------------------------------------*/
var add3 = document.querySelector('body>main>section:nth-of-type(1)>div>article:nth-of-type(3)>header>a:first-of-type>img');

var lijstbounce = document.querySelector('body>header>p');
var lijstnummer = 11;

function add3_function(){
  add3.src='img/toevoegen_done.svg';
  nummer = 0;
  lijstbounce.classList.add('lijstbounce');
  lijstnummer++;
  document.querySelector('body>header>p').innerHTML = lijstnummer;
}

add3.addEventListener('click', add3_function);
