# Collection

Adds `Collection` helper to all documents in all collections.

## Example

```js
var b = new Mongo.Collection('a');
b.insert({ _id: 'c' });
var c = b.findOne('c');
c.Collection(); // 'a'
```