import React from 'react'

interface Expense {
    id: number;
    description: string;
    amount: string;
    category: string
}
interface Props{
    expenses: Expense[];
    onDelete: (id: number) => void;
}
const ExpenseList = ({ expenses, onDelete }: Props) => {
    if (expenses.length === 0) return <p>No expenses yet. Luck you</p>
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th></th>
                </tr>                    
            </thead>
            <tbody>
                {expenses.map(expense => 
                    <tr key={expense.id}>
                        <td>{expense.description}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.category}</td>
                        <td>
                            <button
                                className="btn btn-outline-danger"
                                onClick={() => onDelete(expense.id)}
                            >Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>KES{ expenses.reduce((accumulate, expense) => accumulate + parseInt(expense.amount), 0).toFixed(2) }</td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
  )
}

export default ExpenseList