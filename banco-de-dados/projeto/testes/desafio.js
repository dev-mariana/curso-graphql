const db = require('../config/db')

async function salvarUsuario(nome, email, senha) {
    let usuario = await db('usuarios').where({ email }).first();

    if (!usuario) {
        let [ id ] = await db('usuarios')
           .insert({ email, nome, senha });

        usuario = await db('usuarios')
          .where({ id }).first();   
    }

    await db('usuarios').where({ id: usuario.id }).update({
        nome,
        email,
        senha
    });

    usuario = { ...usuario, nome, email, senha };

    return usuario;

}

async function salvarPerfil(nome, rotulo) {
    let perfil = await db('perfis').where({ nome }).first();

    if (!perfil) {
        let [ id ] = await db('perfis')
          .insert({ nome, rotulo });

        perfil = await db('perfis')
         .where({ id }).first();   
    }

    await db('perfis')
        .where({ id: perfil.id }).update({ nome, rotulo })

    perfil = { ...perfil, nome, rotulo };
    
    return perfil;
}

async function adicionarPerfis(usuario, ...perfis) {
    const usuario_id = usuario.id
    await db('usuarios_perfis')
        .where({ usuario_id })
        .delete()

    for (perfil of perfis) {
        const perfil_id = perfil.id
        await db('usuarios_perfis')
           .insert({ usuario_id, perfil_id })
    }
}

async function executar() {
    const usuario = await salvarUsuario('Mari', 'm@gmail.com', '123');
    const usuario2 = await salvarUsuario('Gustavo', 'g@gmail.com', '1234');
    const perfil = await salvarPerfil('admin1', 'Administrador');
    const perfil2 = await salvarPerfil('rh_1', 'RH');

    console.log(usuario)
    console.log(usuario2)
    console.log(perfil)
    console.log(perfil2)

    await adicionarPerfis(usuario, perfil, perfil2)
}

executar()
    .catch(err => console.log(err))
    .finally(() => db.destroy())
