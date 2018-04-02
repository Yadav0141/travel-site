var gulp=require('gulp'),
watch=require('gulp-watch'),
browserSync=require('browser-sync').create();
gulp.task('html',function(){
	
	browserSync.reload();
	
});


gulp.task('watch',function(){
	
	browserSync.init({
		
		server:{
			baseDir:"app"
		}
	});
	watch('./app/index.html',function(){
		
		gulp.start('html');
		
	});
	
	watch('./app/assets/styles/**/*.css',function(){
		
		gulp.start('cssinject');
	});
});

gulp.task('cssinject',['css'],function(){

	gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());

});