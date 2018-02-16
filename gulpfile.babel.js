import gulp from 'gulp';
import taskDir from 'task-dir';
import path from 'path';
import babel from "gulp-babel";
import runSequence from "run-sequence";

gulp.task('default', ['build']);

gulp.task('build', (callback) => {
  runSequence('build:lib', callback);
});

gulp.task('build:lib', function() {
  return gulp
    .src(['src/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});
