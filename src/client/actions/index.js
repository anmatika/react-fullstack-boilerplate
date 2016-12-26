import {LOAD_FOO} from "../types";

export const loadFoo = id =>
    ({
        type: LOAD_FOO,
        promise: fetch('/api/HELLO_WORLD_' + id).then(res => res.json())
    });
