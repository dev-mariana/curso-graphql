module.exports = async ({ req }) => {
    // em dev
    await require('./simularUsuarioLogado')(req);
    
    const auth = req.headers.authorization;
    console.log(auth);
}