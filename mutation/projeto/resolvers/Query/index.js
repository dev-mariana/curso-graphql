const perfis = require('./perfil')
const usuarios = require('./usuario')

module.exports = { 
  ...perfis,
  ...usuarios
}