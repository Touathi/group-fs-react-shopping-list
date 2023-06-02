import axios from 'axios'
import { useState } from 'react';


function Item({ item, getFoodItems }) {
	const updateItem = () => {
		axios
			.put(`/food/buy/${item.id}`)
			.then((response) => {
				getFoodItems();
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const deleteItem = () => {
		axios
			.delete(`/food/delete/${item.id}`)
			.then((response) => {
				getFoodItems();
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};


	//const [purchased, setPurchased] = useState[false]

	return (
		<div>
			<p>{item.name}</p>
			<p>
				{item.quantity} {item.unit}
			</p>
			<div>
				{item.purchased ?
					(<p>PURCHASED.</p>)
				:(<p>
					<button onClick={updateItem}>Buy</button>
					<button onClick={deleteItem}>Remove</button>
				</p>)}
				</div>
		</div>
	);
}

export default Item


