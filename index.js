//esquece callback, trabalhar com promises.



function obterUsuario(){
    return new Promise(function resolvePromise(resolve, reject){//deu bom? resolve, erro? reject
        setTimeout(function(){return resolve( {id:1, nome : 'jeferson', dataNascimento: new Date()})}, 1000)
        
    })
}
function obterTelefone(idUsuario){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() =>{   return resolve({ telefone : '40088922',  ddd : 11    })  }, 2000 )
    })
}
function obterEndereco(idUsuario){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() =>{ return resolve({ rua : 'rua dos bobos',  num : 0 })}, 2000 )
    })
}

//para manipular sucesso é .then() , para manipular erros .catch()

const usuarioPromise = obterUsuario()
//chamou a promise que retornao resultado, deu certo?then deu ruim, catch
usuarioPromise
    .then(function(resultado){
        console.log('resultado = ', resultado)
    })
    .catch(function (error){
        console.log('Erro = ', error)
    })
    .then(function (usuario){
        //variavel usuario é a mesma que o resultado, só nome diferentes
        //por causa do escopo
        obterTelefone(usuario.id)
    })
    .catch(function (error){
        console.log('Erro = ', error)
    })



















