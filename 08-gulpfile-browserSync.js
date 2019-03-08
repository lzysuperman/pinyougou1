const gulp = require("gulp");
const fileInclude = require("gulp-file-include");
// 1 引入文件
const browserSync = require("browser-sync");

// 2 编写编译html的任务
gulp.task("html", () => {
  return gulp
    .src("src/index.html")
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "src/components/",
        context: {
          baseSrc: "."
        }
      })
    )
    .pipe(gulp.dest("dist/"));
});

// 3 开启服务器和动态更新的任务
gulp.task("serve", () => {
  browserSync({
    // 3.1 开启本地服务器
    server: {
      // 3.2 网站的路径
      baseDir: "dist",
    },
    // 3.3 端口
    port: 8080,
    // 3.4 关闭浏览器右上方的黑色的提示框
    notify: false
  });
  // 4 使用watch开监控页面的变化 发生变化之后  先执行重新编译html任务，然后执行刷新浏览器页面任务reload
  gulp.watch("src/**/*.html", gulp.series(["html", "reload"]));
});

// 5 刷新页面
gulp.task("reload", done => {
  browserSync.reload();
  done();
});