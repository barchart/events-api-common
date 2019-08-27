const Enum = require('@barchart/common-js/lang/Enum');

module.exports = (() => {
	'use strict';

	/**
	 * An enumeration for customers.
	 *
	 * @public
	 * @extends {Enum}
	 * @param {String} code
	 * @param {String} description
	 */
	class CustomerType extends Enum {
		constructor(code, description) {
			super(code, description);
		}

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
