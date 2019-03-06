const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
// 1 导入babel包
const babel = require("gulp-babel");

gulp.task("js", () => {
  return gulp
    .src("src/js/*.js")
    // 2 记录编译前的 es6的js
    .pipe(sourcemaps.init())
    // 3 使用babel进行编译
    .pipe(babel())
    // 4 js 生成js的map文件
    .pipe(sourcemaps.write("."))
    // 5 存放到对应的地址
    .pipe(gulp.dest("dist/js/"));
});