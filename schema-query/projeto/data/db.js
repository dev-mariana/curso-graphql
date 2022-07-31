const usuarios = [
  {
      id: 1,
      nome: 'Mariana Bastos',
      email: 'mari@gmail.com',
      idade: 24,
      perfil_id: 1,
      status: 'ATIVO'
  },
  {
      id: 2,
      nome: 'João Silva',
      email: 'joao@gmail.com',
      idade: 29,
      perfil_id: 2,
      status: 'INATIVO'
  },
  {
      id: 3,
      nome: 'Rafael Júnior',
      email: 'rafa@gmail.com',
      idade: 31,
      perfil_id: 1,
      status: 'BLOQUEADO'
  },
]

const perfis = [
  {
      id: 1,
      nome: 'Comum'
  },
  {
      id: 2,
      nome: 'Administrador'
  }
]

module.exports = { usuarios, perfis };