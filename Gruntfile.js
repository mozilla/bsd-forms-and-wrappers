module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
  });

  grunt.initConfig({
    bake: {
      server: {
        options: {
          content: '0-donation-forms/EOY-donation-form-single/en-US.json'
        },
        files: {
          // add whichever files you're working on here
          'compiled/EOY-content-page-bitcoin-donate.html': '0-content-page/EOYFR2014-Bitcoin-Donate/template.html',
          'compiled/EOY-donation-form-single.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/EOY-donation-form-sequential.html': '0-donation-forms/EOY-donation-form-sequential/template.html'
        }
      },
      l10n: {
        options: {
          content: '0-content-page/EOYFR2014-PayPal-Donate/locale-strings.json',
          section: 'es-MX'
        },
        files: {
          'compiled/EOYFR2014-PayPal-Donate_es-MX.html': '0-content-page/EOYFR2014-PayPal-Donate/template.html'
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
          'compiled/*.html'
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
          open: "http://localhost:9007/compiled/"
        }
      }
    }
  });


  grunt.registerTask('dev', [
    'bake:server',
    'connect:livereload',
    'watch'
  ]);
};
