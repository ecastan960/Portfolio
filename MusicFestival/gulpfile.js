const { series, src, dest, watch } = require('gulp');

const sass = require('gulp-sass')(require('sass'));


// Function that compile sass
function css (  ) {
    return src( 'src/scss/app.scss' )
        .pipe( sass({
            outputStyle: 'expanded'
        }) )
        .pipe( dest('./build/css') )
}

function watchFiles() {
    watch( 'src/scss/**/*.scss', css ); // * = current folder - ** = All files with current extension
}

exports.css = css;
exports.watchFiles = watchFiles;