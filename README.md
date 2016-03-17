# Collection

Namespace of collectios and getting collection from documents.

## Install

```
meteor add shuttler:collection
```

## Example

```js
var b = new Mongo.Collection('a');
b.insert({ _id: 'c' });
var c = b.findOne('c');
c.Collection(); // 'a'
var d = new Mongo.Collection(null, { ref: 'd' });
d._ref == 'd'; // true
Shuttler.collection('d') == d; // true
Shuttler.collections();
// [b, d]
```

## Documentation

### Shuttler.collection
> (condition: String|Function) => Mongo.Collection|undefined

```js
new Mongo.Collection('e');
Shuttler.collection('e') == e; // true
Shuttler.collection(function(collection) { return collection._name == 'e'; }) == e; // true
```

### Shuttler.collections
> () => [Mongo.Collection]