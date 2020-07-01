// Cria uma função construtora para um usuário com nome, idade e uma frase.
function User (name, age) {
    this.name = name
    this.age = age
    this.phrase = function () {
        return `${name} tem ${age} anos.`
    }
  }
  //Define esse usuário
  let paulo = new User("Paulo", 14)

  //Chama a propriedade .phrase()
  paulo.phrase()