const pool = require('../config/db');

const Telefone = {
  findAllByEstabelecimento: async (estabelecimento_id) => {
    const [rows] = await pool.query(
      'SELECT * FROM Telefone WHERE estabelecimento_id = ?',
      [estabelecimento_id]
    );
    return rows;
  },

  findById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM Telefone WHERE id = ?', [id]);
    return rows[0];
  },

  create: async ({ estabelecimento_id, numero }) => {
    const [result] = await pool.query(
      'INSERT INTO Telefone (estabelecimento_id, numero) VALUES (?, ?)',
      [estabelecimento_id, numero]
    );
    return { id: result.insertId, estabelecimento_id, numero };
  },

  update: async (id, { numero }) => {
    const [result] = await pool.query(
      'UPDATE Telefone SET numero = ? WHERE id = ?',
      [numero, id]
    );
    return result.affectedRows;
  },

  delete: async (id) => {
    const [result] = await pool.query('DELETE FROM Telefone WHERE id = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = Telefone;
