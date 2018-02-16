import gulp from 'gulp';
import taskDir from 'task-dir';
import runSequence from 'run-sequence';
import path from 'path';
import babel from "gulp-babel";
import del from "del";
import eslint from "gulp-eslint";

// taskDir(gulp, path.join(__dirname, 'build'));

export default (callback) => {
  runSequence('build:lib:clean', callback);
};

gulp.task('build:lib:babel', function() {
  return gulp
    .src(['src/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});
gulp.task('build:lib:clean', () => del.sync(['lib', 'dist']));

gulp.task('build:lib:clean', () => gulp
  .src(['src/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failOnError()));
