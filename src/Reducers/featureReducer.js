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
            const featuresAdded = state.additionalFeatures.filter((feature) => feature.id === action.payload)
            console.log(state);
            console.log(featuresAdded);
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, ...featuresAdded],
                },
                additionalFeatures: [...state.additionalFeatures.filter((feature) => feature.id !== action.payload)]
            }
        case REMOVE_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter((feature) => feature.id !== action.payload),
                },
                additionalFeatures: [...state.additionalFeatures, ...state.car.features.filter((feature) => feature.id === action.payload)]
            }
        default:
            return state;
    }
}

export default featureReducer;