The HTML UI used by Contested Space is a static single page web app written using [Backbone](http://backbonejs.org/) and the [Coherent UI](http://coherent-labs.com/overview/) framework for Unity. The UI is generated using a build tool called [Gulp](http://gulpjs.com/). Gulp is a good fit into the Unity workflow because it watches your source files and rebuilds the app as they change. This system can be used for any single page web app. Here's how I've set up Gulp to build the Contested Space UI.

Gulp is a Node app with a command line interface. It can be used to automate many different tasks for your project but in this case I'm using it as a build system. Tasks are configured using a Javascript file named gulpfile.js. You can read the Gulp [getting started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) guide for more information.

### HTML

Lets look at the HTML used to load the UI to get some idea of what we're trying to accomplish.

	<!DOCTYPE>
	<html>
		<head>
			<title>Contested UI</title>
			<link href="styles.css" rel="stylesheet" type="text/css">
			<script src="scripts.js"></script>
		</head>
		<body>
			<img id="loading" src="images/loading.png">
		</body>
	</html>

The HTML just links one stylesheet and one Javascript file. The body contains a loading placeholder that is displayed until Backbone is ready. Gulp is responsible for generating the styles.css and scripts.js files and copying all dependencies into the Unity project.

### Default Task

Here's the default task for my build system. First it cleans the destination directory, then images and fonts are copied over, styles and scripts are generated, and finally the index HTML file is copied over.

	gulp.task('default', ['clean'], function() {
		gulp.start('images', 'fonts', 'styles', 'browserify', 'index')
	})

### Images and Fonts

	var images = 'src/images/**'
	var fonts = 'src/fonts/**'
	var dest = '../unity/Assets/WebPlayerTemplates/contested'

	gulp.task('images', function() {
	    return gulp.src(images)
	        .pipe(gulp.dest(dest +'/images'))
	})

	gulp.task('fonts', function() {
	    return gulp.src(fonts)
	        .pipe(gulp.dest(dest +'/fonts'))
	})

The images and fonts tasks copy 