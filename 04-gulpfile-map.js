const gulp=require("gulp");
const less = require("gulp-less");
const autoprefixer=require("gulp-autoprefixer");
// 01- 引入 生成map文件的 插件
const sourcemaps = require('gulp-sourcemaps');

// 02 处理css
gulp.task("css", () => {
  return (
    gulp
      .src("./src/css/*.less")
      // 2.1 在生成css文件之前 先记录以下 less文件的样子
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions"]
        })
      )
      // 2.2 和css文件同层级 也顺带生成一个 map文件
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("./ist/css/"))
  );
});