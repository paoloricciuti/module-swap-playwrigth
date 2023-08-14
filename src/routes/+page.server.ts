import { get_data } from '$db/get-data';
export async function load() {
	// we load the data from $db/get-data. Notice we don't
	// care about the actual implementation we just want the data
	const data = await get_data();
	return data;
}
