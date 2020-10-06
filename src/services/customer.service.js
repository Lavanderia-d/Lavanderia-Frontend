const { REACT_APP_API_URL: API_URL } = process.env;

export function createCustomer(customer) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer)
    };
    return fetch(`${ API_URL }/customer`, options)
        .then(res => res.json());
}