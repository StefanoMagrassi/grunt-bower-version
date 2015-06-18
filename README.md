# grunt-bower-version

> Grunt plugin to sync bower.json version with package.json version

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bower-version --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bower-version');
```

## The "bower_version" task

### Overview
In your project's Gruntfile, add a section named `bower_version` to the data object passed into `grunt.initConfig()`.<br/>
Configure your task and set an array as value. If the array is empty it searches for a `bower.json` file in the process current working directory, otherwise it searches for the specified file.

```js
grunt.initConfig({
  bower_version: {
    update: []
  }
});
```

### Usage Examples

#### Default
Searches for `bower.json` file in the same Gruntfile directory.

```js
grunt.initConfig({
  bower_version: {
    update: []
  }
});
```

#### Custom file path
Specify a different `bower.json` file path.

```js
grunt.initConfig({
  bower_version: {
    update: ['tmp/bower.json']
  }
});
```

## Release History
 * 2015-06-18 | v0.1.0 | First release
