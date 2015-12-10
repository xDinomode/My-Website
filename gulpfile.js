
//Lints javascript files and compiles sass into css

//Run "gulp" without quotes in terminal

var gulp = require("gulp");
var sass = require("gulp-sass");
var jshint = require("gulp-jshint")
var minifycss = require("gulp-minify-css");
var uglify = require("gulp-uglify");

gulp.task("sass", function(){
    gulp.src("./gulppublic/stylesheets/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task("minifycss", function(){
    return gulp.src("./public/stylesheets/**/*.css")
        .pipe(minifycss())
        .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task("jshint", function(){
    return gulp.src(["app.js", "routes/**/*.js","public/javascripts/**/*.js", "!public/javascripts/highlight.pack.js"])
        .pipe(jshint())
        .pipe(jshint.reporter("jshint-stylish"));
});

gulp.task("compressjs", function(){
    return gulp.src("./gulppublic/javascripts/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./public/javascripts"));
});

gulp.task("default", function(){
    gulp.watch("./gulppublic/stylesheets/**/*.scss", ["sass"]);
    gulp.watch("./gulppublic/stylesheets/*.scss", ["sass"]);
    gulp.watch(["app.js", "routes/**/*.js","public/javascripts/**/*.js"], ["jshint"]);
    gulp.watch("./public/stylesheets/**/*.css", ["minifycss"]);
    gulp.watch("./gulppublic/javascripts/**/*.js", ["compressjs"]);
});
