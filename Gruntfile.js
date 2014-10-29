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
          '0-email-signup-form/EOYFR2014-Donor/compiled.html': '0-email-signup-form/EOYFR2014-Donor/template.html',
          '0-content-page/EOYFR2014-Donor-Social-Media-Share/compiled.html': '0-content-page/EOYFR2014-Donor-Social-Media-Share/template.html'
        }
      },
      l10n: {
        options: {
          content: '0-content-page/EOYFR2014-PayPal-Donate/locale-strings.json',
          section: 'es-MX'
        },
        files: {
          '0-content-page/EOYFR2014-PayPal-Donate/compiled.html': '0-content-page/EOYFR2014-PayPal-Donate/template.html'
        }
      }
    },
    watch: {
      server: {
        files: [
          '**/*.{html,json}',
          'Gruntfile.js'
        ],
        tasks: ['bake']
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
