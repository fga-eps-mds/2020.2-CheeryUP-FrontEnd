import {combineReducers} from 'redux'
import {authReducer} from './Auth/reducers'
import { psicologoReducer } from './Psicologo/reducers'

export const rootReducer = combineReducers ({
    auth:authReducer,
    psic:psicologoReducer
})