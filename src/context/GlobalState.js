import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
// initial state
const initialState = {
    transactions: [
        {id: 1, transactionType: 'shopping', amount: -100},
        {id: 2, transactionType: 'travel', amount: -150},
        {id: 3, transactionType: 'food', amount: -300},
        {id: 4, transactionType: 'rent', amount: -1500},
        {id: 5, transactionType: 'salary', amount: 50000}
    ]
}

// create context
export const GlobalContext = createContext(initialState);

// provider context
export const GlobalProvider = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions : state.transactions,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider >
    );
}