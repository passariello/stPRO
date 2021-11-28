/*!
 * stPRO <https://github.com/passariello/stPRO>
 *
 * Copyright (c) 2021, Dario Passariello.
 * Licensed under the Apache-2.0 License.
 */

/***********************************************************************/

(function () {

  const pjson = require('./package.json');

  // CREATE ROOT STORE
  var stpro = window.stpro = {};

  // SETUP STORES
  stpro.pref = {
    indexedDB: false,
    storage: true,
    cookie: true
  };

  stpro.api = {};
  stpro.auth = {};
  stpro.store = {};
  stpro.state = {};
  stpro.cache = {};
  stpro.history = {};
  stpro.func = {};
  stpro.trigger = {};
  stpro.procedure = {};
  stpro.dispatch = {};

  // FIRST MESSAGE
  console.groupCollapsed( `%cstPRO v${pjson.version}%c`,"color:orange","" );
    console.debug( `%cstPRO v${pjson.version}%c by Dario Passariello started`,"color:orange","" );
    console.debug( "%cType stpro in this console to see it", "color:gray","" );
    console.debug( "%cFor help visit: " + pjson.repository.help, "color:gray","" );
    console.debug( 'name: %c' + pjson.name,"color:orange","" );
    console.debug( 'version: %c' + pjson.version,"color:orange","" );
    console.debug( 'description: %c' + pjson.description,"color:orange","" );
    console.debug( 'license: %c' + pjson.license,"color:orange","" );
    console.debug( 'repository: %c' + pjson.repository.url,"color:orange","" );
    console.debug( 'author: %c' + pjson.author.name,"color:orange","" );
    console.debug( 'email: %c' + pjson.author.email,"color:orange","" );
  console.groupEnd();

  require('./scripts/funcs.js');
  if(stpro.pref.cookie) require('./scripts/cookie.js');
  if(stpro.pref.storage) require('./scripts/storage.js');
  if(stpro.pref.indexedDB) require('./scripts/indexedDB.js');

})();
