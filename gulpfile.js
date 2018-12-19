const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const notify = require("gulp-notify");
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');


// Compile SASS
gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.sass').pipe(sass()).pipe(autoprefixer({
    browsers: [
      "last 2 versions",
      ">= 0.2%",
      "Chrome >= 55",
      "Firefox >= 55",
      "Edge >= 16",
      "Explorer >= 11",
      "iOS >= 10",
      "Safari >= 10",
      "Android >= 4.4"
	  ],
    cascade: false
  })).pipe(cleanCSS({
    level: {
      1: {
        all: true,
        tidySelectors: true
      }
    }
  })).pipe(sass({
    outputStyle: 'compact'
  }).on('error', sass.logError)).pipe(gulp.dest('dist/css/'))
  .pipe(notify({ message: 'Compiled SASS successfully.' }));
})


// Compile JS
gulp.task('scripts', function() {
  return gulp.src([
    'src/js/vendors/*.js',
    'src/js/app.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('dist/js/'))
  .pipe(notify({ message: 'Compiled Scripts successfully.' }));
});


// Watcher
gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.sass', ['sass', 'lint-css'])
  gulp.watch('dist/js/app.js', ['scripts'])
})


// Lint CSS
gulp.task('lint-css', function lintCssTask() {
  const gulpStylelint = require('gulp-stylelint');
  return gulp
    .src([
      'src/sass/**/*.sass'
    ])
    .pipe(gulpStylelint({
    reporters: [
      {formatter: 'string', console: true}
    ]
  }))
});


// Run all Gulp commands for development
gulp.task('dev', ['sass', 'scripts']);
