const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const minifycss = require('gulp-minify-css');
const rename = require("gulp-rename");
const autoprefix = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

const config = {

   	server: {

       baseDir: "./build"

   	},

   	tunnel: false,

   	host: 'localhost',

   	port: 8080

};

function htmlBuild() {

	return gulp.src('src/*.html')

           .pipe(gulp.dest('build/'));

}

function jsBuild() {
	return gulp.src('src/js/*')

           .pipe(gulp.dest('build/js/'));
}

function imgBuild() {
	return gulp.src('src/img/*')

		   .pipe(imagemin([
               imagemin.mozjpeg({quality: 80, progressive: true})
		   ]))

           .pipe(gulp.dest('build/img/'));
}

gulp.task('css', function() {

    return gulp.src('src/scss/*.scss')

       .pipe(sass().on('error', sass.logError))

       .pipe(autoprefix({

         cascade: false

       }))

       .pipe(minifycss({processImport: false}))

       .pipe(rename({suffix: '.min'}))

       .pipe(gulp.dest('build/css/'))

       .pipe(browserSync.stream());

});

gulp.task('clearBuild', function() {

	return del(['build/*'])

});

gulp.task('watch', function() {

	browserSync.init(config);

	gulp.watch('src/scss/**/*.scss', gulp.series('css'));

	gulp.watch('src/scss/*.scss', gulp.series('css'));

  	gulp.watch('src/js/*.js', gulp.series(jsBuild));

  	gulp.watch('src/*.html',  gulp.parallel(htmlBuild, imgBuild)).on('change', browserSync.reload);

});

gulp.task('build', 

	gulp.series(
		'clearBuild',
		gulp.parallel(htmlBuild, jsBuild, imgBuild, 'css')
	)

);

gulp.task('default', gulp.series('build', 'watch'));