let gulp = require('gulp');
let webserver = require('gulp-webserver');
let fs = require('fs');
let path =require('path');
gulp.task('server',function(){
    gulp.src('.')
     .pipe(webserver({
         host:'localhost',
         port:8080,
         middleware:function(req,res,next){
            res.writeHead(200,{
                'Content-Type':"text/json;charset=utf-8",
                'Access-Control-Allow-Origin':'*'

            })
            if(req.url === '/data'){
                let data = fs.readFileSync('Data/data.json');
                res.end(data);
            }
        
         }
     }))
})
    gulp.task('webserver',function(){
        gulp.src('.')
        .pipe(webserver({
            host:'localhost',
            port:8888,
            open:true,
            livereload:true
        }))
    })
    gulp.task('default',['server','webserver']);