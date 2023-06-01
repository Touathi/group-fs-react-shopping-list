import Axios from 'axios';
import Item from "../Item/Item";

function FoodList({ shoppingList, getFoodItems }) {
	const resetItems = () => {
		Axios.put("/food")
			.then((response) => {
				console.log(response);
				getFoodItems();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const deleteItems = () => {
		Axios.delete("/food")
			.then((response) => {
				console.log(response);
				getFoodItems();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<section>
			<div>
				<h3>List</h3>
				<button onClick={resetItems}>Reset</button>
				<button onClick={deleteItems}>Clear</button>
			</div>
			<div>
				<div>
					{shoppingList.map((item) => {
						<Item
							key={item.id}
							item={item}
							getFoodItems={getFoodItems}
						/>;
					})}
				</div>
			</div>
		</section>
	);
}

export default FoodList;
