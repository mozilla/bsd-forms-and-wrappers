module.exports = function(grunt) {

  var generate_bake_files_content = function(locale, paypal_locale, show_email_signup, currency, currency_display, return_url, arr_amounts, currency_symbol) {
    var obj = {};
    var bake_content = require("./0-donation-forms/locales/" + locale + "/bsd-form-donation.json");
    bake_content = grunt.util._.merge(bake_content, require('./0-content-page/EOYFR2014-Button-Donation/locales/USD/locale.json'));

    bake_content["currency"] = currency;
    bake_content["currency_symbol"] = currency;
    bake_content["currency_display"] = currency_display;
    bake_content["locale"] = paypal_locale;
    bake_content["return_url"] = return_url;
    bake_content["show_email_signup"] = show_email_signup;
    bake_content = JSON.parse(JSON.stringify(bake_content).replace(/{{ currency_symbol }}/, function(m, k) {
      return currency_symbol
    }));
    if(arr_amounts) {
      bake_content["amount_idx_1"] = arr_amounts[0];
      bake_content["amount_idx_2"] = arr_amounts[1];
      bake_content["amount_idx_3"] = arr_amounts[2];
      bake_content["amount_idx_4"] = arr_amounts[3];
    }
    obj = {
      options: {
        content: bake_content
      },
      files: {}
    };
    obj.files['compiled/' + locale + '/EOY-content-page-bitcoin-donate.html'] = '0-content-page/EOYFR2014-Bitcoin-Donate/template.html';
    obj.files['compiled/' + locale + '/EOY-donation-form-single.html'] = '0-donation-forms/EOY-donation-form-single/template.html';
    obj.files['compiled/' + locale + '/EOY-donation-form-single-above.html'] = '0-donation-forms/EOY-donation-form-single/above-form-content.html';
    obj.files['compiled/' + locale + '/EOY-donation-form-single-below.html'] = '0-donation-forms/EOY-donation-form-single/below-form-content.html';
    // sequential
    obj.files['compiled/' + locale + '/EOY-donation-form-sequential.html'] = '0-donation-forms/EOY-donation-form-sequential/template.html';
    obj.files['compiled/' + locale + '/EOY-donation-form-sequential-above.html'] = '0-donation-forms/EOY-donation-form-sequential/above-form-content.html';
    obj.files['compiled/' + locale + '/EOY-donation-form-sequential-below.html'] = '0-donation-forms/EOY-donation-form-sequential/below-form-content.html';
    // post donation
    obj.files['compiled/' + locale + '/EOY-signup-form-post-donation.html'] = '0-email-signup-form/EOYFR2014-Donor/template.html';
    obj.files['compiled/' + locale + '/EOY-signup-form-post-donation-above.html'] = '0-email-signup-form/EOYFR2014-Donor/above-form-content.html';
    obj.files['compiled/' + locale + '/EOY-signup-form-post-donation-below.html'] = '0-email-signup-form/EOYFR2014-Donor/below-form-content.html';
    // buttons
    obj.files['compiled/' + locale + '/simple-paypal/EOY-simple-paypal.html'] = '0-content-page/EOYFR2014-Button-Donation/template.html';
    obj.files['compiled/' + locale + '/simple-paypal/EOY-simple-paypal-content.html'] = '0-content-page/EOYFR2014-Button-Donation/page-content.html';

    return obj;
  };

  var generatePayPalPage = function(currency_code, min_amount, currency_symbol, paypal_locale, locale, currency_dup) {
    var path_code = currency_dup ? currency_dup : currency_code;
    var locale_content;
    if(locale) {
      locale_content = require("./0-content-page/EOYFR2014-PayPal-Donate/locales/" + currency_code + "/locale-" + locale + ".json");
    } else {
      locale_content = require("./0-content-page/EOYFR2014-PayPal-Donate/locales/USD/locale.json");
    }
    locale_content["currency_code"] = currency_code;
    locale_content["min_amount"] = min_amount;
    locale_content["currency_symbol"] = currency_symbol;
    locale_content["locale"] = paypal_locale;

    locale_content = JSON.parse(JSON.stringify(locale_content).replace(/{{ min_amount }}/, function(m, k) {
      return min_amount
    }));
    locale_content = JSON.parse(JSON.stringify(locale_content).replace(/{{ currency_symbol }}/, function(m, k) {
      return currency_symbol
    }));

    var bake_content = {
      options: {
        content: locale_content
      },
      files: {}
    };
    bake_content.files["compiled/paypal/" + path_code + "/EOYFR2014-PayPal-Donate.html"] = "0-content-page/EOYFR2014-PayPal-Donate/template.html";
    bake_content.files["compiled/paypal/" + path_code + "/EOYFR2014-PayPal-Donate-content.html"] = "0-content-page/EOYFR2014-PayPal-Donate/page-content.html";
    return bake_content;
  };

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {});

  grunt.initConfig({
    bake: {
      'en_US': generate_bake_files_content(
        "en_US",
        "US",
        true,
        "USD",
        "",
        "https://sendto.mozilla.org/page/s/EOYFR2014-donor",
        [15, 10, 5, 3],
        "$"
      ),
      'de': generate_bake_files_content(
        "de",
        "DE",
        false,
        "USD",
        "USD",
        "https://sendto.mozilla.org/page/s/EOYFR2014-donor-de"
      ),
      'fr': generate_bake_files_content(
        "fr",
        "FR",
        false,
        "USD",
        "USD",
        "https://sendto.mozilla.org/page/s/EOYFR2014-donor-fr"
      ),
      'pt_BR': generate_bake_files_content(
        "pt_BR",
        "pt_BR",
        false,
        "USD",
        "USD",
        "https://sendto.mozilla.org/page/s/EOYFR2014-donor-pt-BR"
      ),
      'id': generate_bake_files_content(
        "id",
        "id_ID",
        false,
        "USD",
        "USD",
        "https://sendto.mozilla.org/page/s/EOYFR2014-donor-id"
      ),
      'es': generate_bake_files_content(
        "es",
        "ES",
        false,
        "USD",
        "USD",
        "https://sendto.mozilla.org/page/s/EOYFR2014-donor-es"
      ),
      // PayPal currencies
      'AUD': generatePayPalPage('AUD', 2, '$', 'US'),
      'BRL': generatePayPalPage('BRL', 5, 'R$', 'pt_BR', 'pt_BR'),
      'CAD': generatePayPalPage('CAD', 2, '$', 'US'),
      'CHF': generatePayPalPage('CHF', 2, 'CHF', 'DE', 'de'),
      // PayPal locale code is wrong here
      'CZK': generatePayPalPage('CZK', 45, 'Kč', 'CZ', 'cs'),
      'DKK': generatePayPalPage('DKK', 12, 'kr', 'da_DK', 'da'),
      'EUR-DE': generatePayPalPage('EUR', 2, '€', 'DE', 'de', 'EUR-DE'),
      'EUR-FR': generatePayPalPage('EUR', 2, '€', 'FR', 'fr', 'EUR-FR'),
      'GBP': generatePayPalPage('GBP', 1, '£', 'US'),
      'HKD': generatePayPalPage('HKD', 15, '$', 'US'),
      // PayPal locale code is wrong here
      'HUF': generatePayPalPage('HUF', 490, 'Ft', 'HU', 'hu'),
      'ILS': generatePayPalPage('ILS', 8, '₪', 'he_IL', 'he'),
      'JPY': generatePayPalPage('JPY', 240, '¥', 'ja_JP', 'ja'),
      'MXN': generatePayPalPage('MXN', 30, '$', 'ES', 'es'),
      'NOK': generatePayPalPage('NOK', 15, 'kr', 'no_NO', 'no'),
      'NZD': generatePayPalPage('NZD', 3, '$', 'US'),
      // PayPal locale code is wrong here
      'PHP': generatePayPalPage('PHP', 90, 'P', 'PH', 'tl'),
      'PLN': generatePayPalPage('PLN', 7, 'zł', 'PL', 'pl'),
      'RUB': generatePayPalPage('RUB', 100, 'руб', 'RU', 'ru'),
      'SEK': generatePayPalPage('SEK', 15, 'kr', 'sv_SE', 'sv'),
      'THB': generatePayPalPage('THB', 70, '฿', 'th_TH', 'th'),
      'TWD': generatePayPalPage('TWD', 62, 'NT$', 'zh_TW', 'zh_TW'),
      'USD': generatePayPalPage('USD', 2, '$', 'US')
    },
    watch: {
      server: {
        files: [
          '0-*/**/*.{html,json}',
          'Hive*/**/*.{html,json}',
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
