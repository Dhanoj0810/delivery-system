const timeElapsed = (startingTime) => {
  const currentTime = Date.now() / 1000;

  return currentTime - startingTime;
};

const print = (time, action, details = "") => {
  console.log(`[${time.toFixed(2)}s] ${action} ${JSON.stringify(details)}`);
};

const takeOrder = (time) => {
  const action = "Order received:";
  const id = Math.floor(Math.random() * 1000);
  const details = { orderId: id };

  print(timeElapsed(time), action, details);

  return details;
};

const prepareOrder = (startTime, orderStatus) => {
  print(timeElapsed(startTime), "Preparing food...");

  setTimeout(() => {
    orderStatus.foodDetails = "Burger & Fries";

    print(timeElapsed(startTime), "Food is ready:", orderStatus);

    pack(startTime, orderStatus);
  }, 3000);
};

const pack = (startTime, orderStatus) => {
  print(timeElapsed(startTime), "Packing order...");

  setTimeout(() => {
    orderStatus.packageDetails = "Packed in eco-friendly box";

    print(timeElapsed(startTime), "Order packed:", orderStatus);

    outForDelivery(startTime, orderStatus);
  }, 2000);
};

const outForDelivery = (startTime, orderStatus) => {
  print(timeElapsed(startTime), "Delivering order...");

  setTimeout(() => {
    orderStatus.deliveryDetails = "Delivered by John at 7:30 PM";

    print(timeElapsed(startTime), "Order packed:", orderStatus);
  }, 5000);
};

export const order = () => {
  const startTime = Math.floor(Date.now() / 1000);
  const orderDetails = takeOrder(startTime);

  prepareOrder(startTime, orderDetails);
};
