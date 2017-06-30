var gulp = require("gulp");
var concat = require("gulp-concat");
var less = require("gulp-less");

gulp.task("less", () => {
  return gulp.src("./public/css/style.less")
    .pipe(less())
    .pipe(gulp.dest("./public/css"));
});

gulp.task("default", () => {
  gulp.watch("./public/css/style.less", (event) => {
    gulp.run("less");
  });
});