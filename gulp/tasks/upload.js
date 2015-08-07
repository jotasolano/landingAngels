var gulp         = require('gulp');
var sftp = require('gulp-sftp');

gulp.task('deploy', function () {
    return gulp.src('build/index.html')
        .pipe(sftp({
            host: 'ftp.angelsecolodge.com',
            user: 'adminftp@angelsecolodge.com',
            pass: 'c%qKvDK#1zkh'
        }))
});