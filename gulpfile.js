const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
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
    outputStyle: 'compressed'
  }).on('error', sass.logError)).pipe(gulp.dest('docs/css/'))
  .pipe(notify({ message: 'Compiled SASS successfully.' }));
})


// Compile Vendor CSS
gulp.task('vendor-css', function() {
  return gulp.src([
    'node_modules/cool-checkboxes-for-bulma.io/dist/css/bulma-radio-checkbox.min.css'
  ])
  .pipe(gulp.dest('docs/css/'))
  .pipe(notify({ message: 'Compiled Vendor CSS successfully.' }));
});


// Compile JS
gulp.task('scripts', function() {
  return gulp.src([
    'src/js/lib/*.js'
  ])
  .pipe(concat('app.js'))
  .pipe(minify())
  .pipe(gulp.dest('docs/js/'))
  .pipe(notify({ message: 'Compiled Scripts successfully.' }));
});


// Watcher
gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.sass', ['sass', 'lint-css'])
  gulp.watch('src/js/lib/*.js', ['scripts'])
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
