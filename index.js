let total=document.querySelectorAll(".drum").length;
for(let i=0;i<total;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function()
  {
    let element= document.querySelectorAll(".drum")[i].textContent;
    addAnimation(element);
    if(element=='w')
    {
      let audio=new Audio("./sounds/crash.mp3");
      audio.play();
    }
    else if(element=='a')
    {
      let audio=new Audio("./sounds/kick-bass.mp3");
      audio.play();
    }
    else if(element=='s')
    {
      let audio=new Audio("./sounds/snare.mp3");
      audio.play();
    }
    else if(element=='d')
    {
      let audio=new Audio("./sounds/tom-1.mp3");
      audio.play();
    }
    else if(element=='j')
    {
      let audio=new Audio("./sounds/tom-2.mp3");
      audio.play();
    }
    else if(element=='k')
    {
      let audio=new Audio("./sounds/tom-3.mp3");
      audio.play();
    }
    else 
    {
      let audio=new Audio("./sounds/tom-4.mp3");
      audio.play();
    }
  });
}

document.addEventListener("keypress",function(event)
{
  addAnimation(event.key);
  makeSound(event.key); 
});

function makeSound(element)
{
    if(element=='w')
    {
      let audio=new Audio("./sounds/crash.mp3");
      audio.play();
    }
    else if(element=='a')
    {
      let audio=new Audio("./sounds/kick-bass.mp3");
      audio.play();
    }
    else if(element=='s')
    {
      let audio=new Audio("./sounds/snare.mp3");
      audio.play();
    }
    else if(element=='d')
    {
      let audio=new Audio("./sounds/tom-1.mp3");
      audio.play();
    }
    else if(element=='j')
    {
      let audio=new Audio("./sounds/tom-2.mp3");
      audio.play();
    }
    else if(element=='k')
    {
      let audio=new Audio("./sounds/tom-3.mp3");
      audio.play();
    }
    else 
    {
      let audio=new Audio("./sounds/tom-4.mp3");
      audio.play();
    }
}

function addAnimation(element)
{
  document.querySelector("."+element).classList.add("pressed");
  setTimeout(function()
  {
    document.querySelector("."+element).classList.remove("pressed");
  },200);
}

