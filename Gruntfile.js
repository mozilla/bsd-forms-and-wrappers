module.exports = function(grunt) {

  var generate_bake_files_content = function(locale, paypal_locale, show_email_signup, currency, currency_display, return_url, arr_amounts, currency_symbol, show_other_ways_to_give) {
    var obj = {};
    var bake_content = require("./0-donation-forms/locales/" + locale + "/bsd-form-donation.json");
    bake_content = grunt.util._.merge(bake_content, require('./0-content-page/EOYFR2014-Button-Donation/locales/USD/locale.json'));

    bake_content["currency"] = currency;
    bake_content["currency_symbol"] = currency;
    bake_content["currency_display"] = currency_display;
    bake_content["locale"] = paypal_locale;
    bake_content["return_url"] = return_url;
    bake_content["show_email_signup"] = show_email_signup;
    bake_content["show_other_ways_to_give"] = show_other_ways_to_give;
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
    if (locale === "en-US") {
      obj.files['compiled/tree/page/content/give-bitcoin/index.html'] = '0-content-page/EOYFR2014-Bitcoin-Donate/template.html';
      obj.files['compiled/tree/page/content/givenow-paypal-simple/index.html'] = '0-content-page/EOYFR2014-Button-Donation/template.html';
      obj.files['compiled/tree/page/s/EOYFR2014-donor/index.html'] = '0-email-signup-form/EOYFR2014-Donor/template.html';
      obj.files['compiled/tree/page/contribute/givenow-seq/index.html'] = '0-donation-forms/EOY-donation-form-sequential/template.html';
    } else {
      obj.files['compiled/tree/page/contribute/givenow-seq-' + locale + '/index.html'] = '0-donation-forms/EOY-donation-form-sequential/template.html';
      obj.files['compiled/tree/page/s/EOYFR2014-donor-' + locale + '/index.html'] = '0-email-signup-form/EOYFR2014-Donor/template.html';
    }

    obj.files['compiled/src/' + locale + '/simple-paypal/EOY-simple-paypal-content.html'] = '0-content-page/EOYFR2014-Button-Donation/page-content.html';
    obj.files['compiled/src/' + locale + '/EOY-signup-form-post-donation-above.html'] = '0-email-signup-form/EOYFR2014-Donor/above-form-content.html';
    obj.files['compiled/src/' + locale + '/EOY-signup-form-post-donation-below.html'] = '0-email-signup-form/EOYFR2014-Donor/below-form-content.html';
    obj.files['compiled/src/' + locale + '/EOY-donation-form-sequential-above.html'] = '0-donation-forms/EOY-donation-form-sequential/above-form-content.html';
    obj.files['compiled/src/' + locale + '/EOY-donation-form-sequential-below.html'] = '0-donation-forms/EOY-donation-form-sequential/below-form-content.html';

    return obj;
  };

  var generatePayPalCurrencyPage = function(currency_code, min_amount, currency_symbol, paypal_locale, locale, currency_dup) {
    var path_code = currency_dup ? currency_dup : currency_code;
    path_code = path_code.toLowerCase();
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
    bake_content.files["compiled/tree/page/content/paypal-donate-" + path_code + "/index.html"] = "0-content-page/EOYFR2014-PayPal-Donate/template.html";
    bake_content.files["compiled/src/paypal/" + path_code + "/EOYFR2014-PayPal-Donate-content.html"] = "0-content-page/EOYFR2014-PayPal-Donate/page-content.html";
    return bake_content;
  };

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {});

  grunt.initConfig({
    bake: {
      'en_US': generate_bake_files_content(
        "en-US",
        "US",
        true,
        "USD",
        "",
        "https://sendto.mozilla.org/page/s/EOYFR2014-donor",
        [15, 10, 5, 3],
        "$",
        true
      ),
      'de': generate_bake_files_content(
        "de",
        "DE",
        false,
        "USD",
        "USD",
        "https://sendto.mozilla.org/page/s/EOYFR2014-donor-de",
        false
      ),
      'fr': generate_bake_files_content(
        "fr",
        "FR",
        false,
        "USD",
        "USD",
        "https://sendto.mozilla.org/page/s/EOYFR2014-donor-fr",
        false
      ),
      'pt_BR': generate_bake_files_content(
        "pt-BR",
        "pt_BR",
        false,
        "USD",
        "USD",
        "https://sendto.mozilla.org/page/s/EOYFR2014-donor-pt-BR",
        false
      ),
      'id': generate_bake_files_content(
        "id",
        "id_ID",
        false,
        "USD",
        "USD",
        "https://sendto.mozilla.org/page/s/EOYFR2014-donor-id",
        false
      ),
      'es': generate_bake_files_content(
        "es",
        "ES",
        false,
        "USD",
        "USD",
        "https://sendto.mozilla.org/page/s/EOYFR2014-donor-es",
        false
      ),
      // PayPal currencies
      'AUD': generatePayPalCurrencyPage('AUD', 2, '$', 'US'),
      'BRL': generatePayPalCurrencyPage('BRL', 5, 'R$', 'pt_BR', 'pt_BR'),
      'CAD': generatePayPalCurrencyPage('CAD', 2, '$', 'US'),
      'CHF': generatePayPalCurrencyPage('CHF', 2, 'CHF', 'DE', 'de'),
      // PayPal locale code is wrong here
      'CZK': generatePayPalCurrencyPage('CZK', 45, 'Kč', 'CZ', 'cs'),
      'DKK': generatePayPalCurrencyPage('DKK', 12, 'kr', 'da_DK', 'da'),
      'EUR-DE': generatePayPalCurrencyPage('EUR', 2, '€', 'DE', 'de', 'EUR-DE'),
      'EUR-FR': generatePayPalCurrencyPage('EUR', 2, '€', 'FR', 'fr', 'EUR-FR'),
      'GBP': generatePayPalCurrencyPage('GBP', 1, '£', 'US'),
      'HKD': generatePayPalCurrencyPage('HKD', 15, '$', 'US'),
      // PayPal locale code is wrong here
      'HUF': generatePayPalCurrencyPage('HUF', 490, 'Ft', 'HU', 'hu'),
      'ILS': generatePayPalCurrencyPage('ILS', 8, '₪', 'he_IL', 'he'),
      'JPY': generatePayPalCurrencyPage('JPY', 240, '¥', 'ja_JP', 'ja'),
      'MXN': generatePayPalCurrencyPage('MXN', 30, '$', 'ES', 'es'),
      'NOK': generatePayPalCurrencyPage('NOK', 15, 'kr', 'no_NO', 'no'),
      'NZD': generatePayPalCurrencyPage('NZD', 3, '$', 'US'),
      // PayPal locale code is wrong here
      'PHP': generatePayPalCurrencyPage('PHP', 90, 'P', 'PH', 'tl'),
      'PLN': generatePayPalCurrencyPage('PLN', 7, 'zł', 'PL', 'pl'),
      'RUB': generatePayPalCurrencyPage('RUB', 100, 'руб', 'RU', 'ru'),
      'SEK': generatePayPalCurrencyPage('SEK', 15, 'kr', 'sv_SE', 'sv'),
      'THB': generatePayPalCurrencyPage('THB', 70, '฿', 'th_TH', 'th'),
      'TWD': generatePayPalCurrencyPage('TWD', 62, 'NT$', 'zh_TW', 'zh_TW'),
      'USD': generatePayPalCurrencyPage('USD', 2, '$', 'US')
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
    },
    imagemin: {
      options: {
        optimizationLevel: 7,
        pngquant: false
      },
      primary: {
        files: [{
          expand: true,
          cwd: "./img/",
          src: ["**/*.{png,jpg,gif}"],
          dest: "./img/"
        }]
      }
    },
  });

  grunt.registerTask('dev', [
    'bake',
    'imagemin',
    'connect:livereload',
    'watch'
  ]);
};
