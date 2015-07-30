module.exports = function(grunt) {

  // Configure tasks
  grunt.initConfig({
    postcss: {
      options: {
        map: true,
        processors: [
          // autoprefix for browsers selected by global usage statistics
          require('autoprefixer-core')({browsers: '> 5%'}),
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-postcss');

  // Register tasks
  grunt.registerTask('default', ['postcss:dist']);

};
