var gulp = require("gulp");
var babel = require("gulp-babel");
var include = require("gulp-include");

gulp.task("default", function () {

  return gulp
    .src("*.es")
    .pipe(include())
    .pipe(babel())
    .pipe(gulp.dest("./"));
});

gulp.task("watch", function () {
  gulp.watch("*.es", ["default"]);
});
