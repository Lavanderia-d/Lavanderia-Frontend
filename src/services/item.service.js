const { REACT_APP_API_URL: API_URL } = process.env;

export function createItem(item) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    };
    return fetch(`${ API_URL }/orderitem`, options)
        .then(res => res.json());
}

export function updateItem(id, item) {
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    };
    return fetch(`${ API_URL }/orderitem/${ id }`, options)
        .then(res => res.json());
}

export function deleteItem(id) {
    const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return fetch(`${ API_URL }/orderitem/${ id }`, options)
        .then(res => res.json());
}