/*!
 * stPRO <https://github.com/passariello/stPRO>
 *
 * Copyright (c) 2021, Dario Passariello.
 * Licensed under the Apache-2.0 License.
 */

"use strict";

/*jslint browser: true */
/*global window */

/***********************************************************************/
const start = function( debug = false ) {

  // CREATE ROOT STORE
  let stpro = window.stpro = {};

  // SETUP STORES
  stpro.pref = {
    indexedDB: true,
    localStorage: true,
    cookie: true
  };

  stpro.api = {};
  stpro.db = {};
  stpro.store = {};
  stpro.state = {};
  stpro.cache = {};
  stpro.history = {};
  stpro.funcs = {};
  stpro.trigger = {};
  stpro.procedure = {};
  stpro.dispatch = {};

  // FIRST MESSAGE
  if( debug ){
    console.debug( "stPRO by Dario Passariello started" );
    console.debug( "Type stPRO() to see it" );
  }

  // PRINT UUID
  stpro.funcs.uuid = () => {
    return ( ( [1e7] + -1e3 + -4e3 + -8e3 + -1e11 ).replace( /[018]/g, (a) => (a ^ ( ( Math.random() * 16) >> (a / 4))).toString(16) ) );
  };

  // PRINT ACTUAL YEAR
  stpro.funcs.year = () => { return /\d{4}/.exec(Date())[0]; };

};

// STARTER ENGINE
start( debug );

/***************************************************************/
/***************************************************************/
/***************************************************************/
/***************************************************************/

exports.pref = function( debug = false ) {
  return "pref";
};

exports.api = function( debug = false ) {
  return "api";
};

exports.db = function( debug = false ) {
  return "db";
};

exports.store = function( debug = false ) {
  return "store";
};

exports.state = function( debug = false ) {
  return "state";
};

exports.cache = function( debug = false ) {
  return "cache";
};

exports.history = function( debug = false ) {
  return "history";
};

exports.funcs = function( debug = false ) {
  return "funcs";
};

exports.trigger = function( debug = false ) {
  return "trigger";
};

exports.procedure = function( debug = false ) {
  return "procedure";
};

exports.dispatch = function( debug = false ) {
  return "dispatch";
};
