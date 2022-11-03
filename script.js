const images=[
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
  ];
let index=0 
  let imgTag=document.getElementsByTagName('img')[0];
  setInterval(()=>{
    index++
    imgTag.src=images[index]
    if(index===images.length-1){
      index=-1;
    }
    },1000);