const ticketCollection = require("./tickets");

// TODO: ticket selling controllers

exports.sellSingleTicket = (req, res, next) => {
  const { username, price } = req.body;
  const ticket = ticketCollection.create(username, price);
  res.status(201).json({
    message: "Ticket created successfully 🟢",
    ticket,
  });
};

exports.sellBulkTicket = (req, res, next) => {
  const { username, price, quantity } = req.body;
  const tickets = ticketCollection.createBulk(username, price, quantity);
  res.status(201).json({
    message: "Tickets creates successfully 🟢",
    tickets,
  });
};

// TODO: Find tickets controller

exports.findAll = (req, res) => {
  const tickets = ticketCollection.find();
  res.status(200).json({ items: tickets, total: tickets.length });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  const ticket = ticketCollection.findById(id);
  if (!ticket) {
    return res.status(404).json({ message: "404 not FOUND 💥" });
  }
  res.status(200).json(ticket);
};
