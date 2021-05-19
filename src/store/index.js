import {combineReducers} from 'redux'
import {authReducer} from './Auth/reducers'
import { psicologoReducer } from './Psicologo/reducers'
import { pacReducer } from "./Pacientes/reducers";
import { mobileReducer } from './Mobile/reducers'
import { consReducer } from './Consulta/reducers'


export const rootReducer = combineReducers ({
    auth:authReducer,
    psic:psicologoReducer,
    pac: pacReducer,
    mobile: mobileReducer
    cons: consReducer
})