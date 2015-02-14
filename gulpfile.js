var gulp = require('gulp'),
    react = require('gulp-react'),
    concat = require('gulp-concat'),
    replace = require('gulp-replace'),
    fs = require('fs');

gulp.task('default', function() {
    return gulp.src('src/components/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
    return gulp.src([
        'node_modules/react/dist/react-with-addons.min.js',
        'node_modules/firebase/lib/firebase-web.js',
        'node_modules/reactfire/dist/reactfire.min.js',
        './dist/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('.'));
});

gulp.task('css', function() {
    return gulp.src('index.html')
      .pipe(replace(/<link rel="stylesheet"[^>]*>/, function(s) {
          var style = fs.readFileSync('src/css/app.css', 'utf8');
          return '<style>' + style + '</style>';
      }))
      .pipe(gulp.dest('./index.html'));
});
