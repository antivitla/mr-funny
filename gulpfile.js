var gulp = require("gulp");
var rename = require("gulp-rename");

gulp.task("default", function () {
  return gulp.src([
      "src/**/*.js",
      "!src/**/*.browser.js",
      "!src/**/*.node.js",
      "!src/**/*.tests.js"
    ])
    .pipe(rename({ suffix: ".es" }))
    .pipe(gulp.dest("./"));
});
