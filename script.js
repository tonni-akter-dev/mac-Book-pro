function getValue(productId) {
    document.getElementById('default' + productId).innerText =0;
}


// memory part  starts here.......
document.getElementById('default-memory-cost').addEventListener('click', function () {
    getValue('Memory');
});
document.getElementById('default-storage-cost').addEventListener('click' ,function() {
    getValue('Storage');
});
document.getElementById('default-delivery-cost').addEventListener('click', function () {
    getValue('Delivery');
});
// update  memory storage and  delivery
function getUpdatePrice(productId , price) {
    document.getElementById('default' + productId).innerText = price;
    totalUpdatePrice();
}
document.getElementById('updateMemory').addEventListener('click', function () {
  getUpdatePrice('Memory',180);
});
document.getElementById('updateStorage').addEventListener('click' ,function() {
    getUpdatePrice('Storage',100);
});
document.getElementById('updateDelivery').addEventListener('click' ,function() {
   getUpdatePrice('Delivery' , 20);
});

// storage 3rd button............
document.getElementById('updateMoreStorage').addEventListener('click' ,function() {
    getUpdatePrice('Storage',180);
});

// total price ...............
function totalUpdatePrice() {
    const totalPrice = document.getElementById('totalPrice');
    const defaultPrice = parseInt(document.getElementById('defaultCost').innerText);
    const memoryPrice = parseInt(document.getElementById('defaultMemory').innerText);
    const storagePrice = parseInt(document.getElementById('defaultStorage').innerText);
    const deliveryCost = parseInt(document.getElementById('defaultDelivery').innerText);
    totalPrice.innerText = defaultPrice + memoryPrice + storagePrice + deliveryCost;
}
