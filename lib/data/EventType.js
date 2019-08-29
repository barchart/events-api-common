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

		static get WATCHLIST_DOWNLOADED() {
			return watchlistDownloaded;
		}

		static get WATCHLIST_PRINTED() {
			return watchlistPrinted;
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

		static get WATCHLIST_CUSTOM_VIEW_CREATED() {
			return watchlistCustomViewCreated;
		}

		static get WATCHLIST_CUSTOM_VIEW_DELETED() {
			return watchlistCustomViewDeleted;
		}

		static get WATCHLIST_VIEW_TYPE_CHANGED() {
			return watchlistViewTypeChanged;
		}

		static get WATCHLIST_VIEW_CHANGED() {
			return watchlistViewChanged;
		}

		static get WATCHLIST_DATA_MODE_CHANGED() {
			return watchlistDataModeChanged;
		}

		static get WATCHLIST_EDIT_SCREEN_INVOKED() {
			return watchlistEditScreenInvoked;
		}

		static get WATCHLIST_PORTFOLIO_ADD_SCREEN_INVOKED() {
			return watchlistPortfolioAddScreenInvoked;
		}

		static get WATCHLIST_SYMBOL_NOTES_SCREEN_INVOKED() {
			return watchlistSymbolNotesScreenInvoked;
		}

		static get WATCHLIST_ASSET_CLASS_FILTER_ACTIVATED() {
			return watchlistAssetClassFilterActivated;
		}

		static get WATCHLIST_ASSET_CLASS_FILTER_DEACTIVATED() {
			return watchlistAssetClassFilterDeactivated;
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

	const watchlistAccessed = new EventType('WATCHLIST-ACCESSED', 'Watchlist Selected', ProductType.WATCHLIST);
	const watchlistCreated = new EventType('WATCHLIST-CREATED', 'Watchlist Created', ProductType.WATCHLIST);
	const watchlistDownloaded = new EventType('WATCHLIST-DOWNLOADED', 'Watchlist Downloaded', ProductType.WATCHLIST);
	const watchlistPrinted = new EventType('WATCHLIST-PRINTED', 'Watchlist Printed', ProductType.WATCHLIST);
	const watchlistDeleted = new EventType('WATCHLIST-DELETED', 'Watchlist Deleted', ProductType.WATCHLIST);

	const watchlistSymbolAdded = new EventType('SYMBOL-ADDED', 'Symbol Added', ProductType.WATCHLIST);
	const watchlistSymbolRemoved = new EventType('SYMBOL-REMOVED', 'Symbol Removed', ProductType.WATCHLIST);

	const watchlistCustomViewCreated = new EventType('CUSTOM-VIEW-CREATED', 'Custom View Created', ProductType.WATCHLIST);
	const watchlistCustomViewDeleted = new EventType('CUSTOM-VIEW-DELETED', 'Custom View Deleted', ProductType.WATCHLIST);

	const watchlistViewTypeChanged = new EventType('VIEW-TYPE-CHANGED', 'View Type Changed', ProductType.WATCHLIST);
	const watchlistViewChanged = new EventType('VIEW-CHANGED', 'View Changed', ProductType.WATCHLIST);

	const watchlistDataModeChanged = new EventType('DATA-MODE-CHANGED', 'Data mode changed', ProductType.WATCHLIST);

	const watchlistEditScreenInvoked = new EventType('EDIT-SCREEN-INVOKED', 'Edit Screen Invoked', ProductType.WATCHLIST);
	const watchlistPortfolioAddScreenInvoked = new EventType('PORTFOLIO-ADD-SCREEN-INVOKED', 'Portfolio Add Screen Invoked', ProductType.WATCHLIST);
	const watchlistSymbolNotesScreenInvoked = new EventType('SYMBOL-NOTES-SCREEN-INVOKED', 'Symbol Notes Screen Accessed', ProductType.WATCHLIST);

	const watchlistAssetClassFilterActivated = new EventType('ASSET-CLASS-FILTER-ACTIVATED', 'Asset Filter Activated', ProductType.WATCHLIST);
	const watchlistAssetClassFilterDeactivated = new EventType('ASSET-CLASS-FILTER-DEACTIVATED', 'Asset Filter Deactivated', ProductType.WATCHLIST);

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
