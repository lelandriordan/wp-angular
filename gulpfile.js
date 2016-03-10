var gulp = require('gulp');
var sass = require('gulp-sass');
var util = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var ngannotate = require('gulp-ng-annotate');
var iife = require('gulp-iife');
//var injecthtml = require('gulp-inject-stringified-html');
var angularfilesort = require('gulp-angular-filesort');

var paths = {
  js: {
    src: './app/**/**/**/*.js',
    dist: './dist/js'
  },
  styles: {
    src: './scss/**/*.scss',
    dist: './dist/css'
  }
};

gulp.task('default', [
  'watch'
]);

gulp.task('watch', function() {
  gulp.watch(paths.js.src, ['js']);
  gulp.watch(paths.styles.src, ['styles']);
});

gulp.task('js', function() {
  return gulp.src(paths.js.src)
    //.pipe(injecthtml())
    .on('error', logError)
    .pipe(iife({
      useStrict: true,
      trimCode: true
    }))
    .on('error', logError)
    .pipe(ngannotate())
    .pipe(angularfilesort())
    .pipe(concat('app.js'))
    .pipe(gulp.dest(paths.js.dist))
    .pipe(uglify())
    .on('error', logError)
    .pipe(rename("app.min.js"))
    .pipe(gulp.dest(paths.js.dist));
});

gulp.task('styles', function() {
  return gulp.src(paths.styles.src)
    .pipe(sass({ outputStyle: 'compressed' }))
    .on('error', logError)
    .pipe(rename('app.css'))
    .pipe(gulp.dest(paths.styles.dist));
});

function logError(err) {
  //util.log(err.toString());
  util.log(JSON.stringify(err));
  this.emit('end');
};
