# **`Floresca Threads`**
*The face of the company*


---
 <br />
 
## `What is it?`
Floresca Threads is a custom garment company that prides itself on customization of garments and the sale of custom accessories. This page is a storefront for the business complete with a working shopping cart and a way to send an email through a form to the business  
> To find the brains of this project (The Backend) please go here: [GitHub Repo](https://github.com/dfloresca/FlorescaThreadsBack)

## Deployment
1. Fork and clone the repository
2. create `.env`
3. Set `NEXT_PUBLIC_SERVER_URL`=`Backend Server location` either `localhost:xxxx` or aURL
4. `npm run dev` here and on your backend as well

## WireFrame
![WireFrame](/public/wireframe.png)
## Screenshots

## Code Snippets
<details>

<summary> Email Form </summary>

This code will take the data from the form and send it to our backend server where it will then generate an email and send it to the business. Afterwards, a message will appear indicating success or failure. Form can be updated for new or other data for the message. Make sure to update the backend if any new inputs are generated.
```JavaScript
const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [result, setResult] = useState(null);


    const sendEmail = event => {
        event.preventDefault();
        axios
            .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/send`, { ...state })
            .then(response => {
                setResult(response.data);
                setState({
                    name: '', 
                    email: '', 
                    subject: '', 
                    message: '' 
                });
            })
            .catch(() => {
                setResult({ success: false, message: 'Something went wrong. Try again later'});
            })
        
    }

    const onInputChange = event => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    };

    return (
        <div className={styles.formDiv}>
            {result && (
                <p className={`${result.success ? 'success' : 'error'}`}>
                    {result.message}
                </p>
            )}
            <h1 className={styles.messageUs}>Send us a Message</h1>
            <form className={styles.contactForm} onSubmit={sendEmail}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={state.name}
                        placeholder="Enter your full name"
                        onChange={onInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        value={state.email}
                        placeholder="Enter your email"
                        onChange={onInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        type="text"
                        name="subject"
                        value={state.subject}
                        placeholder="Enter subject"
                        onChange={onInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="message"
                        value={state.message}
                        rows="3"
                        placeholder="Enter your message"
                        onChange={onInputChange}
                    />
                </Form.Group>
                <div className={styles.buttons}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
```

</details>

<details>
<summary>Cart Context</summary>

 The following code is what creates the shopping cart and provides the logic for adding and removing items from the cart. 

```JavaScript
export const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
});

function cartReducer(state, action) {
    console.log('Current state:', state);
    console.log('Current action:', action);
    let updatedItems = [...state.items];
    let existingCartItemIndex;
    let existingItem;
    let updatedItem;

    if (action.type === 'ADD_ITEM') {
        existingCartItemIndex = state.items.findIndex(item => item._id === action.item._id);
        existingItem = state.items[existingCartItemIndex];
        const quantityToAdd = Number(action.item.quantity) || 1;
        if (existingItem) {
            updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + quantityToAdd
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat({ ...action.item, quantity: quantityToAdd });
        }
        const newTotalAmount = (state.totalAmount + action.item.price * quantityToAdd).toFixed(2);
        return {
            items: updatedItems,
            totalAmount: parseFloat(newTotalAmount)
        };
    }

    if (action.type === 'INCREASE_QUANTITY') {
        existingCartItemIndex = state.items.findIndex(item => item._id === action.id);
        existingItem = state.items[existingCartItemIndex];
        updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + 1
        };
        updatedItems[existingCartItemIndex] = updatedItem;
        const newTotalAmount = (state.totalAmount + existingItem.price).toFixed(2);
        return {
            items: updatedItems,
            totalAmount: parseFloat(newTotalAmount)
        };
    }

    if (action.type === 'DECREASE_QUANTITY') {
        existingCartItemIndex = state.items.findIndex(item => item._id === action.id);
        existingItem = state.items[existingCartItemIndex];
        if (existingItem.quantity > 1) {
            updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity - 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
            const newTotalAmount = (state.totalAmount - existingItem.price).toFixed(2);
            return {
                items: updatedItems,
                totalAmount: parseFloat(newTotalAmount)
            };
        } else {
            updatedItems = state.items.filter(item => item._id !== action.id);
            const newTotalAmount = (state.totalAmount - existingItem.price).toFixed(2);
            return {
                items: updatedItems,
                totalAmount: parseFloat(newTotalAmount)
            };
        }
    }

    return state;
}

export function CartContextProvider({ children }) {
    let [cart, dispatchCartAction] = useReducer(cartReducer, { items: [], totalAmount: 0 });

    const handleAddToCart = useCallback((item) => {
        console.log('Adding item:', item);
        dispatchCartAction({ type: 'ADD_ITEM', item: item });
    }, [])

    const removeItemHandler = useCallback((id) => {
        dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
    }, []);

    const increaseQuantity = useCallback((id) => {
        dispatchCartAction({ type: 'INCREASE_QUANTITY', id: id });
    }, []);

    const decreaseQuantity = useCallback((id) => {
        dispatchCartAction({ type: 'DECREASE_QUANTITY', id: id });
    }, []);

    let contextValue = {
        items: cart.items,
        totalAmount: cart.totalAmount,
        addItem: handleAddToCart,
        removeItem: removeItemHandler,
        increaseQuantity: increaseQuantity,
        decreaseQuantity: decreaseQuantity
    };

    return (
        <CartContext.Provider value={contextValue}>
            {console.log('Current context value:', contextValue)}
            {children}
        </CartContext.Provider>
    );
}
```
</details>

<details> 
<summary> Tabular logic for profile page</summary>

Unused code for creating a tabular profile page, will be implemented in future versions as app develops
JavaScript
```JavaScript
import { useState } from "react";
import "./App.css";

export default function App() {
  const [state, setState] = useState(1);

  const action = (index) => {
    setState(index);
  };

  return (
    <div className="App">
      <div className="box">
        <div className="tabs">
          <div
            onClick={() => action(1)}
            className={`${state === 1 ? "tab active-tab" : "tab"}`}
          >
            Account Information
          </div>
          <div
            onClick={() => action(2)}
            className={`${state === 2 ? "tab active-tab" : "tab"}`}
          >
            Measurements
          </div>
          <div
            onClick={() => action(3)}
            className={`${state === 3 ? "tab active-tab" : "tab"}`}
          >
            Purchase History{" "}
          </div>
        </div>
        {/* contents */}
        <div className="contents">
          <div
            className={`${state === 1 ? "content active-content" : "content"}`}
          >
            <h2> account Info:</h2>

            <ul>
              <h5>User Name:</h5>
              <h5>First Name:</h5>
              <h5>Last Name:</h5>
              <h5>Email:</h5>
              </ul>
          </div>

          <div
            className={`${state === 2 ? "content active-content" : "content"}`}
          >
            <h2> measurements:</h2>

            <ul>
            <h5>User Name:</h5>
            <h5>Bust:</h5>
            <h5>Chest:</h5>
            <h5>Waist:</h5>
            <h5>Shoulder Width:</h5>
            </ul>
          </div>

          <div
            className={`${state === 3 ? "content active-content" : "content"}`}
          >
            <h2> recently purchased items :</h2>

            <ul>
            <h5>Custom Wedding Dress</h5>
            <h5>Custom Children Holloween Costume</h5>
            <h5>Christmas Family Pajama Set</h5>
            <h5>Leather Anime Theme Jacket</h5>
            <h5>Floral Themed Sundress</h5>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
```

CSS
```css
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

.box{
  border: 2px solid rgb(7, 6, 6);
  width: 400px;
  margin:auto;
  margin-top: 50px;
}

.tabs{
  display:flex;
  justify-content: space-between;
}

.tab{
  background: #e67d7d ;
  flex: 1;
  padding: 10px;
  text-align: center;
  border:1px solid rgb(6, 6, 6);
  border-top: none;
  cursor: pointer;
  position: relative;
}
 .active-tab {
  border: none;
  background: #fff;
 }

 .active-tab::after{
  border-top:  2px solid rgb(49, 225, 33);
  content: '';
  position: absolute;
  top: 0;
  left:0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: initial;
  animation:new 0.5s;
 }

 @keyframes new {
  from{
    top:50px;
    left:0;
    right:0;
    background: grey;
  }
  to{
    top:0px;
    left:0;
    right:0;
    border-top: 2px solid rgb(80, 56, 56);
  }
 }

 .contents {
  position: relative;
 }

 .content {
  display: none;
  position: relative;
 }

 .active-content {
  display: block;
  margin-left:  10px;
  margin-right: 10px;
  transition: all 1s ease-in-out;
  animation: example 0.3s;
 }


 @keyframes example {
  from{
    margin: 0;
  }
  to{
    margin-left: 10px;
  }
 }
```
</details>

## Team
The Floresca Threads storefront was built by:  
- [Daniel Floresca](https://github.com/dfloresca)  
- [Susan Stephens](https://github.com/Nimsey)  
- [Darren Gardner](https://github.com/DGWonKanobi)
