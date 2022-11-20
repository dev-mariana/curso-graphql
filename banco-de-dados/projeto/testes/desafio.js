const db = require('../config/db')

async function salvarUsuario(nome, email, senha) {
    const usuarioExistente = await db('usuarios').where({ email });
    console.log(usuarioExistente)
        
        if (usuarioExistente.length === 0) {
            return db('usuarios').insert({
                nome,
                email,
                senha
            })   
        }
    
        return await db('usuarios').where({ email }).update({
            nome,
            email,
            senha
        })
}

async function salvarPerfil(nome, rotulo) {
    const perfilExistente = await db('perfis').where({ nome });
    console.log(perfilExistente)
    
    if (perfilExistente.length === 0) {
        return db('perfis').insert({ nome, rotulo })
    }

    return await db('perfis').where({ nome }).update({ rotulo })
}

async function executar() {
    const usuario = await salvarUsuario('Mari', 'm@gmail.com', '123');
    const usuario2 = await salvarUsuario('Mari2', 'm@gmail.com', '1234');
    const perfil = await salvarPerfil('admin', 'Administrador');
    const perfil2 = await salvarPerfil('admin', 'Administrador2');

    console.log(usuario)
    console.log(usuario2)
    console.log(perfil)
    console.log(perfil2)
}

executar()
    .catch(err => console.log(err))
    .finally(() => db.destroy())
