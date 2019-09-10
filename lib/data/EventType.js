const assert = require('@barchart/common-js/lang/assert'),
	array = require('@barchart/common-js/lang/array'),
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
	 * @param {Array=} contextKeys
	 */
	class EventType extends Enum {
		constructor(code, description, product, contextKeys) {
			super(code, description);

			assert.argumentIsOptional(product, 'product', ProductType, 'ProductType');
			assert.argumentIsOptional(contextKeys, 'contextKeys', Array);

			this._product = product || null;
			this._contextKeys = contextKeys || [ ];
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

		/**
		 * The context keys.
		 *
		 * @public
		 * @returns {Array}
		 */
		get contextKeys() {
			return this._contextKeys;
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

		/**
		 * Get all context keys for productType.
		 *
		 * @public
		 * @static
		 * @param {ProductType} productType
		 * @returns {Array}
		 */
		static getContextKeysFor(productType) {
			assert.argumentIsRequired(productType, 'productType', ProductType, 'ProductType');

			return array.unique(Enum.getItems(EventType)
				.filter(eventType => eventType.product === productType)
				.reduce((acc, item) => acc.concat(item.contextKeys), [ ])
			);
		}

		toString() {
			return `[EventType (code=${this.code})]`;
		}
	}

	// Watchlist

	const watchlistApplicationLoaded = new EventType('WATCHLIST-APPLICATION-LOADED', 'Application Loaded', ProductType.WATCHLIST, ['userId']);

	const watchlistAccessed = new EventType('WATCHLIST-ACCESSED', 'Watchlist Selected', ProductType.WATCHLIST, ['userId', 'watchlistId']);
	const watchlistCreated = new EventType('WATCHLIST-CREATED', 'Watchlist Created', ProductType.WATCHLIST, ['userId', 'watchlistId']);
	const watchlistDownloaded = new EventType('WATCHLIST-DOWNLOADED', 'Watchlist Downloaded', ProductType.WATCHLIST, ['userId', 'watchlistId']);
	const watchlistPrinted = new EventType('WATCHLIST-PRINTED', 'Watchlist Printed', ProductType.WATCHLIST, ['userId', 'watchlistId']);
	const watchlistDeleted = new EventType('WATCHLIST-DELETED', 'Watchlist Deleted', ProductType.WATCHLIST, ['userId', 'watchlistId']);

	const watchlistSymbolAdded = new EventType('WATCHLIST-SYMBOL-ADDED', 'Symbol Added', ProductType.WATCHLIST, ['userId', 'watchlistId', 'tgamSymbol']);
	const watchlistSymbolRemoved = new EventType('WATCHLIST-SYMBOL-REMOVED', 'Symbol Removed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'tgamSymbol']);

	const watchlistCustomViewCreated = new EventType('WATCHLIST-CUSTOM-VIEW-CREATED', 'Custom View Created', ProductType.WATCHLIST, ['userId', 'viewName']);
	const watchlistCustomViewDeleted = new EventType('WATCHLIST-CUSTOM-VIEW-DELETED', 'Custom View Deleted', ProductType.WATCHLIST, ['userId', 'viewName']);

	const watchlistViewTypeChanged = new EventType('WATCHLIST-VIEW-TYPE-CHANGED', 'View Type Changed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'viewType']);
	const watchlistViewChanged = new EventType('WATCHLIST-VIEW-CHANGED', 'View Changed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'viewName']);

	const watchlistDataModeChanged = new EventType('WATCHLIST-DATA-MODE-CHANGED', 'Data mode changed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'dataMode']);

	const watchlistEditScreenInvoked = new EventType('WATCHLIST-SCREEN-INVOKED-EDIT', 'Edit Screen Invoked', ProductType.WATCHLIST, ['userId', 'watchlistId']);
	const watchlistPortfolioAddScreenInvoked = new EventType('WATCHLIST-SCREEN-INVOKED-PORTFOLIO-ADD', 'Portfolio Add Screen Invoked', ProductType.WATCHLIST, ['userId', 'watchlistId', 'tgamSymbol']);
	const watchlistSymbolNotesScreenInvoked = new EventType('WATCHLIST-SCREEN-INVOKED-SYMBOL-NOTES', 'Symbol Notes Screen Accessed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'tgamSymbol']);

	const watchlistAssetClassFilterActivated = new EventType('WATCHLIST-ASSET-CLASS-FILTER-ACTIVATED', 'Asset Filter Activated', ProductType.WATCHLIST, ['userId', 'classFilter']);
	const watchlistAssetClassFilterDeactivated = new EventType('WATCHLIST-ASSET-CLASS-FILTER-DEACTIVATED', 'Asset Filter Deactivated', ProductType.WATCHLIST, ['userId', 'classFilter']);

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
