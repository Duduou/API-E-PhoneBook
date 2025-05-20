const Usuario = require('../models/usuarioModel');

// GET /usuarios
exports.getAll = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

// GET /usuarios/:id
exports.getById = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};

// POST /usuarios
exports.create = async (req, res) => {
  try {
    const novoUsuario = await Usuario.create(req.body);
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

// PUT /usuarios/:id
exports.update = async (req, res) => {
  try {
    const atualizado = await Usuario.update(req.params.id, req.body);
    if (atualizado === 0) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json({ message: 'Usuário atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
};

// DELETE /usuarios/:id
exports.remove = async (req, res) => {
  try {
    const deletado = await Usuario.delete(req.params.id);
    if (deletado === 0) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
};
