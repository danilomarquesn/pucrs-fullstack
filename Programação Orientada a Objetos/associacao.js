class Pessoa {
    constructor(nome, anoDeNascimento, profissao){
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };

    //Métodos
    ola(){
        console.log("Olá, eu sou " + this.nome);
    };

    calculaIdade(){
        return new Date().getFullYear() - this.anoDeNascimento;
    };
};

const pessoa1 = new Pessoa("Danilo", 1992, "SRE");

// Classe + Polimorfismo

class Estudante extends Pessoa{

    // Associacao
    notas = [];

    //Atributo privado #
    #matricula;

    constructor(nome, anoDeNascimento, profissao, matricula){
        super(nome, anoDeNascimento, profissao);
        this.#matricula = matricula;
        this.#ola();
    };
    //Métodos
    #ola(){
        super.ola();
        console.log("colegas!");
    };

    getMatricula(){
        return this.#matricula;
    };

    setMatricula(valor){
        this.#matricula = valor;
    };
};


// Associacao

class Nota{
    #grau;
    constructor(disciplina, grau){
        this.disciplina = disciplina;
        this.#grau = grau;
    };

    setGrau(valor){
        if (valor < 0 || valor > 10){
            throw new Error();
        }
        this.#grau = valor;
    };

    getGrau(){
        return this.#grau;
    };
};

const aluno1 = new Estudante("Danilo", 1992, "SRE", 123456789);
console.log(aluno1);

aluno1.notas = [new Nota("POO", 10), new Nota("Calculo",7)];