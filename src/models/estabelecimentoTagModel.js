const pool = require('../config/db');

const EstabelecimentoTag = {
  findAllByEstabelecimento: async (estabelecimento_id) => {
    const [rows] = await pool.query(
      `SELECT Tag.*
       FROM Estabelecimento_Tag et
       JOIN Tag t ON et.tag_id = t.id
       WHERE et.estabelecimento_id = ?`,
      [estabelecimento_id]
    );
    return rows;
  },

  add: async (estabelecimento_id, tag_id) => {
    const [result] = await pool.query(
      'INSERT INTO Estabelecimento_Tag (estabelecimento_id, tag_id) VALUES (?, ?)',
      [estabelecimento_id, tag_id]
    );
    return result.affectedRows;
  },

  remove: async (estabelecimento_id, tag_id) => {
    const [result] = await pool.query(
      'DELETE FROM Estabelecimento_Tag WHERE estabelecimento_id = ? AND tag_id = ?',
      [estabelecimento_id, tag_id]
    );
    return result.affectedRows;
  }
};

module.exports = EstabelecimentoTag;
