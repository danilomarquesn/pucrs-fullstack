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
    constructor(nome, anoDeNascimento, profissao, matricula){
        super(nome, anoDeNascimento, profissao);
        this.matricula = matricula;
    };
    //Métodos
    ola(){
        super.ola();
        console.log("colegas!");
    };
};

const aluno1 = new Estudante("Danilo", 1992, "SRE", 123456789);
console.log(aluno1);
console.log(aluno1.ola());