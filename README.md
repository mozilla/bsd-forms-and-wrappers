BSD Forms and Wrappers
============

This is for tracking code changes made to Blue State Digital forms / wrappers.

[ Note ] most of the work is WIP


## To test an individual form

1. create a file named template.html that uses [bake](https://www.npmjs.org/package/grunt-bake)
to include each piece
2. update `Gruntfile.js`'s grunt:bake task to compile the page you're working on
3. run `grunt dev` and find your file at <http://localhost:9007/compiled>


## To build l10n forms

I kind of started figuring this out with `grunt bake:l10n` and the paypal content
form, but it's not a fully-formed idea yet. Documentation for grunt bake can be
found [here](https://www.npmjs.org/package/grunt-bake)
