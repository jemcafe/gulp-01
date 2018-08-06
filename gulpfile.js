// The file must be called gulpfile
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');  // optimizes image files
const uglify = require('gulp-uglify');  // minify files
const sass = require('gulp-sass');  // compile sass
const concat = require('gulp-concat');  // merges js files


/*  TOP LEVEL FUNCTIONS
  gulp.task - define tasks
  gulp.src - point to file
  gulp.dest - output destination
  gulp.watch - watch files
*/

// Test task
gulp.task('message', function(){
  return console.log('Gulp is running');
});

// Copy all html files
gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

// optimaize images
gulp.task('imageMin', function(){
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Minify JS
// gulp.task('minify', function(){
//   gulp.src('src/js/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'));
// });

// Compile Sass
gulp.task('sass', function(){
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))  // For potential syntax errors
    .pipe(gulp.dest('dist/css'));
})

// Scripts
gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
})

// Default task (All the tasks can be run)
gulp.task('default', ['message','copyHtml','imageMin','sass','scripts']);

// gulp.task('default', function(){
//   return console.log('Gulp is running');
// });