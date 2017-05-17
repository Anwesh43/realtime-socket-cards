const gulp = require('gulp')
const gulp_concat = require('gulp-concat')
const jsmin = require('gulp-jsmin')
const gulp_rename = require('gulp-rename')
gulp.task('createDist',()=>{
    gulp.src('client/*.js').pipe(gulp_concat('realtime-socket-card.js')).pipe(jsmin()).pipe(gulp_rename({suffix:'.min'})).pipe(gulp.dest('dist')).pipe(gulp.dest('public'))
})
gulp.task('watchAndCreateDist',()=>{
    gulp.watch('client/*.js',['createDist'])
})
gulp.task('default',['createDist','watchAndCreateDist'])
