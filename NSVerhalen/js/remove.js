/*--------------------------------------------------------------------------
                                  REMOVE 1st STORY
---------------------------------------------------------------------------*/
var remove = document.querySelector('body>main>section:nth-of-type(1)>div>article:first-of-type>header>a:first-of-type>img');

var lijstbounce = document.querySelector('body>header>p');
var lijstnummer = 8;

function remove_function(){
  remove.src='img/toevoegen_add.svg';
  nummer = -1;
  lijstbounce.classList.remove('lijstbounce');
  lijstnummer--;
  document.querySelector('body>header>p').innerHTML = lijstnummer;
}

remove.addEventListener('click', remove_function);


/*--------------------------------------------------------------------------
                                  REMOVE 2nd STORY
---------------------------------------------------------------------------*/
var remove2 = document.querySelector('body>main>section:nth-of-type(1)>div>article:nth-of-type(2)>header>a:first-of-type>img');

var lijstbounce = document.querySelector('body>header>p');
var lijstnummer = 8;

function remove2_function(){
  remove2.src='img/toevoegen_add.svg';
  nummer = 0;
  lijstbounce.classList.remove('lijstbounce');
  lijstnummer--;
  document.querySelector('body>header>p').innerHTML = lijstnummer;
}

remove2.addEventListener('click', remove2_function);


/*--------------------------------------------------------------------------
                                  REMOVE 2nd STORY
---------------------------------------------------------------------------*/
var remove3 = document.querySelector('body>main>section:nth-of-type(1)>div>article:nth-of-type(3)>header>a:first-of-type>img');

var lijstbounce = document.querySelector('body>header>p');
var lijstnummer = 8;

function remove3_function(){
  remove3.src='img/toevoegen_add.svg';
  nummer = 0;
  lijstbounce.classList.remove('lijstbounce');
  lijstnummer--;
  document.querySelector('body>header>p').innerHTML = lijstnummer;
}

remove3.addEventListener('click', remove3_function);
