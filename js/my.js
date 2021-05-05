let products = [
    ["Iphone", "20000", "2000"], // 0
    ["Samsung", "30000", "2000"], // 1
    ["Xiaomi", "5000", "150"], //2
];


let fields = ['name', 'price', 'quantity'];

function getAll() {
    let html = '';
    for (let i = 0; i < products.length; i++) {
        html += '<tr>';
        html += '<td>';
        html += i + 1;
        html += '</td>';
        for (let j = 0; j < products[0].length; j++) {
            html += '<td>';
            html += products[i][j];
            html += '</td>';

        }
        html += '<td>';
        html += '<button onclick="removeProduct(' + i + ')" class="remove-product">Remove</button>';
        html += '<button onclick="updateProduct(' + i + ')" class="edit-product">Edit</button>';
        html += '</td>';
        html += '</tr>';
    }
    console.log(html)
    document.getElementById('list-product').innerHTML = html;
}

getAll();

function removeProduct(index) {
    if (confirm('Are you sure?')) {
        products.splice(index, 1);
        getAll();
    }
}

function add() {
    // lay gia tri name, price, quantity tu cac o input
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;

    let newProduct = [name, price, quantity];
    products.push(newProduct);

    //hien thi lai danh sach
    getAll();
    clear();
}

function clear() {
    for (let i = 0; i < fields.length; i++) {
        document.getElementById(fields[i]).value = '';
    }
}

function updateProduct(index) {
    // lay san pham can update
    let productUpdate = products[index];
    //hien thi thong tin len cac o input  cho nguoi dung sua
    for (let i = 0; i < fields.length; i++) {
        document.getElementById(fields[i]).value = productUpdate[i];
    }
    //  hien thi  nut edit
    document.getElementById('button-update-product').style.display = 'block';
    //an nut add
    document.getElementById('button-add-product').style.display = 'none';

}

function editProduct() {

    // lay duoc index cua san pham dang update

    // lay  du lieu tu cac o input
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;

    let newProduct = [name, price, quantity];

    // products[index] = newProduct ? ls lay duoc cai index?
    getAll();
    clear();
}
