function verbNoun(){

//declararion
const TICKET_PRICE = 250.00;
const ADMIN_FEE = 50.00;
let ticketQty = Number(document.getElementById("price").value);
let subtotal = (TICKET_PRICE * ticketQty);
let totalprice = (TICKET_PRICE * ticketQty) + ADMIN_FEE;


document.getElementById("subtotal").value = subtotal;
document.getElementById("fee").value = ADMIN_FEE;
document.getElementById("total").value = totalprice;



}