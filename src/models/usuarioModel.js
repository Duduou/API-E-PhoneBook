const pool = require('../config/db');

const Usuario = {
  // Buscar todos os usuários
  findAll: async () => {
    const [rows] = await pool.query('SELECT * FROM Usuario');
    return rows;
  },

  // Buscar um usuário por ID
  findById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM Usuario WHERE id = ?', [id]);
    return rows[0]; // retorna o primeiro (ou undefined)
  },

  // Criar um novo usuário
  create: async (usuario) => {
    const { nome, email, senha_hash } = usuario;
    const [result] = await pool.query(
      'INSERT INTO Usuario (nome, email, senha_hash) VALUES (?, ?, ?)',
      [nome, email, senha_hash]
    );
    return { id: result.insertId, ...usuario };
  },

  // Atualizar um usuário
  update: async (id, usuario) => {
    const { nome, email, senha_hash } = usuario;
    const [result] = await pool.query(
      'UPDATE Usuario SET nome = ?, email = ?, senha_hash = ? WHERE id = ?',
      [nome, email, senha_hash, id]
    );
    return result.affectedRows;
  },

  // Deletar um usuário
  delete: async (id) => {
    const [result] = await pool.query('DELETE FROM Usuario WHERE id = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = Usuario;
