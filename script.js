function getValue(productId) {
    document.getElementById('default' + productId).innerText = 0;
    totalUpdatePrice();
}
function getUpdatePrice(productId , price) {
    document.getElementById('default' + productId).innerText = price;
    totalUpdatePrice();
}


// memory part  starts here.......
document.getElementById('default-memory-cost').addEventListener('click', function () {
    getValue('Memory');
});

document.getElementById('updateMemory').addEventListener('click', function () {
    getUpdatePrice('Memory',180);
  });
// ........................storage button................
document.getElementById('default-storage-cost').addEventListener('click' ,function() {
    getValue('Storage');
});
document.getElementById('updateStorage').addEventListener('click' ,function() {
    getUpdatePrice('Storage',100);
});
document.getElementById('updateMoreStorage').addEventListener('click' ,function() {
    getUpdatePrice('Storage',180);
});
// delivery button..............................
document.getElementById('default-delivery-cost').addEventListener('click', function () {
    getValue('Delivery');
});
document.getElementById('updateDelivery').addEventListener('click' ,function() {
    getUpdatePrice('Delivery' , 20);
 });

// total price ...............
function totalUpdatePrice(isAdd) {
    const totalPrice = document.getElementById('totalPrice');
const defaultPrice = parseInt(document.getElementById('defaultCost').innerText);
const memoryPrice = parseInt(document.getElementById('defaultMemory').innerText);
    const storagePrice = parseInt(document.getElementById('defaultStorage').innerText);
    const deliveryCost = parseInt(document.getElementById('defaultDelivery').innerText);
        totalPrice.innerText = defaultPrice + memoryPrice + storagePrice + deliveryCost;
    let finalTotal = parseInt(document.getElementById('final-total').innerText = totalPrice.innerText);
    return finalTotal;
}

// cupon code part here............................
document.getElementById('apply').addEventListener('click', function () {
    const getInputValue = document.getElementById('promo-code');
    const getInputText = getInputValue.value;
    // console.log(getInputText);
    if (getInputText == 'stevekaku') {
        console.log('hi');
          let finalTotal = finalTotal / 20;
    }
    else {
   alert ('get promo code or pay total price')
        }


    });