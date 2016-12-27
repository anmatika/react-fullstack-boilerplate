import {REQUEST_RESPONSE_FROM_API} from "../types";

export const requestResponseFromAPI = id =>
    ({
        type: REQUEST_RESPONSE_FROM_API,
        promise: fetch('/api/HELLO_WORLD_' + id)
            .then(res => res.json())
    });
