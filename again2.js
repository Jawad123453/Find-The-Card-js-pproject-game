document.querySelector(".control-buttons span").onclick=function(){
  let h=window.prompt("Enter Your Name");
  if(h == "" || h==null){
    document.querySelector(".name span").innerHTML ="Unkown";
  }else{
    document.querySelector(".name span").innerHTML =h;
  }
  document.querySelector(".control-buttons").remove();
  showup();
  dothediv()
}
let mainone=document.querySelector(".memory-game-blocks");
let mainarray=Array.from(mainone.children);
let arrofmain=[...Array.from(mainone.children).keys()];
let newarrofmain=swaping(arrofmain);
let duration=1000;

function showup(){
  mainone.classList.add("no-clicking");
  setTimeout(() => {
    mainarray.forEach((one)=>one.classList.add("is-flipped"));
  }, duration);
  setTimeout(() => {
    mainarray.forEach((one)=>one.classList.remove("is-flipped"))
    timeleft();
  }, duration *2);
  setTimeout(() => {
    mainone.classList.remove("no-clicking")
  }, duration *3);
}


mainarray.forEach((block,index)=>{
  block.style.order=newarrofmain[index];
  block.addEventListener("click",function(){
    ifyouwin();
    openup(block);
  })
})

function ifyouwin(){
  let winone=mainarray.filter(x => x.classList.contains("has-match"));
  if(winone.length >= 18){
    document.querySelector(".ifwin").style.display="block";
    setTimeout(() => {
      document.querySelector(".ifwin").remove();
    }, duration * 2);
    setTimeout(() => {
      window.location.reload();
    }, duration * 2.5);
  }
}

function openup(task){
  task.classList.add("is-flipped");
  
  let just2=mainarray.filter(x => x.classList.contains("is-flipped"));
  if(just2.length === 2){
      idkwhatto();
      cheking(just2[0],just2[1]);
  }
}

function idkwhatto(){
  mainone.classList.add("no-clicking");
  setTimeout(() => {
    mainone.classList.remove("no-clicking");
  }, duration);
}

function cheking(number1,number2){
  let wrongone=document.querySelector(".tries span");
  if(number1.dataset.technology === number2.dataset.technology){
    number1.classList.remove("is-flipped");
    number2.classList.remove("is-flipped");

    number1.classList.add("has-match");
    number2.classList.add("has-match");
  }else{
    wrongone.innerHTML++;
    setTimeout(() => {
      number1.classList.remove("is-flipped");
      number2.classList.remove("is-flipped");
    }, duration);
    if(wrongone.innerHTML == 20){
      youloseman();
    }
  }
}

function youloseman(){
  document.querySelector(".ifwin").style.display="block";
  document.querySelector(".ifwin").innerHTML=`<span style="color:red;">You Lose</span>`;
  setTimeout(() => {
    document.querySelector(".ifwin").remove();
  }, duration * 2);
  setTimeout(() => {
    window.location.reload();
  }, duration * 2.5);
}

function swaping(array) {
  let arrayleng=array.length;
  let temp,random;
  while(arrayleng > 0){
    random=Math.floor(Math.random() * arrayleng);
    arrayleng--;
    temp=array[arrayleng];
    array[arrayleng]=array[random];
    array[random]= temp;
  }
  return array;
}

function timeleft(){
  let minite=document.querySelector(".maintime span").innerHTML;
  setInterval(mytimer,duration);
  function mytimer(){
    if(minite !== -1){
      document.querySelector(".maintime span").innerHTML = minite--;
      console.log(minite);
    }else{
      clearInterval(mytimer);
      youloseman()
    }
  }
}

// to do next [important]

// let todolistarray=[];

// function dothediv(){
//   const maindata={
//     id:Date.now(),
//     title:"jawad",
//     number:12
//   }
//   showingscore(maindata.title,maindata.number)
// }

// function showingscore(hisname,wrong){
//   let div=document.createElement("div");
//   div.classList.add("scors");

//   let span1=document.createElement("span");
//   let span2=document.createElement("span");

//   span1.innerText=hisname;
//   span2.innerText=wrong;
//   div.appendChild(span1);
//   div.appendChild(span2);
  
//   document.querySelector(".mainscors").appendChild(div);
// }

// localStorage.clear()