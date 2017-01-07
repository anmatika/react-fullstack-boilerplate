import {REQUEST_RESPONSE_FROM_API, CHANGE_INPUT_VALUE} from "../types";

export const requestResponseFromAPI = id =>
    ({
        type: REQUEST_RESPONSE_FROM_API,
        promise: fetch('/api/HELLO_WORLD_' + id)
            .then(res => res.json())
    });

export const changeInputValue = inputValue =>
    ({type: CHANGE_INPUT_VALUE, inputValue});
