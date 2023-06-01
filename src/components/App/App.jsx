import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx';
import FoodList from '../FoodList/FoodList.jsx';


function App() {
    const [shoppingList, setShoppingList] = useState([])

    useEffect(()=>{
        getFoodItems()

    },[])


    const getFoodItems = () =>{
        axios({
            method: 'GET',
            url: '/food'
        }).then(response => {
            setShoppingList(response.data)
        }).catch(err => {
            console.log(err)
        })


    }
    return (
		<div className="App">
			<Header />
			<main>
				<ShoppingForm getFoodItems={getFoodItems} />
				<FoodList
					shoppingList={shoppingList}
					getFoodItems={getFoodItems}
				/>
			</main>
		</div>
	);
}

export default App;
