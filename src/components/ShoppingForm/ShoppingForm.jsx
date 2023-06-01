import axios from 'axios'
import { useState } from 'react'

function ShoppingForm(props){
    let getFoodItems = props.getFoodItems

    const [nameInput, setNameInput] = useState('')
    const [quantityInput, setQuantityInput] = useState('')
    const [unitInput, setUnitInput] = useState('')


    const addToList = () => {
        axios.post('/food' ,{name: nameInput, quantity: quantityInput, unit: unitInput})
        .then((response)=> {
            console.log(response);
            getFoodItems()
            setNameInput('')
			setQuantityInput('')
			setUnitInput('')
        }).catch((err)=> {
            console.log(err);
        })


    }


    return (
		<form onSubmit={addToList}>
			<label>Name</label>
			<input
				value={nameInput}
				type="text"
				id="name"
                placeholder='What do you need to add?'
				onChange={(e) => setNameInput(e.target.value)}
			/>

			<label>Quantity</label>
			<input
				value={quantityInput}
				type="text"
				id="quantity"
                placeholder='How many do you need?'
				onChange={(e) => setQuantityInput(e.target.value)}
			/>

			<label>Unit</label>
			<input
				value={unitInput}
				type="text"
				id="unit"
                placeholder='Unit of measure'
				onChange={(e) => setUnitInput(e.target.value)}
			/>
            <button type='submit'>Add to list</button>
		</form>
	);


}

export default ShoppingForm;