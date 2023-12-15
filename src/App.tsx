import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";
import Expandable from "./components/Expandable";
import Navbar from "./components/Cart/Navbar";
import Cart from "./components/Cart/Cart";
import Shopping from "./components/Shopping/Shopping";
import Form from "./components/Form/Form";
import ExpenseTracker from "./components/Expense/ExpenseTracker";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ProductList from "./components/Product/ProductList";
import UserList from "./components/Users/UserList";
import PostList from "./components/Users/PostList";

export const categories = ["Groceries", "Utilities", "Entertainment"]

function App() {
  const [isVisible, setIsVisible] = useState(false);  
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John'
    }
  });

  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  });

  const [cart, setCart] = useState({
    discount: .1,
    items: [
      { id: 1, title: 'P1', qnt: 1 },
      { id: 2, title: 'P2', qnt: 1 },
    ]
  });

  const [bugs, setBugs] = useState([
      { id: 1, title: 'B1', fixed: false},
      { id: 2, title: 'B2', fixed: false},
  ]);

  const [tags, setTags] = useState([
      'happy',
      'cheerful',
  ]);

  
  const [selectedCategory, setSelectedCategory] =useState('');
  const [expenses, setExpenses] = useState([
    {id: 1, description: 'description 1', amount: 200, category: 'Utilities'},
    {id: 2, description: 'description 2', amount: 100, category: 'Entertainment'},
    {id: 3, description: 'description 3', amount: 300, category: 'Entertainment'},
    {id: 4, description: 'description 4', amount: 400, category: 'Groceries'},
    {id: 5, description: 'description 5', amount: 500, category: 'Utilities'},
  ]);

  const visibleExpense = selectedCategory ? expenses.filter(expense => expense.category === selectedCategory) : expenses;
  const [cartItems, setCartItems] = useState(['Product 1', 'Product 2', 'Product 3']);

  const [category, setCategory] = useState<string>('');

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: 'Bob' } });
    setPizza({ ...pizza, toppings: [...pizza.toppings, 'Meat'] }); 
    setCart({ ...cart, items: cart.items.map(item => item.id === 1 ? { ...item, qnt: item.qnt + 1 } : item) })
    setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true } : bug))
    // Add
    setTags([...tags, 'joy']);

    // Remove
    setTags(tags.filter(tag => tag !== 'happy'))

    // update
    setTags(tags.map(tag => tag === 'happy' ? 'Joy' : tag))
  }
 
  return (
    <div>

      {/* <Expandable maxChar={50}>Lorem ipsum </Expandable> */}

      {/* {isVisible &&
        <Alert onClose={() => setIsVisible(false)}>
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.          
        </Alert>
      }
      <Button color="primary" onClicked={() => setIsVisible(true)}>Show alert</Button> */}
      {/* <Like onClicked={() => console.log('clicked')} /> */}

      {/* <Navbar cartCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
       */}
      
      {/* <Shopping /> */}

      {/* <Form /> */}

      {/* <ExpenseTracker /> */}
      {/* <div className="mb-5">
        <ExpenseForm onSubmiExpense={(expense) => setExpenses([...expenses, { ...expense, id: expenses.length + 1}])}  />
      </div>

      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      </div>
      
      <ExpenseList expenses={visibleExpense} onDelete={(id) => setExpenses(expenses.filter(expense => expense.id !== id)) } /> */}

      {/* <div className="mb-3">
        <select id="category" className="form-select" onChange={(event) => setCategory(event.target.value)}>
          <option value=""></option>
          <option value="Favorite">Favorite</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <ProductList category={ category} /> */}
      <PostList />
    </div>
  )
}

export default App;