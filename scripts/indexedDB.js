/*!
 * stPRO <https://github.com/passariello/stPRO>
 *
 * Copyright (c) 2021, Dario Passariello.
 * Licensed under the Apache-2.0 License.
 */

/***********************************************************************/

stpro.func.indexedDB = {};
const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

if (!indexedDB) {
  console.debug(e, "stPRO : Your browser doesn't support a skey version of IndexedDB. Such and such feature will not be available.");
  console.debug( 'stPRO : Something went badly wrong with your indexedDB!' );
}

  stpro.func.indexedDB = {

    open: ( storeName ) => {

        var request = window.indexedDB.open( storeName , 4 );

        request.onsuccess = ( e ) => {
          console.debug( 'indexedDB "' + storeName + '" open' );
          return e.target.result;
          //request.close();
        };
        request.onerror = ( e ) => {
          console.debug( "Database open error: " + e.target.errorCode );
          return;
        };
        return request;
    },

  /************************************************************************/

    //CREATE: indexedDB.create('myDB','MyTable')
    create: ( storeName, table ) => {

      var request = window.indexedDB.open( storeName, 4 );

      request.onerror = ( e ) => {
        console.debug(e, "Database create error: " + e.target.errorCode);
        return;
      };

      request.onupgradeneeded = ( e ) => {
        var db = e.target.result;
        var objectStore = db.createObjectStore( storeName, { autoIncrement:true } );
        objectStore.createIndex( table, table, { unique: true });
        //objectStore.createIndex( value, value, { unique: false });
        console.debug( db );
        //db.close();
      };

    },

  /************************************************************************/

    //STORE: indexedDB.store('myDB','MyTable')
    store: ( storeName, table ) => {
      var request = indexedDB.open( storeName );

      request.onsuccess = function (e){

          var database = e.target.result;
          var version =  parseInt(database.version);
          database.close();

          var secondRequest = indexedDB.open( storeName , version + 1 );

          secondRequest.onupgradeneeded = function (e) {
              var database = e.target.result;
              var objectStore = database.createObjectStore( table, {
                  keyPath: 'id'
              });
          };

          secondRequest.onsuccess = function (e) {
              e.target.result.close();
          };
      };

    },

  /************************************************************************/
    //INSERT: indexedDB.insert('myDB','Mytable','Mykey','MyValue')
    insert: ( storeName, table, key, value ) => {

      console.log( storeName, table, key, value );

      var request = window.indexedDB.open( storeName, 4 );

      request.onerror = ( e ) => {
        console.debug(e, "Database insert error: " + e.target.errorCode);
        return;
      };

      request.onsuccess = ( e ) => {
        try{
          var db = e.target.result;
          var StoreObj = db.transaction( storeName , "readwrite").objectStore( storeName );
          var StoreObjInsert = StoreObj.add( value, key, value );
          db.close();
        }catch( e ){
          console.debug( e, "IndexDB insert not work" );
        }
      };
    },

  /************************************************************************/

    //UPDATE: indexedDB.update('myDB','Mykey','MyValue')
    update: ( storeName, table, key, value ) => {

      var request = window.indexedDB.open( storeName, 4 );
      request.onerror = ( e ) => {
        console.debug(e, "Database update error: " + e.target.errorCode);
        return;
      };
      request.onsuccess = ( e ) => {
        try{
          var db = e.target.result;
          var StoreObj = db.transaction( storeName , "readwrite").objectStore( storeName );
          var StoreObjUpdate = StoreObj.put( value, key, value );
          db.close();
        }catch( e ){
          console.debug( e, "IndexDB update not work" );
        }
      };
    },

  /************************************************************************/

    //GET: indexedDB.get('value')
    get: ( storeName, table, key ) => {

      var request = window.indexedDB.open( storeName, 4 );

      request.onerror = ( e ) => {
        console.debug( e , "Database get error: " + e.target.errorCode );
        return;
      };

      request.onsuccess = ( e ) => {

        var db = e.target.result;
        var Store = db.transaction( [storeName] , "readwrite" );
        var obj = Store.objectStore( storeName );
        var req = obj.get( key );

        req.onsuccess = function( e ){
          //console.log( e.target.result )
        };

      };

    },

  };

  // CHECK IF INDEXEDDB EXIST
  // ***************************************************************************************************/

  stpro.dbExist = () => {
    var result = indexedDB.databases();
    return result.length;
  };

  // START DEFAULT DB
  stpro.func.indexedDB.open( "stPRO" );
  stpro.func.indexedDB.store( "stPRO" );
  stpro.func.indexedDB.insert( "stPRO" , 'active' , 'test[0]' , [] );


