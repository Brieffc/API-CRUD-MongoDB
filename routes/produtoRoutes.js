const router = require("express").Router();
const Produto = require("../models/Produto");

//cadastrar produto
router.post("/", async (req, res) => {
  const { nome, preço } = req.body;
  const produto = {
    nome,
    preço,
  };

  try {
    await Produto.create(produto);
    res.status(201).json({ message: "Produto cadastrado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//resgatar produto
router.get("/", async (req, res) => {
  try {
    const itens = await Produto.find();
    res.status(200).json(itens);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//resgatar produto pelo ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const produto = await Produto.findOne({ _id: id });
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//atualizar produto
router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { nome, preço } = req.body;

  const itens = {
    nome,
    preço,
  };
  try {
    const updateIten = await Produto.updateOne({ _id: id }, itens);
    res.status(200).json(itens);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//deletar produto
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Produto.deleteOne({ _id: id });

    res.status(200).json({ message: "Produto removido com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

module.exports = router;
