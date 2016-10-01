var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp
    .src("*.es")
    .pipe(babel())
    .pipe(gulp.dest("."));
});

gulp.task("watch", function () {
  gulp.watch("*.es", ["default"]);
});
