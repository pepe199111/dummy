fetch('../../../api/products/index.json')
    .then(res => res.json())
    .then(data => console.log(data.items));