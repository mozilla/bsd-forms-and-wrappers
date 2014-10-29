module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
  });

  grunt.initConfig({
    bake: {
      server: {
        files: {
          // add whichever files you're working on here
          'EOY-donation-form-single/source.html': 'EOY-donation-form-single/template.html'
        }
      }
    },
    watch: {
      server: {
        files: [
          '**/*.html'
        ],
        tasks: ['bake:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '**/source.html'
        ]
      }
    },
    connect: {
      options: {
        port: 9007,
        livereload: 35728,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true
        }
      }
    }
  });


  grunt.registerTask('dev', [
    'bake',
    'connect:livereload',
    'watch'
  ]);
};
