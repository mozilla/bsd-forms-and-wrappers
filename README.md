BSD Forms and Wrappers
============

This is for tracking code changes made to Blue State Digital forms / wrappers.

[ Note ] most of the work is WIP


## To test an individual form

1. create a file named template.html that uses [bake](https://www.npmjs.org/package/grunt-bake)
to include each piece
2. update `Gruntfile.js`'s grunt:bake task to compile the page you're working on
3. run `grunt dev` and find your file at <http://localhost:9007/compiled>


## To generate new forms for pasting into BSD

1. Make the desired changes to your local repo.
2. run `grunt dev` and find the file for below and above. Example: compiled/en_US/EOY-donation-form-single-below.html. There is a below and after for each form.
3. Paste that into BSD below or after content inputs.


## To build and update forms in BSD

1. To update BSD forms, navigate to https://sendto.mozilla.org/ctl/Core/AdminHome
2. On the left side of the screen, look under "Quick Links", and click "Manage" for the form you need to update. Single page form and Sequential forms are under "Donation Pages/Forms" for all locales, and the thank you page is under "Signup Forms"
3. Wrappers live under "Your Website" in the top nav, under "Wrappers" under "design & file mgmt"
4. Wrappers are shared between pages so ensure any changes to one are tested on multiple pages.
5. Under each of these you should see the page urls in a list of all available pages, with an edit or clone button. These buttons might be icons with a hover tooltip.
6. Inside one of these form edits or clones, look for "Layout & Wrapper", click it.
7. Should now see a "Above Form Content" or a "Below Form Content"
8. Paste the desired code generated from `grunt dev` in the respective input box.
9. Click "Save and Exit"
