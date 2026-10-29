const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Datos iniciales de prueba para SENATI
let tickets = [
  { id: 1, usuario: "Juan Perez", area: "Sistemas", problema: "Mi laptop no enciende", estado: "Pendiente", fecha: "2026-10-28" },
  { id: 2, usuario: "Maria Gomez", area: "Redes", problema: "No tengo acceso a internet", estado: "Resuelto", fecha: "2026-10-27" }
];

// RUTA COMPLETA EXACTA QUE BUSCA EL FRONTEND
app.get('/api/tickets', (req, res) => {
  console.log("📥 Petición recibida en /api/tickets");
  res.json(tickets);
});

// Crear ticket
app.post('/api/tickets', (req, res) => {
  const { usuario, area, problema } = req.body;
  const nuevoTicket = {
    id: tickets.length + 1,
    usuario,
    area,
    problema,
    estado: "Pendiente",
    fecha: new Date().toISOString().split('T')[0]
  };
  tickets.push(nuevoTicket);
  res.status(201).json(nuevoTicket);
});

// Actualizar ticket
app.put('/api/tickets/:id', (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;
  const ticket = tickets.find(t => t.id === parseInt(id));
  if (ticket) {
    ticket.estado = estado;
    return res.json(ticket);
  }
  res.status(404).json({ error: "Ticket no encontrado" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor activo en http://localhost:${PORT}`);
});
