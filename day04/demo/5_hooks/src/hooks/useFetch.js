import { useState, hooks } from "@odoo/owl"

const { useComponent, useEnv } = hooks

const useFetch = (url, params = {}) => {
	const comp = useComponent()
	const env = useEnv()
	console.log(comp);
	console.log(env);

	const loading = useState({ value: true });
	const data = useState({ value: null });
	const fetchUrl = async () => {
		const res = await fetch(url);
		const result = await res.json();
		loading.value = false;
		data.value = result;
	};

	return {
		fetchUrl,
		loading,
		data,
	};
};

export default useFetch;
