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

async function executar() {
    const usuario = await salvarUsuario('Mari', 'm@gmail.com', '123');
    const usuario2 = await salvarUsuario('Mari2', 'm@gmail.com', '1234');

    console.log(usuario)
    console.log(usuario2)
}

executar()
    .catch(err => console.log(err))
    .finally(() => db.destroy())
