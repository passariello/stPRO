# stPRO

Store and state manager easy and powerful
 
Use "npm i stpro" to install

in the index:
 
```js
import "stpro"
```

type 'stpro' in your console to have a look about your stores (api, store, state,...)

example to set api data:

```js
stpro.func.api.set("MyApi",[ { api: 'one'} , { api: 'two'} ] , { opt:false } ) 
```

example to get api data:

```js
stpro.func.api.get("MyApi") 
```

example to update api data:

```js
stpro.func.api.update("MyApi",[ { api: '1'} , { api: '2'} ] , { opt:false } )  
```

example to delete single api data:

```js
stpro.func.api.delete("MyApi")  
```

example to delete all api data:

```js
stpro.func.api.clearAll()  
```