const Enum = require('@barchart/common-js/lang/Enum');

module.exports = (() => {
	'use strict';

	class EventType extends Enum {

		/**
		 * Acceessed event type.
		 *
		 * @public
		 * @static
		 * @returns {EventType}
		 */
		static get ACCESSED() {
			return accessed;
		}

		/**
		 * Brokerage report downloaded event type.
		 *
		 * @public
		 * @static
		 * @returns {EventType}
		 */
		static get BROKERAGE_REPORT_DOWNLOADED() {
			return brokerageReportDownloaded;
		}

		toString() {
			return `[EventType (code=${this.code})]`;
		}
	}

	const accessed = new EventType('A', 'Accessed');
	const brokerageReportDownloaded = new EventType('BRD', 'Brokerage Report Downloaded');

	return EventType;
})();
