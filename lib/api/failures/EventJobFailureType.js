const FailureType = require('@barchart/common-js/api/failures/FailureType');

module.exports = (() => {
	'use strict';

	class EventJobFailureType {
		constructor() {

		}

		/**
		 * Unable to get, the report is still running.
		 *
		 * @public
		 * @static
		 * @returns {FailureType}
		 */
		static EVENT_JOB_GET_FAILED_RUNNING() {
			return eventJobGetFailedRunning;
		}

		/**
		 * Unable to get, the job source does not exist.
		 *
		 * @public
		 * @static
		 * @returns {FailureType}
		 */
		static EVENT_JOB_GET_FAILED_NO_JOB() {
			return eventJobGetFailedNoJob;
		}
	}

	const eventJobGetFailedRunning = new FailureType('EVENT_JOB_GET_FAILED_RUNNING', 'Unable to get report while it\'s running.');
	const eventJobGetFailedNoJob = new FailureType('EVENT_JOB_GET_FAILED_NO_JOB', 'Unable to get report. The job source does not exist.');

	return EventJobFailureType;
})();
