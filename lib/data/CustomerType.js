const Enum = require('@barchart/common-js/lang/Enum');

module.exports = (() => {
	'use strict';

	class CustomerType extends Enum {

		/**
		 * Customer type for TGAM.
		 *
		 * @public
		 * @static
		 * @returns {CustomerType}
		 */
		static get TGAM() {
			return tgam;
		}

		toString() {
			return `[CustomerType (code=${this.code})]`;
		}
	}

	const tgam = new CustomerType('TGAM', 'The Globe and Mail');

	return CustomerType;
})();
