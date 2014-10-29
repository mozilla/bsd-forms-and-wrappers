module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
  });

  grunt.initConfig({
    bake: {
      server: {
        files: {
          // add whichever files you're working on here
          'EOY-donation-form-single/compiled.html': 'EOY-donation-form-single/template.html',
          '0-email-signup-form/EOYFR2014-Donor/compiled.html': '0-email-signup-form/EOYFR2014-Donor/template.html'
        }
      }
    },
    watch: {
      server: {
        files: [
          '**/*.html',
          'Gruntfile.js'
        ],
        tasks: ['bake:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '**/compiled.html'
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
