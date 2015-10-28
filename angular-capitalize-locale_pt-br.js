'use strict';

/**
 * AngularJS capitalize filter for sentences or words.
 *
 * Author: dpacosta <danieldepaulaa@gmail.com>
 * LICENSE: MIT
 *
 */

/* globals angular: true */

angular.module('ehFilters')
// locale pt-br
.factory('capitalizeLocale', [function () {
  return {
    small: '(a|de|em|por|per|o|a|os|as|um|uma|uns|umas|ao|à|aos|às|do|da|dos|das|' +
           'dum|duma|duns|dumas|no|na|nos|nas|num|numa|nuns|numas|pelo|pelos|pela|pelas|a|' +
           'ante|após|até|com|de|em|para|per|por|sem|sob|trás|e|nem|que|mas|que|ou|ora|nem|' +
           'já|logo|que|se|pois|daí|v[.]?|via|vs[.]?)',
    punct: '([!\'#$%&\'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)',
    parts: function (parts) {
      return parts.join('').replace(/ V(s?)\. /ig, ' v$1. ')
        .replace(/(['Õ])S\b/ig, '$1s')
        .replace(/õE/,'õe')
        .replace(/ãO/,'ão')
        .replace(/ãE/,'ãe')
        .replace(/\b(AT&T|Q&A)\b/ig, function(all){
          return all.toUpperCase();
        });
    },
  };
}]);
