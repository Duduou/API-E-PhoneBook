const CategoriaTag = require('../models/categoriaTagModel');

exports.listTags = async (req, res) => {
  try {
    const tags = await CategoriaTag.findAllByCategoria(req.params.categoria_id);
    res.json(tags);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar tags da categoria' });
  }
};

exports.addTag = async (req, res) => {
  try {
    const { categoria_id, tag_id } = req.body;
    const affectedRows = await CategoriaTag.add(categoria_id, tag_id);
    if (affectedRows === 0) return res.status(400).json({ error: 'Não foi possível adicionar a tag' });
    res.status(201).json({ message: 'Tag adicionada à categoria com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar tag à categoria' });
  }
};

exports.removeTag = async (req, res) => {
  try {
    const { categoria_id, tag_id } = req.body;
    const affectedRows = await CategoriaTag.remove(categoria_id, tag_id);
    if (affectedRows === 0) return res.status(404).json({ error: 'Relação não encontrada' });
    res.json({ message: 'Tag removida da categoria com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover tag da categoria' });
  }
};
