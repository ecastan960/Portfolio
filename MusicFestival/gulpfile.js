const { series, src, dest, watch } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');

const paths = {
    images: 'src/img/**/*',
    scss:  'src/scss/**/*.scss'
}

// Function that compile sass
function css (  ) {
    return src( paths.scss )
        .pipe( sass({
            outputStyle: 'expanded'
        }) )
        .pipe( dest('./build/css') )
}

function minimize() {
    return src( paths.scss )
        .pipe( sass({
            outputStyle: 'compressed'
        }) )
        .pipe( dest('./build/css') )
}

function images () {
    return src(paths.images)
    .pipe ( imagemin())
    .pipe ( dest('./build/img') )
    .pipe ( notify({message:'Image Minified'}));
}

function versionWebp () {
    return src(paths.images)
    .pipe ( webp() )
    .pipe ( dest('./build/img') )
    .pipe ( notify({message:'Webp version ready'}))

}

function watchFiles() {
    watch(paths.scss, css ); // * = current folder - ** = All files with current extension
}

exports.css = css;
exports.minimize = minimize;
exports.images = images;
exports.watchFiles = watchFiles;
exports.default = series(css, images, versionWebp, watchFiles);