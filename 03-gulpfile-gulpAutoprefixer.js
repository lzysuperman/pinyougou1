const gulp=require("gulp");
const less = require("gulp-less");
// 1 引入 添加css浏览器前缀的插件
const autoprefixer=require("gulp-autoprefixer");


// 2 编写  编译less文件的任务
gulp.task("css", () => {
  return (
    gulp
      .src("./src/css/*.less")
      .pipe(less())
      // 2.1 使用添加浏览器前缀的插件
      .pipe(
        autoprefixer({
          // 兼容 主流浏览器的最新的个版本 
          browsers: ["last 2 versions"]
        })
      )
      .pipe(gulp.dest("./dist/css/"))
  );
});