import { FieldValues, useForm } from 'react-hook-form'

interface FormData {
    name: string;
    age: number
}

const Form = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>();
    
    
    const onSubmit = (data: FieldValues) => {
        console.log(data);
    }
    
    return (
        <form className='form p-5' onSubmit={handleSubmit(onSubmit)}>
            <div className="col">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id='name'
                    {...register('name', {required: true, minLength: 3})}
                />
                {errors.name?.type === 'required' && <span className='text-danger'>The name is required.</span>}
                {errors.name?.type === 'minLength' && <span className='text-danger'>The name must be at least 3 characters.</span>}

            </div>
            <div className="col">
                <label htmlFor="age" className="form-label">Age</label>
                <input
                    type="number"
                    className="form-control"
                    id='age'
                    {...register('age', {required: true, min: 18})}
                />
                {errors.age?.type === 'required' && <span className='text-danger'>Age is required.</span>}
                {errors.age?.type === 'min' && <span className='text-danger'>Minimum age must be at least 18</span>}
            </div>

            
            <button disabled={!isValid} className='btn btn-primary mt-3'>Submit</button>
        </form>
    );
}

export default Form