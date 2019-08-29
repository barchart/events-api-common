const assert = require('@barchart/common-js/lang/assert'),
	Enum = require('@barchart/common-js/lang/Enum');

const ProductType = require('./ProductType');

module.exports = (() => {
	'use strict';

	/**
	 * An enumeration of event types that can be tracked.
	 *
	 * @public
	 * @extends {Enum}
	 * @param {String} code
	 * @param {String} description
	 * @param {ProductType=} product
	 */
	class EventType extends Enum {
		constructor(code, description, product) {
			super(code, description);

			assert.argumentIsOptional(product, 'product', ProductType, 'ProductType');

			this._product = product || null;
		}

		/**
		 * The {@link ProductType} which the event applies to.
		 *
		 * @public
		 * @returns {ProductType|null}
		 */
		get product() {
			return this._product;
		}

		static get WATCHLIST_APPLICATION_LOADED() {
			return watchlistApplicationLoaded;
		}

		static get WATCHLIST_ACCESSED() {
			return watchlistAccessed;
		}

		static get WATCHLIST_CREATED() {
			return watchlistCreated;
		}

		static get WATCHLIST_DELETED() {
			return watchlistDeleted;
		}

		static get WATCHLIST_SYMBOL_ADDED() {
			return watchlistSymbolAdded;
		}

		static get WATCHLIST_SYMBOL_REMOVED() {
			return watchlistSymbolRemoved;
		}

		static get WATCHLIST_CUSTOM_VIEW_ACCESSED() {
			return watchlistCustomViewAccessed;
		}

		static get WATCHLIST_CUSTOM_VIEW_CREATED() {
			return watchlistCustomViewCreated;
		}

		static get WATCHLIST_CUSTOM_VIEW_DELETED() {
			return watchlistCustomViewDeleted;
		}

		static get WATCHLIST_DOWNLOADED() {
			return watchlistDownloaded;
		}

		static get WATCHLIST_PRINTED() {
			return watchlistPrinted;
		}

		static get WATCHLIST_SCREEN_EDIT_ACCESSED() {
			return watchlistScreenEditAccessed;
		}

		static get WATCHLIST_SCREEN_PORTFOLIO_ADD_ACCESSED() {
			return watchlistScreenPortfolioAddAccessed;
		}

		static get WATCHLIST_SCREEN_SYMBOL_NOTES_ACCESSED() {
			return watchlistScreenSymbolNotesAccessed;
		}

		static get WATCHLIST_SCREEN_FILTER_ACTIVATED() {
			return watchlistScreenFilterActivated;
		}

		static get WATCHLIST_SCREEN_FILTER_DEACTIVATED() {
			return watchlistScreenFilterDeactivated;
		}

		static get PORTFOLIO_APPLICATION_LOADED() {
			return portfolioApplicationLoaded;
		}

		static get PORTFOLIO_ACCESSED() {
			return portfolioAccessed;
		}

		static get PORTFOLIO_CREATED() {
			return portfolioCreated;
		}

		static get PORTFOLIO_DELETED() {
			return portfolioDeleted;
		}

		static get PORTFOLIO_TRANSACTION_CREATED() {
			return portfolioTransactionCreated;
		}

		static get PORTFOLIO_TRANSACTION_EDITED() {
			return portfolioTransactionEdited;
		}

		static get PORTFOLIO_TRANSACTION_DELETED() {
			return portfolioTransactionDeleted;
		}

		static get PORTFOLIO_TRANSACTION_HISTORY_VIEWED_SINGLE() {
			return portfolioTransactionHistoryViewedSingle;
		}

		static get PORTFOLIO_TRANSACTION_HISTORY_VIEWED_ALL() {
			return portfolioTransactionHistoryViewedAll;
		}

		static get PORTFOLIO_POSITION_CREATED() {
			return portfolioPositionCreated;
		}

		static get PORTFOLIO_POSITION_DELETED() {
			return portfolioPositionDeleted;
		}

		static get PORTFOLIO_BROKERAGE_REPORT_DOWNLOADED() {
			return portfolioBrokerageReportDownloaded;
		}

		static get PORTFOLIO_CUSTOM_VIEW_CREATED() {
			return portfolioCustomViewCreated;
		}

		static get PORTFOLIO_CUSTOM_VIEW_DELETED() {
			return portfolioCustomViewDeleted;
		}

		toString() {
			return `[EventType (code=${this.code})]`;
		}
	}

	// Watchlist

	const watchlistApplicationLoaded = new EventType('APPLICATION-LOADED', 'Application Loaded', ProductType.WATCHLIST);
	const watchlistAccessed = new EventType('WATCHLIST-ACCESSED', 'Accessed', ProductType.WATCHLIST);
	const watchlistCreated = new EventType('WATCHLIST-CREATED', 'Created', ProductType.WATCHLIST);
	const watchlistDeleted = new EventType('WATCHLIST-DELETED', 'Deleted', ProductType.WATCHLIST);

	const watchlistSymbolAdded = new EventType('WATCHLIST-SYMBOL-ADDED', 'Symbol Added', ProductType.WATCHLIST);
	const watchlistSymbolRemoved = new EventType('WATCHLIST-SYMBOL-REMOVED', 'Symbol Removed', ProductType.WATCHLIST);

	const watchlistCustomViewAccessed = new EventType('WATCHLIST-CUSTOM-VIEW-ACCESSED', 'Custom View Accessed', ProductType.WATCHLIST);
	const watchlistCustomViewCreated = new EventType('WATCHLIST-CUSTOM-VIEW-CREATED', 'Custom View Created', ProductType.WATCHLIST);
	const watchlistCustomViewDeleted = new EventType('WATCHLIST-CUSTOM-VIEW-DELETED', 'Custom View Deleted', ProductType.WATCHLIST);

	const watchlistDownloaded = new EventType('WATCHLIST-DOWNLOADED', 'Watchlist Downloaded', ProductType.WATCHLIST);
	const watchlistPrinted = new EventType('WATCHLIST-PRINTED', 'Watchlist Printed', ProductType.WATCHLIST);

	const watchlistScreenEditAccessed = new EventType('SCREEN-EDIT-ACCESSED', 'Edit Screen Accessed', ProductType.WATCHLIST);
	const watchlistScreenPortfolioAddAccessed = new EventType('SCREEN-PORTFOLIO-ADD-ACCESSED', 'Add To Portfolio Screen Accessed', ProductType.WATCHLIST);
	const watchlistScreenSymbolNotesAccessed = new EventType('SCREEN-PORTFOLIO-SYMBOL-NOTES-ACCESSED', 'Symbol Notes Screen Accessed', ProductType.WATCHLIST);

	const watchlistScreenFilterActivated = new EventType('SCREEN-ASSET-FILTER-ACTIVATED', 'Asset Filter Activated', ProductType.WATCHLIST);
	const watchlistScreenFilterDeactivated = new EventType('SCREEN-ASSET-FILTER-DEACTIVATED', 'Asset Filter Deactivated', ProductType.WATCHLIST);
	
	

	// Portfolio

	const portfolioApplicationLoaded = new EventType('P-AL', 'Application Loaded', ProductType.PORTFOLIO);
	const portfolioAccessed = new EventType('P-A', 'Accessed', ProductType.PORTFOLIO);
	const portfolioCreated = new EventType('P-C', 'Created', ProductType.PORTFOLIO);
	const portfolioDeleted = new EventType('P-D', 'Deleted', ProductType.PORTFOLIO);

	const portfolioTransactionCreated = new EventType('P-TC', 'Transaction Created', ProductType.PORTFOLIO);
	const portfolioTransactionEdited = new EventType('P-TE', 'Transaction Edited', ProductType.PORTFOLIO);
	const portfolioTransactionDeleted = new EventType('P-TD', 'Transaction Deleted', ProductType.PORTFOLIO);
	const portfolioTransactionHistoryViewedSingle = new EventType('P-THVS', 'Transaction History Viewed (Single position)', ProductType.PORTFOLIO);
	const portfolioTransactionHistoryViewedAll = new EventType('P-THVA', 'Transaction History Viewed (All positions)', ProductType.PORTFOLIO);

	const portfolioPositionCreated = new EventType('P-PC', 'Position Created', ProductType.PORTFOLIO);
	const portfolioPositionDeleted = new EventType('P-PD', 'Position Deleted', ProductType.PORTFOLIO);

	const portfolioBrokerageReportDownloaded = new EventType('P-BRD', 'Brokerage Report Downloaded', ProductType.PORTFOLIO);

	const portfolioCustomViewCreated = new EventType('P-CVC', 'Custom View Created', ProductType.PORTFOLIO);
	const portfolioCustomViewDeleted = new EventType('P-CVD', 'Custom View Deleted', ProductType.PORTFOLIO);

	return EventType;
})();
