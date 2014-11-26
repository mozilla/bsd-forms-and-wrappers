var generate_bake_content = function(locale, paypal_locale, show_email_signup, currency, currency_display, return_url ) {
  var bake_content = require("./0-donation-forms/locales/" + locale + "/bsd-form-donation.json");

  bake_content["currency"] = currency;
  bake_content["currency_display"] = currency_display;
  bake_content["locale"] = paypal_locale;
  bake_content["return_url"] = return_url;
  bake_content["show_email_signup"] = show_email_signup;

  return bake_content;
};

module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
  });

  grunt.initConfig({
    bake: {
      'en_US': {
        options: {
          content: generate_bake_content(
            "en_US",
            "US",
            true,
            "USD",
            "",
            "https://sendto.mozilla.org/page/s/EOYFR2014-donor"
          )
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
          content: generate_bake_content(
            "de",
            "DE",
            false,
            "USD",
            "USD",
            "https://sendto.mozilla.org/page/s/EOYFR2014-donor-de"
          )
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
          content: generate_bake_content(
            "fr",
            "FR",
            false,
            "USD",
            "USD",
            "https://sendto.mozilla.org/page/s/EOYFR2014-donor-fr"
          )
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
          content: generate_bake_content(
            "pt_BR",
            "pt_BR",
            false,
            "USD",
            "USD",
            "https://sendto.mozilla.org/page/s/EOYFR2014-donor-pt-BR"
          )
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
          content: generate_bake_content(
            "id",
            "id_ID",
            false,
            "USD",
            "USD",
            "https://sendto.mozilla.org/page/s/EOYFR2014-donor-id"
          )
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
          content: generate_bake_content(
            "es_MX",
            "es_MX",
            false,
            "USD",
            "USD",
            "https://sendto.mozilla.org/page/s/EOYFR2014-donor-es-MX"
          )
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
    'bake',
    'connect:livereload',
    'watch'
  ]);
};
