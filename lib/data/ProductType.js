const Enum = require('@barchart/common-js/lang/Enum');

module.exports = (() => {
	'use strict';

	/**
	 * An enumeration of products (which are associated with events).
	 *
	 * @public
	 * @extends {Enum}
	 * @param {String} code
	 * @param {String} description
	 */
	class ProductType extends Enum {
		constructor(code, description) {
			super(code, description);
		}

		/**
		 * The portfolio system.
		 *
		 * @public
		 * @static
		 * @returns {ProductType}
		 */
		static get PORTFOLIO() {
			return portfolio;
		}

		/**
		 * The watchlist system.
		 *
		 * @public
		 * @static
		 * @returns {ProductType}
		 */
		static get WATCHLIST() {
			return watchlist;
		}

		toString() {
			return `[ProductType (code=${this.code})]`;
		}
	}

	const portfolio = new ProductType('PORTFOLIO', 'PORTFOLIO');
	const watchlist = new ProductType('WATCHLIST', 'WATCHLIST');

	return ProductType;
})();
