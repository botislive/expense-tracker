import { useAtom } from "jotai"
import { expensesAtom } from "../atoms"

function ShowExpenses() {

    const[expenses]=useAtom(expensesAtom)
    console.log(expenses)

  return (
    <div>ShowExpenses</div>
  )
}

export default ShowExpenses