// here's the actual function to get data in production
// there will be the actual connection to the db
export function get_data() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json());
}
