const { REACT_APP_API_URL: API_URL } = process.env;

export function getAllOrders() {
    return fetch(`${ API_URL }/order?includeItems=true`)
        .then(res => res.json());
}

export function getOrderById(id) {
    return fetch(`${ API_URL }/order/${ id }?includeItems=true&includeCustomer=true`)
        .then(res => res.json());
}

export function createOrder(order) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
    };
    return fetch(`${ API_URL }/order`, options)
        .then(res => res.json());
}