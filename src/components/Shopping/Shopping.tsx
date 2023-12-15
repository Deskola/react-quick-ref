import { FormEvent, useState } from "react"

const Shopping = () => {
    const [formData, setFormData] = useState({
        
        description: '',
        amount: '',
        category: ''
    });
    const [shoppingItems, setShoppingItems] = useState<Array<{description: string, amount: string, category: string}>>([]);
    const [filterCategory, setFilterCategory] = useState('');

    const  handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        console.log(formData);
        setShoppingItems([...shoppingItems, formData]);
        console.log(shoppingItems);
        
    }

  return (
      <>
          <div className="col p-3 mb-5">
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                      <input
                          type="text"
                          className="form-control"
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={(event) => setFormData({...formData, description: event.target.value})}
                      />
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                      <input
                          type="number"
                          className="form-control"
                          name="amount" id="amount"
                          value={formData.amount}
                          onChange={(event) => setFormData({...formData, amount: event.target.value})}
                      />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                      <select
                          className="form-select"
                          name="category" id="category"
                          value={formData.category}
                          onChange={(event) => setFormData({...formData, category: event.target.value})}
                      >
                        <option value=""></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>    
              </form>
          </div> 
          <div className="col p-3">
              <div>
                  <div className="mb-3">
                    <label htmlFor="filter" className="form-label">Filter</label>
                      <select
                          className="form-select"
                          value={filterCategory}
                          onChange={(event) => {
                              setFilterCategory(event.target.value)
                              setShoppingItems(shoppingItems.filter(item => item.category === event.target.value))
                          }}
                      >
                        <option value=""></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
              </div>
              <div>
                  <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Description</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Category</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      {shoppingItems.map((item, index) =>
                          <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item.description}</td>
                              <td>{item.amount}</td>
                              <td>{item.category}</td>
                              <td><button className="btn btn-danger small" onClick={() => {
                                  shoppingItems.splice(index, 1)
                                  setShoppingItems(shoppingItems)
                              }}>Delete</button></td>
                          </tr>)}
                    </tbody>
                </table>
              </div>
          </div>
      </>
  )
}

export default Shopping