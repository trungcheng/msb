const { src, dest, watch, series, parallel } = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');

const files = {
    scssPath: 'src/scss/**/*.scss',
    cssPath: 'src/dist/css'
}

function scssTask() {
    return src(files.scssPath, { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest(files.cssPath, { sourcemaps: '.' }));
}

function watchTask() {
    watch([files.scssPath], parallel(scssTask));
}

exports.default = series(scssTask, watchTask);