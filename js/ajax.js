//封装一个ajax异步请求服务方法
let ajax =(url)=>{
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.onreadystatechange=()=>{
            if(xhr.readyState!==4) return;
            if(xhr.status===200){
                resolve(xhr.responseText);
            }else{
                reject(new Error('error'+xhr.statusText))
            }
        } 
    xhr.send(null);
    })
}