
var gulp = require("gulp");
var sass = require("gulp-sass");
var jshint = require("gulp-jshint")

gulp.task("sass", function(){
    gulp.src("./gulppublic/stylesheets/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task("jshint", function(){
    return gulp.src(["app.js", "routes/**/*.js","public/javascripts/*.js", "!public/javascripts/highlight.pack.js"])
        .pipe(jshint())
        .pipe(jshint.reporter("jshint-stylish"));
});

gulp.task("default", function(){
    gulp.watch("./gulppublic/stylesheets/*.scss", ["sass"]);
    gulp.watch(["app.js", "routes/**/*.js","public/javascripts/*.js"], ["jshint"]);
});
