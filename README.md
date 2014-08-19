# angular-capitalize

[![Build Status](https://travis-ci.org/egilkh/angular-capitalize.svg)](https://travis-ci.org/egilkh/angular-capitalize)
[![Dependency Status](https://david-dm.org/egilkh/angular-capitalize.svg)](https://david-dm.org/egilkh/angular-capitalize)
[![devDependency Status](https://david-dm.org/egilkh/angular-capitalize/dev-status.svg)](https://david-dm.org/egilkh/angular-capitalize#info=devDependencies)

AngularJS filter for capitalization of sentences or words.

## Install

Use `bower` to install it:

`bower install angular-capitalize`

## Usage

Add a dependency on `ehFilters` to your Angular module:

`angular.module('awesome', ['ehFilters']);`

Include `capitalize.js`:

`<script src="capitalize.js"></script>`

Filter things:

`{{ 'Some string' | capitalize }}` or `{{ 'random string' | capitalize:'firstChar' }}` or any other method.
