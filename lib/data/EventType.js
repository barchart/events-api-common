const Enum = require('@barchart/common-js/lang/Enum');

module.exports = (() => {
	'use strict';

	class EventType extends Enum {
		constructor(code, description) {
			super(code, description);
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

		static get WATCHLIST_CUSTOM_VIEW_CREATED() {
			return watchlistCustomViewCreated;
		}

		static get WATCHLIST_CUSTOM_VIEW_DELETED() {
			return watchlistCustomViewDeleted;
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

	const watchlistApplicationLoaded = new EventType('W-AL', 'Application Loaded');
	const watchlistAccessed = new EventType('W-A', 'Accessed');
	const watchlistCreated = new EventType('W-C', 'Created');
	const watchlistDeleted = new EventType('W-D', 'Deleted');

	const watchlistSymbolAdded = new EventType('W-SA', 'Symbol Added');
	const watchlistSymbolRemoved = new EventType('W-SR', 'Symbol Removed');

	const watchlistCustomViewCreated = new EventType('W-CVC', 'Custom View Created');
	const watchlistCustomViewDeleted = new EventType('W-CVD', 'Custom View Deleted');

	// Portfolio

	const portfolioApplicationLoaded = new EventType('P-AL', 'Application Loaded');
	const portfolioAccessed = new EventType('P-A', 'Accessed');
	const portfolioCreated = new EventType('P-C', 'Created');
	const portfolioDeleted = new EventType('P-D', 'Deleted');

	const portfolioTransactionCreated = new EventType('P-TA', 'Transaction Created');
	const portfolioTransactionEdited = new EventType('P-TE', 'Transaction Edited');
	const portfolioTransactionDeleted = new EventType('P-TD', 'Transaction Deleted');
	const portfolioTransactionHistoryViewedSingle = new EventType('P-THVS', 'Transaction History Viewed (Single position)');
	const portfolioTransactionHistoryViewedAll = new EventType('P-THVA', 'Transaction History Viewed (All positions)');

	const portfolioPositionCreated = new EventType('P-PC', 'Position Created');
	const portfolioPositionDeleted = new EventType('P-PD', 'Position Deleted');

	const portfolioBrokerageReportDownloaded = new EventType('P-BRD', 'Brokerage Report Downloaded');

	const portfolioCustomViewCreated = new EventType('P-CVC', 'Custom View Created');
	const portfolioCustomViewDeleted = new EventType('P-CVD', 'Custom View Deleted');

	return EventType;
})();
