const pool = require('../config/db');

const CategoriaTag = {
  findAllByCategoria: async (categoria_id) => {
    const [rows] = await pool.query(
      `SELECT Tag.*
       FROM Categoria_Tag ct
       JOIN Tag t ON ct.tag_id = t.id
       WHERE ct.categoria_id = ?`,
      [categoria_id]
    );
    return rows;
  },

  add: async (categoria_id, tag_id) => {
    const [result] = await pool.query(
      'INSERT INTO Categoria_Tag (categoria_id, tag_id) VALUES (?, ?)',
      [categoria_id, tag_id]
    );
    return result.affectedRows;
  },

  remove: async (categoria_id, tag_id) => {
    const [result] = await pool.query(
      'DELETE FROM Categoria_Tag WHERE categoria_id = ? AND tag_id = ?',
      [categoria_id, tag_id]
    );
    return result.affectedRows;
  }
};

module.exports = CategoriaTag;
