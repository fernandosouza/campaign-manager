/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Dashboard.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Dashboard.
 * @public
 */

goog.module('Dashboard.incrementaldom');

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
      'class', 'campaign-manager-dashboard row');
    ie_open('div', null, null,
        'class', 'col-md-4 campaign-manager-card-wrapper');
      var param15 = function() {
        itext((goog.asserts.assert((opt_data.campaigns.length) != null), opt_data.campaigns.length));
        itext(' Active Campaigns');
      };
      $templateAlias1({children: param15, key: 'card0'}, null, opt_ijData);
    ie_close('div');
    ie_open('div', null, null,
        'class', 'col-md-4 campaign-manager-card-wrapper');
      var param21 = function() {
        ie_open('div', null, null,
            'class', 'col-md-6');
          itext((goog.asserts.assert((opt_data.totalInfluencedWins) != null), opt_data.totalInfluencedWins));
          itext('$ Influenced wins');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'col-md-6');
          itext((goog.asserts.assert((opt_data.totalBudget) != null), opt_data.totalBudget));
          itext('$ Total assigned budget');
        ie_close('div');
      };
      $templateAlias1({children: param21, key: 'card1'}, null, opt_ijData);
    ie_close('div');
    ie_open('div', null, null,
        'class', 'col-md-4 campaign-manager-card-wrapper');
      var param30 = function() {
        ie_open('div', null, null,
            'class', 'col-md-6');
          itext((goog.asserts.assert((opt_data.totalLeadsCount) != null), opt_data.totalLeadsCount));
          itext(' Total leads');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'col-md-6');
          itext((goog.asserts.assert((opt_data.totalInfluencedCustomers) != null), opt_data.totalInfluencedCustomers));
          itext(' Influenced customers');
        ie_close('div');
      };
      $templateAlias1({children: param30, key: 'card2'}, null, opt_ijData);
    ie_close('div');
    ie_open('div', null, null,
        'class', 'col-md-4 campaign-manager-card-wrapper');
      var param39 = function() {
      };
      $templateAlias1({children: param39, key: 'card3'}, null, opt_ijData);
    ie_close('div');
    ie_open('div', null, null,
        'class', 'col-md-4 campaign-manager-card-wrapper');
      var param43 = function() {
      };
      $templateAlias1({children: param43, key: 'card4'}, null, opt_ijData);
    ie_close('div');
    ie_open('div', null, null,
        'class', 'col-md-4 campaign-manager-card-wrapper');
      var param47 = function() {
      };
      $templateAlias1({children: param47, key: 'card5'}, null, opt_ijData);
    ie_close('div');
    ie_open('div', null, null,
        'class', 'col-md-4 campaign-manager-card-wrapper');
      var param51 = function() {
      };
      $templateAlias1({children: param51, key: 'card6'}, null, opt_ijData);
    ie_close('div');
    ie_open('div', null, null,
        'class', 'col-md-4 campaign-manager-card-wrapper');
      var param55 = function() {
      };
      $templateAlias1({children: param55, key: 'card7'}, null, opt_ijData);
    ie_close('div');
    ie_open('div', null, null,
        'class', 'col-md-4 campaign-manager-card-wrapper');
      var param59 = function() {
      };
      $templateAlias1({children: param59, key: 'card8'}, null, opt_ijData);
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Dashboard.render';
}

exports.render.params = ["campaigns","totalInfluencedWins","totalInfluencedCustomers","totalLeadsCount","totalBudget"];
exports.render.types = {"campaigns":"any","totalInfluencedWins":"any","totalInfluencedCustomers":"any","totalLeadsCount":"any","totalBudget":"any"};
templates = exports;
return exports;

});

class Dashboard extends Component {}
Soy.register(Dashboard, templates);
export default templates;
export { Dashboard, templates };
/* jshint ignore:end */
