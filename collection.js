namedInstances = {};
nullInstances = [];

CollectionExtensions.addExtension(function(name, options) {
	var Collection = this;
	if (options && typeof(options.ref) == 'string') var name = options.ref;
	this._ref = name;
	if (name) {
		if (!(name in namedInstances)) namedInstances[name] = [];
		namedInstances[name].push(this);
	}
	else {
		nullInstances.push(this);
	}
	this.helpers({
		Collection: function() {
			return Collection;
		}
	});
});

// () => [Mongo.Collection]
Shuttler.collections = function() {
	var results = [];
	lodash.each(namedInstances, function(instances) {
		lodash.each(instances, function(instance) {
			results.push(instance);
		});
	});
	lodash.each(nullInstances, function(instance) {
		results.push(instance);
	});
	return results;
};

// (condition: String|Function) => Mongo.Collection|undefined
Shuttler.collection = function(condition) {
	if (typeof(condition) == 'string') {
		if (condition in namedInstances && namedInstances[condition].length) {
			return namedInstances[condition][0];
		}
	} else if (typeof(condition) == 'function') {
		return lodash.find(Shuttler.collections(), condition);
	}
};