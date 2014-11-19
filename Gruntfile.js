module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
  });

  grunt.initConfig({
    bake: {
      server: {
        options: {
          content: '0-donation-forms/locales/en_US/bsd-form-donation.json'
        },
        files: {
          // add whichever files you're working on here
          'compiled/EOY-content-page-bitcoin-donate.html': '0-content-page/EOYFR2014-Bitcoin-Donate/template.html',
          'compiled/EOY-donation-form-single.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/EOY-donation-form-sequential.html': '0-donation-forms/EOY-donation-form-sequential/template.html'
        }
      },
      'de': {
        options: {
          content: '0-donation-forms/locales/de/bsd-form-donation.json'
        },
        files: {
          // add whichever files you're working on here
          'compiled/EOY-donation-form-single-de.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/EOY-donation-form-sequential-de.html': '0-donation-forms/EOY-donation-form-sequential/template.html'
        }
      },
      'fr': {
        options: {
          content: '0-donation-forms/locales/fr/bsd-form-donation.json'
        },
        files: {
          // add whichever files you're working on here
          'compiled/EOY-donation-form-single-fr.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/EOY-donation-form-sequential-fr.html': '0-donation-forms/EOY-donation-form-sequential/template.html'
        }
      },
      'pt_BR': {
        options: {
          content: '0-donation-forms/locales/pt_BR/bsd-form-donation.json'
        },
        files: {
          // add whichever files you're working on here
          'compiled/EOY-donation-form-single-pt-BR.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/EOY-donation-form-sequential-pt-BR.html': '0-donation-forms/EOY-donation-form-sequential/template.html'
        }
      },
      'id': {
        options: {
          content: '0-donation-forms/locales/id/bsd-form-donation.json'
        },
        files: {
          // add whichever files you're working on here
          'compiled/EOY-donation-form-single-id.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/EOY-donation-form-sequential-id.html': '0-donation-forms/EOY-donation-form-sequential/template.html'
        }
      },
      'es_MX': {
        options: {
          content: '0-donation-forms/locales/es_MX/bsd-form-donation.json'
        },
        files: {
          // add whichever files you're working on here
          'compiled/EOY-donation-form-single-es-MX.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/EOY-donation-form-sequential-es-MX.html': '0-donation-forms/EOY-donation-form-sequential/template.html'
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
          open: 'http://localhost:9007/compiled/'
        }
      }
    }
  });

  grunt.registerTask('dev', [
    'bake:server',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('l10n', [
    'bake:server',
    'bake:de',
    'bake:fr',
    'bake:pt_BR',
    'bake:id',
    'bake:es_MX'
  ]);
};
