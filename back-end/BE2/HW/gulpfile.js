var csslint = require('gulp-csslint')
var jshint = require('gulp-jshint')
var nodemon = require('gulp-nodemon')
var gulp = require('gulp')

//gulp.task('default',['task-1','task-2']);
gulp.task('task-1', function() {
    gulp.src(['client/js/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
});
gulp.task('task-2', function() {
  gulp.src('client/css/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter());
});
gulp.task('develop', function () {
  var stream = nodemon({ script: 'app.js'
          , ext: 'css js'
          , tasks: ['task-1','task-2'] })

  stream
      .on('restart', function () {
        console.log('restarted!')
      })
      .on('crash', function() {
        console.error('Application has crashed!\n')
         stream.emit('restart', 10)  // restart the server in 10 seconds
      })
})
