var gulp = require("gulp");

require("./gulp/js-minify.js")(gulp);

gulp.task("default", ["js-minify"]);