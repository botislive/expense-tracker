import { useAtom } from "jotai"
import { expensesAtom,deleteExpenseAtom,filteredexpensesAtom } from "../atoms"

function ShowExpenses() {

    const[expenses]=useAtom(expensesAtom)
    const[,setdeleteExpense]=useAtom(deleteExpenseAtom)
    const[filteredexpenses]=useAtom(filteredexpensesAtom)

    console.log(expenses)

  return (
    <div>
        <div>
            <h1>The Expenses are:</h1>
        </div>

        <div>
            {filteredexpenses.map((expense) => (
                <div key={expense.id}>
                    <p>{expense.amount}</p>
                    <p>{expense.category}</p>
                    <button onClick={()=>setdeleteExpense(expense.id)}>Delete Expense</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ShowExpenses