// Escrevendo as classes de um Jogo

// Criando a classe e seus atributos
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "anão") {
      ataque = "machado";
    } else if (this.tipo === "elfo") {
      ataque = "arco e flecha";
    } else if (this.tipo === "hobbit") {
      ataque = "adaga";
    } else {
      ataque = "um ataque não identificado";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando os objetos

const heroi1 = new Heroi("Gandalf", 200, "mago");
heroi1.atacar();

const heroi2 = new Heroi("Aragorn", 50, "guerreiro");
heroi2.atacar();

const heroi3 = new Heroi("Legolas", 1000, "elfo");
heroi3.atacar();

const heroi4 = new Heroi("Gimli", 30, "anão");
heroi4.atacar();

const heroi5 = new Heroi("Bilbo", 120, "hobbit");
heroi5.atacar();

const heroi6 = new Heroi("Frodo", 33, "hobbit");
heroi6.atacar();

const heroi7 = new Heroi("Malgol", 300, "dragão");
heroi7.atacar();
