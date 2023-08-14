// here's the mock, we only care about the data
let seeded_data: unknown;

export async function get_data() {
	return seeded_data;
}

export function seed(obj: unknown) {
	seeded_data = obj;
}
