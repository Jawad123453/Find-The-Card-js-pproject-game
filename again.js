document.querySelector(".control-buttons span").onclick=function(){
  let h=window.prompt("Enter your name");
  if(h == "" || h==null){
    document.querySelector(".name span").innerHTML="Unkown";
  }else{
    document.querySelector(".name span").innerHTML=h;;
  }
  document.querySelector(".control-buttons").remove()
}

let gameblock=document.querySelectorAll(".game-block");
let idkw=Array.from(gameblock);
let tryagain=Array.from(Array(idkw.length).keys());
let newswap = swaping(tryagain);

let duration=1000;

idkw.forEach((block,index) =>{
  block.style.order = newswap[index];

  block.addEventListener("click",function(){
    filpcards(block);
  })
})

function filpcards(selectbox){

  selectbox.classList.add("is-flipped");
  let itsmotmorethan2=idkw.filter(x => x.classList.contains("is-flipped"))

  if(itsmotmorethan2.length === 2){
    nocklicing(selectbox);
    chekif(itsmotmorethan2[0] , itsmotmorethan2[1]);
  }
}

function nocklicing(){
  document.querySelector(".memory-game-blocks").classList.add("no-clicking");

  setTimeout(() => {
    document.querySelector(".memory-game-blocks").classList.remove("no-clicking")
  }, duration);
  
}

function chekif(number1,number2){
  let anyre=document.querySelector(".tries span");

  if(number1.dataset.technology === number2.dataset.technology){

    number1.classList.remove("is-flipped");
    number2.classList.remove("is-flipped");

    number1.classList.add("has-match");
    number2.classList.add("has-match");
  }else{
    anyre.innerHTML=parseInt(anyre.innerHTML) + 1;
    setTimeout(() => {
      number1.classList.remove("is-flipped");
      number2.classList.remove("is-flipped");
    }, duration);
  }
}

function swaping(array){
  let arraylen = array.length;
  let random,temp;
  while(arraylen > 0){
    random = Math.floor(Math.random() * arraylen);
    arraylen--;

    temp = array[arraylen];
    array[arraylen] = array[random];
    array[random] = temp;
  }
  return array;
}