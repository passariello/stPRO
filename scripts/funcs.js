/*!
* stPRO <https://github.com/passariello/stPRO>
*
* Copyright (c) 2021, Dario Passariello.
* Licensed under the Apache-2.0 License.
*/

/***********************************************************************/

const pjson = require('../package.json');

  // PRINT UUID
  /******************************************************************************/
  stpro.func.uuid = () => {
    return ( ( [1e7] + -1e3 + -4e3 + -8e3 + -1e11 ).replace( /[018]/g, (a) => (a ^ ( ( Math.random() * 16) >> (a / 4))).toString(16) ) );
  };

  // PRINT ACTUAL YEAR
  /******************************************************************************/
  stpro.func.year = () => {
    return /\d{4}/.exec(Date())[0];
  };

  // NO CACHE FOR FILE LIKE IMAGES
  /******************************************************************************/
  stpro.func.noCache = (uri) => {
    if (uri) return uri.concat(/\?/.test(uri) ? '&' : '?', 't=', wng.rnd());
  };

  // RETURN BOOLEAN CORRECTLY IF 1 or 0
  /******************************************************************************/
  stpro.func.parseBool = (val) => {
    if (!val || val.length == null) return;
    return val == '1' ? true : false;
  };

  // CHECK IF REQUEST IS A PROMISE
  /******************************************************************************/
  stpro.func.isPromise = (p) => {
    return p && Object.prototype.toString.call(p) === "[object Promise]";
  };

  // PATH RAIL URL TO ARRAY
  /******************************************************************************/
  stpro.func.pathRail = () => {
    const removeFistFolder = 1;
    const array = location.href
      .split("?")[0]
      .replace(location.protocol, '')
      .replace(location.host, '')
      .replace(location.hash, '')
      .split('/');
    if (array.length) {
      const arrayFinal = array.filter(item => item);
      return arrayFinal.slice(removeFistFolder);
    } else {
      return;
    }
  };

  // QUERY STRING TO ARRAY
  /******************************************************************************/
  stpro.func.pathQuery = () => {
    let x, y, array = [], search = location.search;
    if (search) {
      search.replace("?", '').split('&')
        .map(x => {
          y = x.split('=');
          array[y[0]] = y[1];
        });
      return array;
    } else {
      return ["empty"];
    }
  };

  // PUSHSTATE
  /***************************************************************************/
  stpro.func.pushState = (state, title, url) => {
    return history.pushState(state, title, url);
  };

  // PUSHSTATE
  /***************************************************************************/
  stpro.func.jsonCounter = (json, key, val) => {
    if (!json) return "you need to provide a json as first value";
    let keyCount;
    if (key && val) {
      keyCount = Object.keys(jsonObject).length;
    } else {
      keyCount = json.items.filter(value => value[key] === val).length;
    }
    return keyCount;
  };

  // EPOCH
  /***************************************************************************/
  stpro.func.epoch = () => {
    return new Date().getTime();
  };
