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
		 * Returns the {@link CustomerType} which corresponds to the code supplied.
		 * If matching {@link CustomerType} exists, a null value is returned.
		 *
		 * @public
		 * @param {String} code
		 * @return {CustomerType/|null}
		 */
		static parse(code) {
			return Enum.fromCode(CustomerType, code);
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
