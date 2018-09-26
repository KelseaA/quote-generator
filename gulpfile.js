var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
        baseDir: 'src'
        },
    })
});

gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('src/**/*.scss', ['sass']); 
    gulp.watch('src/*.html', browserSync.reload); 
    gulp.watch('src/**/*.js', browserSync.reload); 
});

gulp.task('default', function (callback) {
    runSequence(['sass','browserSync', 'watch'],
      callback
    )
})