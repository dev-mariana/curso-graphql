module.exports = {
  precoComDesconto(produto) {
    const result = produto.desconto ? produto.preco * (1 - produto.desconto) : produto.preco;
    return result;
  }
}