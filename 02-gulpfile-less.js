const gulp = require("gulp");
// 1 引入编译less文件的包
const less = require("gulp-less");

// 2 编写  编译less文件的任务
gulp.task("css", () => {
  // 2.1 获取 要操作的less文件
  return (
    gulp
      .src("./src/css/*.less")
      //  2.2 使用less插件 编译文件
      .pipe(less())
      .pipe(gulp.dest("./dist/css/"))
  );
});