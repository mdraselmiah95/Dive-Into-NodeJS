const ticketCollection = require("./tickets");

// TODO: ticket selling controllers

exports.sellSingleTicket = (req, res) => {
  const { username, price } = req.body;
  const ticket = ticketCollection.create(username, price);
  res.status(201).json({
    message: "Ticket created successfully 🟢",
    ticket,
  });
};

exports.sellBulkTicket = (req, res) => {
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

exports.findByUsername = (req, res) => {
  const username = req.params.username;
  const tickets = ticketCollection.findByUsername(username);
  res.status(200).json({ items: tickets, total: tickets.length });
};

// TODO: update controller

exports.updateById = (req, res) => {
  const id = req.params.id;
  const ticket = ticketCollection.updateById(id, req.body);

  if (!ticket) {
    return res.status(404).json({ message: "404 not FOUND 💥" });
  }
  res.status(200).json(ticket);
};

exports.updateByUsername = (req, res) => {
  const username = req.params.username;
  const tickets = ticketCollection.updateBulk(username, req.body);
  res.status(200).json({ items: tickets, total: tickets.length });
};

// TODO: delete controller

exports.deleteById = (req, res) => {
  const id = req.params.id;
  const isDeleted = ticketCollection.deleteById(id);
  if (isDeleted) {
    return res.status(204).send();
  }
  res.status(400).json({ message: "Delete operation failed 💥" });
};

exports.deleteByUsername = (req, res) => {
  const username = req.params.username;
  ticketCollection.deleteBulk(username);
  res.status(204).send();
};

// TODO: draw controller

exports.drawWinners = (req, res) => {
  const wc = req.query.wc ?? 3;
  const winners = ticketCollection.draw(wc);
  res.status(200).json(winners);
};
