var gulp=require('gulp'),
watch=require('gulp-watch'),
postcss=require('gulp-postcss'),
autoprefixer=require('autoprefixer'),
cssvars=require('postcss-simple-vars'),
nested=require('postcss-nested'),
cssimport=require('postcss-import');
gulp.task('default',function(){
	console.log('Congratulation For Your First Step to Learn GULP');
	
});


gulp.task('html',function(){
	
	console.log('I Think you have made some changes with HTML File.Thats A-Ok');
	
});

gulp.task('css',function(){
	
	gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssimport,cssvars,nested,autoprefixer]))
	    .pipe(gulp.dest('./app/temp/styles'));
	
});

gulp.task('watch',function(){
	
	watch('./app/index.html',function(){
		
		gulp.start('html');
		
	});
	
	watch('./app/assets/styles/**/*.css',function(){
		
		gulp.start('css');
	});
});