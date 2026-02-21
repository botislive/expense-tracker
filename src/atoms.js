import { atom } from "jotai";
import {nanoid} from "nanoid";


export const expensesAtom =atom([])

export const filtermodeAtom = atom("all")

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

export const deleteExpenseAtom = atom(null,(get,set,id)=>{
        const currentExpenses=get(expensesAtom)
        set(expensesAtom,currentExpenses.filter((expense)=>expense.id!==id))
})


export const filteredexpensesAtom = atom((get)=>{
    const filter=get(filtermodeAtom)
    const expenses=get(expensesAtom)
    switch(filter){
        case "all":
            return expenses
        case "pending":
            return expenses.filter((expense)=>expense.pending)
        case "paid":
            return expenses.filter((expense)=>!expense.pending)
        case "tech":
            return expenses.filter((expense)=>expense.category==="tech")
        case "lifestyle":
            return expenses.filter((expense)=>expense.category==="lifestyle")
        case "finance":
            return expenses.filter((expense)=>expense.category==="finance")
        case "education":
            return expenses.filter((expense)=>expense.category==="education")
        default:
            return expenses

    }
})
