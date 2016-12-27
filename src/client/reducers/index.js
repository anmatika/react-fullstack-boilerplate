import {handle} from "redux-pack";
import {LOAD_FOO} from "../types";

const initialState = {
    isLoading: false,
    error: null,
    foo: null,
};

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOAD_FOO:
            return handle(state, action, {
                start: s => ({...s, isLoading: true, error: null, foo: null}),
                finish: s => ({...s, isLoading: false}),
                failure: s => ({...s, error: payload}),
                success: s => ({...s, foo: payload})
            });

        default:
            return state;
    }
}