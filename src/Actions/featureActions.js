export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export function addFeature(id) {
    return { type: ADD_FEATURE, payload: id }
}

export function removeFeature(id) {
    return { type: REMOVE_FEATURE, payload: id }
}