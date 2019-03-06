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

// //方式2 返回一个promise对象
// gulp.task('hello',() => {
//   return new Promise((resolve,reject) => {
//     console.log('新年快乐');
//     resolve();
//   })
// })

