const pool = require('../config/db');

const Estabelecimento = {
  findAll: async () => {
    const [rows] = await pool.query('SELECT * FROM Estabelecimento');
    return rows;
  },

  findById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM Estabelecimento WHERE id = ?', [id]);
    return rows[0];
  },

  create: async (dados) => {
    const { nome, descricao, endereco, longitude, latitude, whatsapp, facebook, instagram } = dados;
    const [result] = await pool.query(
      `INSERT INTO Estabelecimento 
      (nome, descricao, endereco, longitude, latitude, whatsapp, facebook, instagram)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [nome, descricao, endereco, longitude, latitude, whatsapp, facebook, instagram]
    );
    return { id: result.insertId, ...dados };
  },

  update: async (id, dados) => {
    const { nome, descricao, endereco, longitude, latitude, whatsapp, facebook, instagram } = dados;
    const [result] = await pool.query(
      `UPDATE Estabelecimento
      SET nome = ?, descricao = ?, endereco = ?, longitude = ?, latitude = ?, whatsapp = ?, facebook = ?, instagram = ?
      WHERE id = ?`,
      [nome, descricao, endereco, longitude, latitude, whatsapp, facebook, instagram, id]
    );
    return result.affectedRows;
  },

  delete: async (id) => {
    const [result] = await pool.query('DELETE FROM Estabelecimento WHERE id = ?', [id]);
    return result.affectedRows;
  },

  searchByTerm: async (termo) => {
    const likeTerm = `%${termo}%`;
    const [rows] = await pool.query(`
      SELECT DISTINCT E.*
      FROM Estabelecimento E
      LEFT JOIN Estabelecimento_Categoria EC ON E.id = EC.estabelecimento_id
      LEFT JOIN Categoria C ON EC.categoria_id = C.id
      LEFT JOIN Estabelecimento_Tag ET ON E.id = ET.estabelecimento_id
      LEFT JOIN Tag T ON ET.tag_id = T.id
      WHERE 
        E.nome LIKE ? OR
        E.descricao LIKE ? OR
        C.nome LIKE ? OR
        T.nome LIKE ?
    `, [likeTerm, likeTerm, likeTerm, likeTerm]);

    return rows;
  }
};

module.exports = Estabelecimento;
