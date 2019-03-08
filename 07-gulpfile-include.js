const gulp = require("gulp");
// 1 导入包
const fileInclude = require("gulp-file-include");

gulp.task("html", () => {
  return gulp
  // 2 获取页面文件
    .src("src/index.html")
    .pipe(
      // 3  加载模版文件
      fileInclude({
        // 3.1 模版语法的识别符号
        prefix: "@@",
        // 3.2 定义组件路径
        basepath: "src/components/",
        // 3.3 context为关键字，内部的变量是组件内部可以使用的变量
        context: {
          // 3.4 定义整个项目的变量 名为 title 值为 "我们的页面"
          title: "我们的页面"
        }
      })
    )
    // 4 合并成功后，将html文件放置到dist文件夹下
    .pipe(gulp.dest("dist/"));
});