// The file must be called gulpfile
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');  // optimizes image files

/*  TOP LEVEL FUNCTIONS
  gulp.task - define tasks
  gulp.src - point to file
  gulp.dest - output destination
  gulp.watch - watch files
*/

gulp.task('message', function(){
  return console.log('Gulp is running');
});

gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('imageMin', function(){
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('default', function(){
  return console.log('Gulp is running');
});