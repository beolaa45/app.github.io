import * as actionTypes from './actionTypes';
import axios from '../../axios-oriders';
export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients
    }
}

const fetchIngredientFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENT_FALED
    }
}
export const initIngredients = () => {
    return dispatch => {
         axios.get('https://my-app-e884b.firebaseio.com/ingredients.json')
        .then(res => {
            dispatch(setIngredients(res.data))
        })
        .catch(error => {
            dispatch(fetchIngredientFailed())
        })
    }
}