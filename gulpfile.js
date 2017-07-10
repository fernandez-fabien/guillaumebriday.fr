var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var browserify = require('gulp-browserify');

paths = {
  animate_css: 'node_modules/animate.css/source',
  font_awesome: 'node_modules/font-awesome',
  vendor: '_sass/resume/vendor'
};

gulp.task('copy', function() {
  gulp.src([
        paths.animate_css + '/_base.css',
        paths.animate_css + '/bouncing_entrances/bounceIn.css',
        paths.animate_css + '/fading_entrances/fadeInLeft.css',
        paths.animate_css + '/fading_entrances/fadeInRight.css'
      ])
      .pipe(rename({ extname: '.scss' }))
      .pipe(gulp.dest(paths.vendor + '/animate.css/'));

  gulp.src(paths.font_awesome + '/scss/**')
      .pipe(gulp.dest(paths.vendor + '/font-awesome/scss/'));

  gulp.src(paths.font_awesome + '/fonts/**')
      .pipe(gulp.dest('assets/fonts/'));
});

gulp.task('scripts', function() {
  gulp.src('_javascripts/app.js')
      .pipe(browserify())
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('js'));
});

gulp.task('default', ['scripts', 'copy']);
