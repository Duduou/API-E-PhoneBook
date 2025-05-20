const EstabelecimentoCategoria = require('../models/estabelecimentoCategoriaModel');

exports.listCategorias = async (req, res) => {
  try {
    const categorias = await EstabelecimentoCategoria.findAllByEstabelecimento(req.params.estabelecimento_id);
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar categorias do estabelecimento' });
  }
};

exports.addCategoria = async (req, res) => {
  try {
    const { estabelecimento_id, categoria_id } = req.body;
    const affectedRows = await EstabelecimentoCategoria.add(estabelecimento_id, categoria_id);
    if (affectedRows === 0) return res.status(400).json({ error: 'Não foi possível adicionar a categoria' });
    res.status(201).json({ message: 'Categoria adicionada ao estabelecimento com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar categoria ao estabelecimento' });
  }
};

exports.removeCategoria = async (req, res) => {
  try {
    const { estabelecimento_id, categoria_id } = req.body;
    const affectedRows = await EstabelecimentoCategoria.remove(estabelecimento_id, categoria_id);
    if (affectedRows === 0) return res.status(404).json({ error: 'Relação não encontrada' });
    res.json({ message: 'Categoria removida do estabelecimento com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover categoria do estabelecimento' });
  }
};
