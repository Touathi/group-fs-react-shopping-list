import axios from 'axios'


function Item({ item, getFoodItems }) {
	const updateItem = () => {
		axios
			.put(`/food/${item.id}`)
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
			.delete(`/food/${item.id}`)
			.then((response) => {
				getFoodItems();
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<p>{item.name}</p>
			<p>
				{item.quantity} {item.unit}
			</p>

			<p>
				<button onClick={updateItem}>Buy</button>
				<button onClick={deleteItem}>Remove</button>
			</p>
		</div>
	);
}

export default Item


