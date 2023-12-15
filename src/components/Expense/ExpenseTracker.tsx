import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
    description: string;
    amount: string;
    category: string;
}
const ExpenseTracker = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>();
    const [expenses, setExpenses] = useState<Array<FormData>>([]);
    const [filterdCategory, setFilterdCategory] = useState('');
    
    const onSubmit = (data: FormData) => {
        setExpenses([...expenses, data]);
        console.log(expenses);        
    }

    const onDelete = (id: number) => {
        setExpenses(expenses.filter((expense, index) => index !== id));        
    }

    const visibleExpenses = filterdCategory
        ? expenses.filter(expense => expense.category === filterdCategory)
        : expenses;

    

    return (
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="col mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id='description'
                        {...register('description', { required: true, minLength: 3 })}
                        
                    />
                </div>
                <div className="col mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input
                        type="number"
                        className="form-control"
                        id='amount'
                        {...register('amount', { required: true, min: 10 })}
                    />
                </div>
                <div className="col mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select id="category" className="form-select" {...register('category', { required: true})}>
                        <option value=""></option>
                        <option value="Groceries">Groceries</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                    </select>
                </div>
                
                <button disabled={!isValid} className='btn btn-primary'>Submit</button>
            </form>
        
            <div className="col mt-3">
                <div className="col">            
                    <label htmlFor="category" className="form-label">Filter</label>
                    <select id="filterCategory" className="form-select" onChange={(event) => setFilterdCategory(event.target.value)
                    }>
                        <option value="">All Categories</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                    </select>
                </div>
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Category</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {visibleExpenses.map((item, index) =>
                                <tr key={index}>
                                    <td>{item.description}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.category}</td>
                                    <td><button type="button" onClick={() => onDelete(index)
                                    } className="btn btn-outline-danger">Delete</button></td>
                                </tr>
                             )
                            }
                            <tr>
                                <td>Total</td>
                                <td>{expenses.map(item => parseInt(item.amount)).reduce((a, b) => { return a + b; },0) }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ExpenseTracker