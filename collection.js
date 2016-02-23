CollectionExtensions.addExtension(function(name, options) {
	var Collection = this;
	Collection.helpers({
		Collection: function() {
			return Collection;
		}
	});
});