//引入gulp包
const gulp = require('gulp');
//定义任务
//gulp.task('任务名称','任务的执行体')
//方式1
gulp.task('hello',(done) => {
  console.log('hello 好啊');
  //done 结束的信号
  done();
});

//方式2 返回一个promise对象
gulp.task('hello',() => {
  return new Promise((resolve,reject) => {
    console.log('新年快乐');
    resolve();
  })
});

//方式3 返回gulp文件流
gulp.task('copy',() => {
  //src 获取文件，以文件流的形式  用来后续的处理 如 获取sass文件，后续编译
  //dest  保存文件  用于将处理过后的文件流保存到具体的地址上 如将sass编译后的css，保存下来
    //pipe是gulp内置的管道处理函数
  return gulp.src("src/index.html").pipe(gulp.dest('dist/'))

})

//2.编写按顺序执行的任务-series()
gulp.task('t1',(done) => {
  console.log('任务1');
  done()
})
gulp.task('t2',(done) => {
  console.log('任务2');
  done()
})
gulp.task('t3',(done) => {
  console.log('任务3');
  done()
})
gulp.task('default',gulp.series([
  't1',
  't2',
  't3'
]))

//3.监控文件的改动
gulp.task('time',(done) => {
  //time任务打印时间
  console.log((new Date).toLocaleString());
  done()
});
//定义监控任务
gulp.task('watch',() => {
  //文件改变后，自动执行time任务
  gulp.watch('src/index.html',gulp.series('time'))
});
//按顺序执行任务
// gulp.task('watch2',gulp.series('watch'));


