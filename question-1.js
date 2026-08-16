// Question #1: Shipping Cost Calculator

function calculateShippingCost(orders) {
  // เริ่มเขียนโค้ดตรงนี้

  for(let index in orders){
    const orderID = orders[index].orderId;

    if (orders[index].total >= 6000) {
      console.log(`Order ${orderID}: Shipping is free.`);
    } else if (orders[index].total === 3000) {
     console.log(`Order ${orderID}: Shipping cost is 250 Baht.`);
    } else {
      console.log(`Order ${orderID}: Shipping cost is 500 Baht.`);
    }
  }
}


// ตัวอย่างการใช้งาน
const orders = [
  {
    orderId: 1,
    total: 6000,
  },
  {
    orderId: 2,
    total: 3000,
  },
  {
    orderId: 3,
    total: 150,
  },
];


calculateShippingCost(orders);
// Order Id 1: "Shipping is free."
// Order Id 2: "Shipping cost is 250 Baht."
// Order Id 3: "Shipping cost is 500 Baht."
