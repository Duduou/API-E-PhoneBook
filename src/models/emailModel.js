const pool = require('../config/db');

const Email = {
  findAllByEstabelecimento: async (estabelecimento_id) => {
    const [rows] = await pool.query(
      'SELECT * FROM Email WHERE estabelecimento_id = ?',
      [estabelecimento_id]
    );
    return rows;
  },

  findById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM Email WHERE id = ?', [id]);
    return rows[0];
  },

  create: async ({ estabelecimento_id, email }) => {
    const [result] = await pool.query(
      'INSERT INTO Email (estabelecimento_id, email) VALUES (?, ?)',
      [estabelecimento_id, email]
    );
    return { id: result.insertId, estabelecimento_id, email };
  },

  update: async (id, { email }) => {
    const [result] = await pool.query(
      'UPDATE Email SET email = ? WHERE id = ?',
      [email, id]
    );
    return result.affectedRows;
  },

  delete: async (id) => {
    const [result] = await pool.query('DELETE FROM Email WHERE id = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = Email;
