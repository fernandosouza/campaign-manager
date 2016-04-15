/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from TableCard.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TableCard.
 * @public
 */

goog.module('TableCard.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias1 = Soy.getTemplate('Card.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'campaign-manager-table-card');
    var param66 = function() {
      ie_open('div');
        itext((goog.asserts.assert((opt_data.title) != null), opt_data.title));
      ie_close('div');
      ie_open('table', null, null,
          'class', 'table');
        ie_open('thead');
          ie_open('tr');
            var headerList73 = opt_data.headers;
            var headerListLen73 = headerList73.length;
            for (var headerIndex73 = 0; headerIndex73 < headerListLen73; headerIndex73++) {
              var headerData73 = headerList73[headerIndex73];
              ie_open('th', null, null,
                  'class', 'light-gray');
                itext((goog.asserts.assert((headerData73) != null), headerData73));
              ie_close('th');
            }
          ie_close('tr');
        ie_close('thead');
        ie_open('tbody');
          var rowList83 = opt_data.data;
          var rowListLen83 = rowList83.length;
          for (var rowIndex83 = 0; rowIndex83 < rowListLen83; rowIndex83++) {
            var rowData83 = rowList83[rowIndex83];
            ie_open('tr');
              var cellList80 = rowData83;
              var cellListLen80 = cellList80.length;
              for (var cellIndex80 = 0; cellIndex80 < cellListLen80; cellIndex80++) {
                var cellData80 = cellList80[cellIndex80];
                ie_open('td');
                  itext((goog.asserts.assert((cellData80) != null), cellData80));
                ie_close('td');
              }
            ie_close('tr');
          }
        ie_close('tbody');
      ie_close('table');
    };
    $templateAlias1({children: param66}, null, opt_ijData);
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'TableCard.render';
}

exports.render.params = ["headers","data","title"];
exports.render.types = {"headers":"any","data":"any","title":"any"};
templates = exports;
return exports;

});

class TableCard extends Component {}
Soy.register(TableCard, templates);
export default templates;
export { TableCard, templates };
/* jshint ignore:end */