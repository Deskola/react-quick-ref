import { useForm } from "react-hook-form";
import { categories } from "../../App";
import { FormEvent } from "react";

interface ExpenseFormData {
    description: string;
    amount: number;
    category: string
}

interface Props {
    onSubmiExpense: (expense: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmiExpense }: Props) => {
    const { register, handleSubmit, reset, formState: { errors, isValid} } = useForm<ExpenseFormData>();
    return (
        <form onSubmit={handleSubmit(data => {
            onSubmiExpense(data)
            reset()
        })}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input
                    type="text"
                    className="form-control"
                    id='description'
                    {...register('description', {required: true, minLength:3, maxLength: 50})}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input
                    type="number"
                    className="form-control"
                    id='amount'
                    { ...register('amount', {required: true, min:10})}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select id="category" className="form-select" {...register('category', {required: true})}>
                    <option value="">Select...</option>
                    {categories.map(category => <option key={category} value={category}>{ category}</option>)}
                </select>
            </div>

            <button disabled={!isValid} className="btn btn-primary">Submit</button>
        </form>
    );
}

export default ExpenseForm