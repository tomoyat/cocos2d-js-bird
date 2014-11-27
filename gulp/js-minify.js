module.exports = function(gulp) {
  var taskName = "js-minify";
  var uglify = require("gulp-uglify");
  var concat = require("gulp-concat");
  var srcPath = "src/*.js";
  var dstPath = "";
  var exportFileName = "game.js";
  gulp.task(taskName, function () {
    gulp.src(srcPath)
      .pipe( concat(exportFileName) )
      .pipe( uglify() )
      .pipe( gulp.dest(dstPath) );
  });
};
