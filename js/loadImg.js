// 封装一个异步加载异步图片方法 
let loadImage = (url) =>{
 return new Promise(function(resolve,reject){
     let oImg = new Image();
     oImg.onload = () =>{
         resolve(oImg);
     }
    oImg.onerror=()=>{
        reject(new Eeeor("can't find url:"+url));
    }
    oImg.src =url;
 })
}