const db = require('../config/db')

const novoUsuario = {
    nome: 'Mariana',
    email:'mariana@gmail.com',
    senha: '1234'
}

async function exercicio() {
    const { quantidade } = await db('usuarios')
       .count('* as quantidade').first()

       if (quantidade === 0) {
           await db('usuarios').insert(novoUsuario)
       }

       let { id } = await db('usuarios')
          .select('id').limit(1).first()

        await db('usuarios').where({ id: 1 })
            .update({ 
                nome: 'Mariana Bastos', 
                email:'m@gmail.com',
            })

        return await db('usuarios').where({ id })    
}

exercicio()
    .then(usuario => console.log(usuario))
    .finally(() => db.destroy())