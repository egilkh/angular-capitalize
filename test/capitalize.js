'use strict';

describe('angular-capitalize', function () {

  var strings = [
    'this is lowercase',
    'THIS IS UPPERCASE',
    'This is RanDom CAse Of Evil',
    'Nothing To Be afraid of?',
    'Q&A With Steve Jobs: \'That\'s What HAPPENS In TechNOlogy\'',
  ];

  var formats = ['first', 'firstChar', 'all', 'title', 'none'];
  var expected = {};

  expected.first = [
    'This is lowercase',
    'THIS IS UPPERCASE',
    'This is RanDom CAse Of Evil',
    'Nothing To Be afraid of?',
    'Q&A With Steve Jobs: \'That\'s What HAPPENS In TechNOlogy\'',
  ];

  expected.firstChar = [
    'This is lowercase',
    'This is uppercase',
    'This is random case of evil',
    'Nothing to be afraid of?',
    'Q&a with steve jobs: \'that\'s what happens in technology\'',
  ];

  expected.all = [
    'This Is Lowercase',
    'This Is Uppercase',
    'This Is Random Case Of Evil',
    'Nothing To Be Afraid Of?',
    'Q&a With Steve Jobs: \'That\'s What Happens In Technology\'',
  ];

  expected.title = [
    'This Is Lowercase',
    'This Is Uppercase',
    'This Is Random Case of Evil',
    'Nothing to Be Afraid Of?',
    'Q&A With Steve Jobs: \'That\'s What Happens in Technology\'',
  ];

  expected.none = [
    'this is lowercase',
    'this is uppercase',
    'this is random case of evil',
    'nothing to be afraid of?',
    'q&a with steve jobs: \'that\'s what happens in technology\'',
  ];

  beforeEach(module('ehFilters'));

  formats.forEach(function (format) {
    describe(format, function () {
      strings.forEach(function (string, index) {
        it('should return according to spec', inject(function (capitalizeFilter) {
          expect(capitalizeFilter(string, format)).toBe(expected[format][index]);
        }));
      });
    });
  });

  it('should not allow unknown formats', inject(function (capitalizeFilter) {
    expect(function () { return capitalizeFilter('', 'randomFilterAwesomeNo') }).toThrow(new Error('Format is unknown.'));
  }));

});
