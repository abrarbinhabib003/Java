/*
Imagine you are in charge of managing ticket sales at the entrance of the theme park. Each visitor buys multiple tickets, and you need to calculate the total price based on the number of tickets sold.

Function: calculateTicketPrice
You need to write a function that calculates the total price given the number of tickets and the price per ticket.
*/

/*
Imagination:
You are the cashier at the ticket counter.
A family comes in and asks for 4 tickets. You use the calculateTicketPrice function like a calculator to multiply the number of tickets by the price and give them the total cost.
*/

function calculateTicketPrice(numberOfTickets, pricePerTicket) {
    return numberOfTickets * pricePerTicket;
}
let totalCost = calculateTicketPrice(4, 50);
console.log(`Total Ticket Price: $${totalCost}`);
// Output: Total Ticket Price: $200
