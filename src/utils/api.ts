

export const baseURL = 'http://localhost:8899';

function checkResponse(res: Response) {
	if (res.status === 204) {
		return Promise.resolve({});
	}

	const contentType = res.headers.get('content-type');
	if (contentType && contentType.includes('application/json')) {
		return res.json().then((data) => {
			if (res.ok) {
				return data;
			}
			return Promise.reject(
				new Error(
					res.ok ? `Ошибка: ${res.status}` : JSON.stringify(data)
				)
			);
		});
	}
	return Promise.reject(new Error(`Ошибка: ${res.status}`));
}

// eslint-disable-next-line no-undef
export function request(url: string, options?: RequestInit) {
	return fetch(url, options)
		.then(checkResponse)
		.catch((error) => {
			if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
				return Promise.reject(
					new Error('Ошибка сети: Не удалось выполнить запрос')
				);
			}
			return Promise.reject(new Error(error.message || error.toString()));
		});
}

