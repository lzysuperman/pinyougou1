// 1 引入gulp 核心包
const gulp=require("gulp");
// 2 引入 删除 del 包
const del = require('del');

// 3 编写 删除任务
gulp.task("delete",()=>{
  // 3.1 执行删除
  // del(["要删除的文件的路径"])
 return del(["./dist"]);
});