var gulp = require('gulp'),
    react = require('gulp-react'),
    concat = require('gulp-concat'),
    replace = require('gulp-replace'),
    fs = require('fs'),
    minifyCSS = require('gulp-minify-css');

gulp.task('default', function() {});

gulp.task('js', function() {
    return gulp.src([
        'node_modules/react/dist/react-with-addons.min.js',
        'node_modules/react/dist/JSXTransformer.js',
        //'node_modules/firebase/lib/firebase-web.js',
        'node_modules/reactfire/dist/reactfire.min.js'
    ])
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('.'));
});

gulp.task('jsx', function() {
    return gulp.src([
        './src/components/Countries.jsx',
        './src/components/Country.jsx',
        './src/components/App.jsx'
    ])
        .pipe(concat('app.jsx'))
        .pipe(gulp.dest('.'));
});

gulp.task('jsx-transform', function() {
    return gulp.src('app.jsx')
        .pipe(react())
        .pipe(gulp.dest('.'));
});

gulp.task('minify-css', function() {
    return gulp.src('src/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('css', function() {
    return gulp.src('src/index.html')
      .pipe(replace(/<link rel="stylesheet"[^>]*>/, function(s) {
          var styles = fs.readFileSync('dist/css/app.css', 'utf8');
          return '<style>' + styles + '</style>';
      }))
      .pipe(gulp.dest('.'));
});
