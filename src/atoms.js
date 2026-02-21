import { atom } from "jotai";
import {nanoid} from "nanoid";


export const expensesAtom =atom([])

export const addnewExpenseAtom = atom(null,(get,set,{amount,category})=>{
         const newExpense={
            id:nanoid(),
            amount,
            category,
            pending:true,
            date:new Date()
         }
         const currentExpenses=get(expensesAtom)
         set(expensesAtom,[newExpense,...currentExpenses])

})