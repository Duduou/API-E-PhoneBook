const pool = require('../config/db');

const Categoria = {
  findAll: async () => {
    const [rows] = await pool.query('SELECT * FROM Categoria');
    return rows;
  },

  findById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM Categoria WHERE id = ?', [id]);
    return rows[0];
  },

  create: async (dados) => {
    const { nome } = dados;
    const [result] = await pool.query('INSERT INTO Categoria (nome) VALUES (?)', [nome]);
    return { id: result.insertId, nome };
  },

  update: async (id, dados) => {
    const { nome } = dados;
    const [result] = await pool.query('UPDATE Categoria SET nome = ? WHERE id = ?', [nome, id]);
    return result.affectedRows;
  },

  delete: async (id) => {
    const [result] = await pool.query('DELETE FROM Categoria WHERE id = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = Categoria;
