import React, { useState, useEffect } from 'react';

function App() {
  const [rol, setRol] = useState('usuario'); 
  const [tickets, setTickets] = useState([]);
  const [usuario, setUsuario] = useState('');
  const [area, setArea] = useState('');
  const [problema, setProblema] = useState('');
  const [mensaje, setMensaje] = useState('');

  const obtenerTickets = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/tickets');
      if (res.ok) {
        const data = await res.json();
        setTickets(Array.isArray(data) ? data : []);
      } else {
        setTickets([]);
      }
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
      setTickets([]); 
    }
  };

  useEffect(() => {
    obtenerTickets();
  }, []);

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, area, problema })
      });
      if (res.ok) {
        setMensaje("⚡ TRANSMISIÓN EXITOSA: Incidencia registrada en el núcleo TI.");
        setUsuario('');
        setArea('');
        setProblema('');
        obtenerTickets();
        setTimeout(() => setMensaje(''), 5000);
      }
    } catch (error) {
      console.error("Error al enviar ticket:", error);
    }
  };

  const actualizarEstado = async (id, nuevoEstado) => {
    try {
      await fetch(`http://localhost:5000/api/tickets/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: nuevoEstado })
      });
      obtenerTickets();
    } catch (error) {
      console.error("Error al actualizar estado:", error);
    }
  };

  const estilos = {
    contenedor: {
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      padding: '40px 20px',
      backgroundColor: '#0a0f1d',
      backgroundImage: 'radial-gradient(circle at 50% 50%, #141f36 0%, #0a0f1d 100%)',
      color: '#e2e8f0',
      minHeight: '100vh',
      boxSizing: 'border-box'
    },
    header: {
      background: 'linear-gradient(135deg, #0052cc 0%, #002f6c 100%)',
      padding: '30px',
      borderRadius: '16px',
      marginBottom: '30px',
      textAlign: 'center',
      boxShadow: '0 0 25px rgba(0, 82, 204, 0.4)',
      border: '1px solid rgba(0, 132, 255, 0.2)'
    },
    titulo: {
      margin: '0 0 10px 0',
      fontSize: '2.5rem',
      fontWeight: '800',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      textShadow: '0 0 10px rgba(0, 210, 255, 0.5)',
      color: '#ffffff'
    },
    subtitulo: {
      margin: 0,
      color: '#00d2ff',
      fontSize: '1.1rem',
      letterSpacing: '1px'
    },
    selectorContenedor: {
      marginBottom: '30px',
      padding: '15px',
      backgroundColor: 'rgba(20, 31, 54, 0.6)',
      borderRadius: '12px',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)'
    },
    btnRol: (activo, tipo) => ({
      padding: '12px 24px',
      margin: '0 10px',
      fontSize: '0.95rem',
      fontWeight: 'bold',
      backgroundColor: activo ? (tipo === 'user' ? '#0070f3' : '#00e676') : 'transparent',
      color: activo ? '#ffffff' : '#94a3b8',
      border: activo ? 'none' : '2px solid rgba(148, 163, 184, 0.3)',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: activo ? `0 0 15px ${tipo === 'user' ? 'rgba(0, 112, 243, 0.6)' : 'rgba(0, 230, 118, 0.6)'}` : 'none',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    }),
    panel: {
      backgroundColor: 'rgba(15, 23, 42, 0.8)',
      padding: '35px',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      backdropFilter: 'blur(12px)'
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      backgroundColor: '#070b14',
      border: '1px solid rgba(0, 210, 255, 0.2)',
      borderRadius: '8px',
      color: '#ffffff',
      fontSize: '1rem',
      outline: 'none',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box'
    },
    btnEnviar: {
      padding: '14px',
      backgroundColor: '#0052cc',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      boxShadow: '0 0 15px rgba(0, 82, 204, 0.5)',
      transition: 'all 0.3s ease'
    },
    tabla: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: '0 8px',
      marginTop: '20px'
    },
    th: {
      backgroundColor: 'rgba(0, 82, 204, 0.2)',
      color: '#00d2ff',
      padding: '16px',
      fontWeight: '600',
      textTransform: 'uppercase',
      fontSize: '0.85rem',
      letterSpacing: '1px',
      textAlign: 'center',
      borderBottom: '2px solid #0052cc'
    },
    tr: {
      backgroundColor: 'rgba(25, 35, 58, 0.4)',
      transition: 'all 0.2s ease',
    },
    td: {
      padding: '16px',
      textAlign: 'center',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      color: '#cbd5e1'
    },
    badge: (estado) => {
      let bg = 'rgba(255, 193, 7, 0.15)';
      let color = '#ffc107';
      let border = '1px solid rgba(255, 193, 7, 0.4)';
      let shadow = '0 0 10px rgba(255, 193, 7, 0.2)';
      
      if (estado === 'En Proceso') {
        bg = 'rgba(0, 210, 255, 0.15)';
        color = '#00d2ff';
        border = '1px solid rgba(0, 210, 255, 0.4)';
        shadow = '0 0 10px rgba(0, 210, 255, 0.2)';
      } else if (estado === 'Resuelto') {
        bg = 'rgba(0, 230, 118, 0.15)';
        color = '#00e676';
        border = '1px solid rgba(0, 230, 118, 0.4)';
        shadow = '0 0 10px rgba(0, 230, 118, 0.2)';
      }
      return {
        padding: '6px 14px',
        borderRadius: '20px',
        backgroundColor: bg,
        color: color,
        border: border,
        fontWeight: 'bold',
        fontSize: '0.85rem',
        display: 'inline-block',
        boxShadow: shadow
      };
    },
    btnAccion: (tipo) => ({
      padding: '8px 14px',
      margin: '0 4px',
      backgroundColor: tipo === 'proceso' ? 'rgba(0, 210, 255, 0.1)' : 'rgba(0, 230, 118, 0.1)',
      color: tipo === 'proceso' ? '#00d2ff' : '#00e676',
      border: `1px solid ${tipo === 'proceso' ? '#00d2ff' : '#00e676'}`,
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '0.85rem',
      transition: 'all 0.2s'
    })
  };

    return (
    <div style={estilos.contenedor}>
      {/* Encabezado Principal */}
      <header style={estilos.header}>
        <h1 style={estilos.titulo}>Mesa de Ayuda TI</h1>
        <p style={estilos.subtitulo}>SENATI // Sistema Avanzado de Infraestructura y Soporte Técnico</p>
      </header>

      {/* Selector de Roles */}
      <div style={estilos.selectorContenedor}>
        <span style={{ fontWeight: '600', marginRight: '15px', color: '#94a3b8', fontSize: '0.95rem' }}>NIVEL DE ACCESO ACCIONADO:</span>
        <button 
          onClick={() => setRol('usuario')} 
          style={estilos.btnRol(rol === 'usuario', 'user')}
        >
          👤 Terminal Usuario
        </button>
        <button 
          onClick={() => setRol('admin')} 
          style={estilos.btnRol(rol === 'admin', 'admin')}
        >
          ⚙️ Núcleo Administrador
        </button>
      </div>

      {/* ================= PANEL DE USUARIO ================= */}
      {rol === 'usuario' && (
        <div style={estilos.panel}>
          <h2 style={{ marginTop: 0, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', color: '#ffffff' }}>Abrir Ticket de Soporte Técnico</h2>
          {mensaje && <p style={{ color: '#00e676', fontWeight: 'bold', textShadow: '0 0 8px rgba(0, 230, 118, 0.4)' }}>{mensaje}</p>}
          <form onSubmit={manejarEnvio} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '600px', marginTop: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>Identificación del Colaborador / Alumno:</label>
              <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} required style={estilos.input} placeholder="Ej. Juan Pérez" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>Área Operativa / Nro. Aula:</label>
              <input type="text" value={area} onChange={(e) => setArea(e.target.value)} required style={estilos.input} placeholder="Ej. Laboratorio 301" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>Descripción del Incidente Tecnológico:</label>
              <textarea value={problema} onChange={(e) => setProblema(e.target.value)} required style={{ ...estilos.input, height: '120px', resize: 'vertical' }} placeholder="Detalla el problema con el hardware o software..." />
            </div>
            <button type="submit" style={estilos.btnEnviar}>📡 Transmitir Incidencia</button>
          </form>
        </div>
      )}

      {/* ================= PANEL DE ADMINISTRADOR ================= */}
      {rol === 'admin' && (
        <div style={estilos.panel}>
          <h2 style={{ marginTop: 0, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', color: '#ffffff' }}>Consola de Operaciones Core TI</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Monitoreo y resolución de anomalías del campus en tiempo real:</p>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={estilos.tabla}>
              <thead>
                <tr>
                  <th style={estilos.th}>ID</th>
                  <th style={estilos.th}>Operador</th>
                  <th style={estilos.th}>Zona</th>
                  <th style={estilos.th}>Anomalía Reportada</th>
                  <th style={estilos.th}>Registro Temporal</th>
                  <th style={estilos.th}>Estado Módulo</th>
                  <th style={estilos.th}>Protocolos de Acción</th>
                </tr>
              </thead>
              <tbody>
                {tickets.length > 0 ? (
                  tickets.map(ticket => (
                    <tr key={ticket.id} style={estilos.tr}>
                      <td style={{ ...estilos.td, fontWeight: 'bold', color: '#00d2ff' }}>#{ticket.id}</td>
                      <td style={estilos.td}>{ticket.usuario}</td>
                      <td style={estilos.td}>
                        <span style={{ backgroundColor: '#111c30', padding: '4px 8px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
                          {ticket.area}
                        </span>
                      </td>
                      <td style={{ ...estilos.td, textAlign: 'left' }}>{ticket.problema}</td>
                      <td style={estilos.td}>{ticket.fecha}</td>
                      <td style={estilos.td}>
                        <span style={estilos.badge(ticket.estado)}>
                          {ticket.estado}
                        </span>
                      </td>
                      <td style={estilos.td}>
                        <button onClick={() => actualizarEstado(ticket.id, 'En Proceso')} style={estilos.btnAccion('proceso')}>⚙️ Procesar</button>
                        <button onClick={() => actualizarEstado(ticket.id, 'Resuelto')} style={estilos.btnAccion('resolver')}>✅ Resolver</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" style={{ padding: '30px', textAlign: 'center', color: '#64748b' }}>
                      🛰️ SISTEMA LIMPIO: No se detectan anomalías activas en la red.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
