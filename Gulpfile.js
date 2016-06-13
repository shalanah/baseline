var gulp = require('gulp')
var sass = require('gulp-sass')
var cleanCSS = require('gulp-clean-css')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer');

var input = 'stylesheets/**/*.scss'
var output = './public/css/'
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
}

gulp.task('styles', function() {
  return gulp.src(input)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest(output))
});

//Watch task
gulp.task('default',function() {
    gulp.watch(input, ['styles'])
});