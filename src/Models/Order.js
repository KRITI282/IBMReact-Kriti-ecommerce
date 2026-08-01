export class Order {
    userId = ""
    totalAmount = ""
    shippingAddress = ""
    paymentMethod = "Online"  //cod
    transactionId = ""
    paymentStatus = "Pending" ///Paid/Failed
    orderStatus = "Pending" //Confirmed/Shipped/Delivered/Cancelled
    createdAt = Date.now()

}