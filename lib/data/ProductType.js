const Enum = require('@barchart/common-js/lang/Enum');

module.exports = (() => {
	'use strict';

	class ProductType extends Enum {

		/**
		 * ProductType for Portfolio product.
		 *
		 * @public
		 * @static
		 * @returns {ProductType}
		 */
		static get PORTFOLIO() {
			return portfolio;
		}

		/**
		 * ProductType for Watchlist product.
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
