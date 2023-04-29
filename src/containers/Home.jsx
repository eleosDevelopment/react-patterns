import { SplitScreen } from "../components/SplitScreen.jsx";
import { ListItems } from "../components/ListItems.jsx";
import { SmallPersonListItem } from "../people/SmallPersonListItem.js";
import { LargePersonListItem } from "../people/LargePersonListItem.js";
import { SmallProductListItem } from "../products/SmallProductListItem.js";
import { LargeProductListItem } from "../products/LargeProductListItem.js";
import { NumberedList } from "../components/NumberedList.jsx";

const people = [{
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	name: 'Brenda Smith',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	name: 'Jane Garcia',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];


export function Home() {
  return (
    <section>
      <header>
        <h1>React Design Patterns</h1>
      </header>
      <div>
        <h4>Split Screen</h4>
        <SplitScreen />
      </div>
      <div>
        <h4>List Items</h4>
        <ListItems items={people} resourceName="person" itemComponent={SmallPersonListItem}/>
        <ListItems items={people} resourceName="person" itemComponent={LargePersonListItem}/>
				<NumberedList items={products} resourceName="product" itemComponent={SmallProductListItem}/>
				<ListItems items={products} resourceName="product" itemComponent={LargeProductListItem}/>
      </div>
    </section>
  );
}
