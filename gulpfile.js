const yaml = require('gulp-yaml');
const { src, dest, watch, series } = require('gulp');
// const debug = require('gulp-debug');

function toJson() {
    return src('./yaml/exofinds_fcs_new.yaml')
        .pipe(yaml({ safe: true }))
        .pipe(dest('./jsons/'))
}

function watchTask() {
    watch('yaml/exofinds_fcs_new.yaml', toJson)
    // watch('src/*.js', series(clean, javascript)),
}

exports.default = series (
    toJson,
    watchTask
)