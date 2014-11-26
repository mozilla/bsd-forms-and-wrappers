module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
  });

  grunt.initConfig({
    bake: {
      server: {
        options: {
          content: (function(){
            var obj = require('./0-donation-forms/locales/en_US/bsd-form-donation.json');
            obj.locale = "US";
            obj.currency = "USD";
            obj['return-url'] = "https://sendto.mozilla.org/page/s/EOYFR2014-donor";
            return obj;
          })()
        },
        files: {
          // add whichever files you're working on here
          'compiled/en_US/EOY-content-page-bitcoin-donate.html': '0-content-page/EOYFR2014-Bitcoin-Donate/template.html',
          'compiled/en_US/EOY-donation-form-single.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/en_US/EOY-donation-form-sequential.html': '0-donation-forms/EOY-donation-form-sequential/template.html',
          'compiled/en_US/EOY-signup-form-post-donation.html': '0-email-signup-form/EOYFR2014-Donor/template.html'
        }
      },
      'de': {
        options: {
          content: (function(){
            var obj = require('./0-donation-forms/locales/de/bsd-form-donation.json');
            obj.locale = "DE";
            obj.currency = "EUR";
            obj['return-url'] = "https://sendto.mozilla.org/page/s/EOYFR2014-donor-de";
            return obj;
          })()
        },
        files: {
          // add whichever files you're working on here
          'compiled/de/EOY-donation-form-single.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/de/EOY-donation-form-sequential.html': '0-donation-forms/EOY-donation-form-sequential/template.html',
          'compiled/de/EOY-signup-form-post-donation.html': '0-email-signup-form/EOYFR2014-Donor/template.html'
        }
      },
      'fr': {
        options: {
          content: (function(){
            var obj = require('./0-donation-forms/locales/fr/bsd-form-donation.json');
            obj.locale = "FR";
            obj.currency = "EUR";
            obj['return-url'] = "https://sendto.mozilla.org/page/s/EOYFR2014-donor-fr";
            return obj;
          })()
        },
        files: {
          // add whichever files you're working on here
          'compiled/fr/EOY-donation-form-single.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/fr/EOY-donation-form-sequential.html': '0-donation-forms/EOY-donation-form-sequential/template.html',
          'compiled/fr/EOY-signup-form-post-donation.html': '0-email-signup-form/EOYFR2014-Donor/template.html'
        }
      },
      'pt_BR': {
        options: {
          content: (function(){
            var obj = require('./0-donation-forms/locales/pt_BR/bsd-form-donation.json');
            obj.locale = "pt_BR";
            obj.currency = "BRL";
            obj['return-url'] = "https://sendto.mozilla.org/page/s/EOYFR2014-donor-pt-BR";
            return obj;
          })()
        },
        files: {
          // add whichever files you're working on here
          'compiled/pt_BR/EOY-donation-form-single.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/pt_BR/EOY-donation-form-sequential.html': '0-donation-forms/EOY-donation-form-sequential/template.html',
          'compiled/pt_BR/EOY-signup-form-post-donation.html': '0-email-signup-form/EOYFR2014-Donor/template.html'
        }
      },
      'id': {
        options: {
          content: (function(){
            var obj = require('./0-donation-forms/locales/id/bsd-form-donation.json');
            obj.locale = "id_ID";
            obj.currency = "ILS";
            obj['return-url'] = "https://sendto.mozilla.org/page/s/EOYFR2014-donor-id";
            return obj;
          })()
        },
        files: {
          // add whichever files you're working on here
          'compiled/id/EOY-donation-form-single.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/id/EOY-donation-form-sequential.html': '0-donation-forms/EOY-donation-form-sequential/template.html',
          'compiled/id/EOY-signup-form-post-donation.html': '0-email-signup-form/EOYFR2014-Donor/template.html'
        }
      },
      'es_MX': {
        options: {
          content: (function(){
            var obj = require('./0-donation-forms/locales/es_MX/bsd-form-donation.json');
            obj.locale = "es_MX";
            obj.currency = "MXN";
            obj['return-url'] = "https://sendto.mozilla.org/page/s/EOYFR2014-donor-es-MX";
            return obj;
          })()
        },
        files: {
          // add whichever files you're working on here
          'compiled/es_MX/EOY-donation-form-single.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/es_MX/EOY-donation-form-sequential.html': '0-donation-forms/EOY-donation-form-sequential/template.html',
          'compiled/es_MX/EOY-signup-form-post-donation.html': '0-email-signup-form/EOYFR2014-Donor/template.html'
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
