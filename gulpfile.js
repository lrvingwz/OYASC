var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var jsmin = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');

var browserSync = require('browser-sync').create();

gulp.task('buildSass',function () {
	gulp.src('./app/sass/*.scss')
		
		.pipe(sass({outputStyle:'compact'}))
		
		.pipe(gulp.dest('./app/css'))
	
		.pipe(sass({outputStyle:'compressed'}))
		
		.pipe(rename({suffix:'.min'}))
		
		.pipe(gulp.dest('./dist/css'))
		
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('jtSass',function () {
	gulp.watch('./app/sass/*.scss',['buildSass'])
});

gulp.task('server',function () {
	browserSync.init({
		server:{
			baseDir:"./app"
		},
		files:['./app/**/*.html','./app/css/*.css','./app/**/*.js']
	});
});

gulp.task('buildjs',function () {
	gulp.src('./app/js/*.js')
		.pipe(jsmin({
			mangle:true,
			compress:true
		}))
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('./dist/js'))
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./dist/js'))
		
});

//压缩html文件
gulp.task('buildhtml',function(){
	// 匹配所有的html文件，包括子目录下的html文件
		
	var opt = {
	    removeComments: true,//清除HTML注释
	    collapseWhitespace: true,//压缩HTML
	    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input checked />
	    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
//	    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
//	    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
	    minifyJS: true,//压缩页面JS
	    minifyCSS: true//压缩页面CSS
	};

//带参数使用
	gulp.src('./app/**/*.html')
	   .pipe(htmlmin(opt))
	   .pipe(gulp.dest('./dist/html'));
});

gulp.task('default',['buildSass','jtSass','server','buildjs','buildhtml']);

