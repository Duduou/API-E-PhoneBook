const pool = require('../config/db');

const EstabelecimentoCategoria = {
  findAllByEstabelecimento: async (estabelecimento_id) => {
    const [rows] = await pool.query(
      `SELECT Categoria.*
       FROM Estabelecimento_Categoria ec
       JOIN Categoria c ON ec.categoria_id = c.id
       WHERE ec.estabelecimento_id = ?`,
      [estabelecimento_id]
    );
    return rows;
  },

  add: async (estabelecimento_id, categoria_id) => {
    const [result] = await pool.query(
      'INSERT INTO Estabelecimento_Categoria (estabelecimento_id, categoria_id) VALUES (?, ?)',
      [estabelecimento_id, categoria_id]
    );
    return result.affectedRows;
  },

  remove: async (estabelecimento_id, categoria_id) => {
    const [result] = await pool.query(
      'DELETE FROM Estabelecimento_Categoria WHERE estabelecimento_id = ? AND categoria_id = ?',
      [estabelecimento_id, categoria_id]
    );
    return result.affectedRows;
  }
};

module.exports = EstabelecimentoCategoria;
