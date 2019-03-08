const gulp = require("gulp");
const babel = require("gulp-babel");
const less = require("gulp-less");
const fileInclude = require("gulp-file-include");
// 1 引入添加指纹的 插件
const rev = require("gulp-rev");
// 1 引入 修改html文件中的静态资源的插件
const revCollector = require("gulp-rev-collector");


// 2 处理less
gulp.task("css", () => {
  return (
    gulp
    .src("src/css/*.less")
    .pipe(less())
    // 2.1 给css文件添加指纹
    .pipe(rev())
    //  2.2 存放css
    .pipe(gulp.dest("./dist/css/"))
    //  3 将 css文件和css指纹文件的映射关系写到文件中
    .pipe(
      rev.manifest({
        path: "rev-css-mainfest.json"
      })
    )
    //  4 存入起来，给后面html修改引用使用
    .pipe(gulp.dest("./src/rev/"))
  );
});
//  2 处理js
gulp.task("js", () => {
  return (
    gulp
    .src("src/js/*.js")
    .pipe(babel())
    //  2.1 给js文件添加指纹
    .pipe(rev())
    //  2.2 存放js文件
    .pipe(gulp.dest("./dist/js/"))
    //  3  将 js文件和js指纹文件的映射关系写到文件中
    .pipe(
      rev.manifest({
        path: "rev-js-mainfest.json"
      })
    )
    //  4 存入起来，给后面html修改引用使用
    .pipe(gulp.dest("./src/rev/"))
  );
});

// 3 处理html
gulp.task("html", () => {
  return gulp
    // 2 获取页面文件
    .src(["src/index.html", "./src/rev/*.json"])
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
    //  3.2 开始修改html中的文件引用
    .pipe(revCollector())
    // 4 合并成功后，将html文件放置到dist文件夹下
    .pipe(gulp.dest("dist/"))
});

// 4 按顺序执行
gulp.task("default", gulp.series(["css", "js", "html"]));