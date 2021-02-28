import { ADD_FEATURE } from '../Actions/featureActions';
import { REMOVE_FEATURE } from '../Actions/featureActions';

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

const featureReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            const selectedFeature = state.additionalFeatures.filter((feature) => feature.id === action.payload)
            console.log(state);
            console.log(selectedFeature);
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, ...selectedFeature],
                },
                additionalFeatures: [...state.additionalFeatures.filter((feature) => feature.id !== action.payload)],
                additionalPrice: state.additionalPrice + selectedFeature[0].price
            }

        case REMOVE_FEATURE:
            const removedFeature = state.car.features.filter((feature) => feature.id === action.payload)
            return {
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter((feature) => feature.id !== action.payload),
                },
                additionalFeatures: [...state.additionalFeatures, ...state.car.features.filter((feature) => feature.id === action.payload)],
                additionalPrice: state.additionalPrice - removedFeature[0].price
            }

        default:
            return state;
    }
}

export default featureReducer;