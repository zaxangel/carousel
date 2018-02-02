 //ajax请求返回图片数据，动态添加dom节点 
ajax('http://localhost:8080/data')
 .then((data) => {
      let imgs = JSON.parse(data);
      new playAuto(imgs);    
  })
  .catch((err)=>{
     console.log(err)
 })
        