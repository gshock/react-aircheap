import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import AirCheapAPI from '../api/AirCheapAPI';

let AirportActionCreators = {
    //fetch airports
    fetchAirports(origin, destination) {
        AppDispatcher.dispatchAsync(AirCheapAPI.fetchAirports(), {
            request: constants.FETCH_AIRPORTS,
            success: constants.FETCH_AIRPORTS_SUCCESS,
            failure: constants.FETCH_AIRPORTS_ERROR
        });
    },

    //choose airport
    chooseAirport(target, code) {
        AppDispatcher.dispatch({
            type: constants.CHOOSE_AIRPORT,
            target,
            code
        });
    },

    //fetch tickets
    fetchTickets(origin, destination) {
        AppDispatcher.dispatchAsync(AirCheapAPI.fetchTickets(origin, destination), {
            request: constants.FETCH_TICKETS,
            success: constants.FETCH_TICKETS_SUCCESS,
            failure: constants.FETCH_TICKETS_ERROR
        });
    }

};

export default AirportActionCreators;