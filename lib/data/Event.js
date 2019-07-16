const assert = require('@barchart/common-js/lang/assert'),
	Timestamp = require('@barchart/common-js/lang/Timestamp');

const CustomerType = require('./CustomerType'),
	EventType = require('./EventType'),
	ProductType = require('./ProductType');

module.exports = (() => {
	'use strict';

	class Event {
		constructor(data) {
			assert.argumentIsRequired(data, 'data', Object);
			assert.argumentIsRequired(data.customer, 'data.customer', CustomerType, 'CustomerType');
			assert.argumentIsRequired(data.product, 'data.product', ProductType, 'ProductType');
			assert.argumentIsRequired(data.type, 'data.type', EventType, 'EventType');
			assert.argumentIsRequired(data.timestamp, 'data.timestamp', Timestamp, 'Timestamp');
			assert.argumentIsArray(data.context, 'data.context');

			this._data = data;
		}

		toJSON() {
			return this._data;
		}

		toString() {
			return '[Event]';
		}
	}

	return Event;
})();
