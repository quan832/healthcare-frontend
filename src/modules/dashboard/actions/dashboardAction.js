const store = 'dashboard'

export const FETCH_BOOKINGS = `${store}/FETCH_BOOKINGS`
export const FETCH_BOOKINGS_REQUEST = `${store}/FETCH_BOOKINGS_REQUEST`
export const FETCH_BOOKINGS_SUCCESS = `${store}/FETCH_BOOKINGS_SUCCESS`
export const FETCH_BOOKINGS_ERROR = `${store}/FETCH_BOOKINGS_ERROR`

export const FETCH_CATEGORY_OPTIONS = `${store}/FETCH_CATEGORY_OPTIONS`
export const FETCH_CATEGORY_OPTIONS_REQUEST = `${store}/FETCH_CATEGORY_OPTIONS_REQUEST`
export const FETCH_CATEGORY_OPTIONS_SUCCESS = `${store}/FETCH_CATEGORY_OPTIONS_SUCCESS`
export const FETCH_CATEGORY_OPTIONS_ERROR = `${store}/FETCH_CATEGORY_OPTIONS_ERROR`

export const OPEN_BOOKING_MODAL = `${store}/OPEN_BOOKING_MODAL`
export const CLOSE_BOOKING_MODAL = `${store}/CLOSE_BOOKING_MODAL`

export default class DashboardAction {
    static FETCH_BOOKINGS = {
        REQUEST: FETCH_BOOKINGS_REQUEST,
        SUCCESS: FETCH_BOOKINGS_SUCCESS,
        ERROR: FETCH_BOOKINGS_ERROR
    };

    static FETCH_CATEGORY_OPTIONS = {
        REQUEST: FETCH_CATEGORY_OPTIONS_REQUEST,
        SUCCESS: FETCH_CATEGORY_OPTIONS_SUCCESS,
        ERROR: FETCH_CATEGORY_OPTIONS_ERROR
    };

    static fetchBookings(payload) {
        return {
            type: FETCH_BOOKINGS,
            payload: payload
        };
    }

    static fetchCategoryOptions() {
        return {
            type: FETCH_CATEGORY_OPTIONS,
        };
    }

    static openBookingModal(id) {
        return {
            type: OPEN_BOOKING_MODAL,
            payload: { id }
        };
    }

    static closeBookingModal() {
        return {
            type: CLOSE_BOOKING_MODAL,
        };
    }


}
