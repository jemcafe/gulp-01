// The file must be called gulpfile
const gulp = require('gulp');

/*
  gulp.task - define tasks
  gulp.src - point to file
  gulp.dest - output destination
  gulp.watch - watch files
*/

gulp.task('message', function(){
  return console.log('Gulp is running');
});

gulp.task('default', function(){
  return console.log('Gulp is running');
});