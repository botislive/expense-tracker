import { useAtom } from "jotai"
import { sumofExpensesAtom,sumofPendingExpensesAtom,filtermodeAtom } from "../atoms"
import Calendar from "./Calendar"
import DetailedSummary from "./DetailedSummary"

function Summary() {
    const[sumofExpenses]=useAtom(sumofExpensesAtom)
    const[sumofPendingExpenses]=useAtom(sumofPendingExpensesAtom)
    const[filtermode]=useAtom(filtermodeAtom)
    console.log(filtermode)

  return (
    <div>
           {filtermode==="all" && <div>
        <div>
            Summary is
        </div>
            <p>Total Expenses: {sumofExpenses}</p>
            <p>Total Pending Expenses: {sumofPendingExpenses}</p>
             
             <div>
                <Calendar/>
             </div>

             <div>
                <DetailedSummary/>
             </div>

        </div>
          
        }
    </div>
  )
}

export default Summary