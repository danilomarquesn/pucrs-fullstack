// Funções que criam e retornam objetos - with NEW

function Pessoa(nome, anoDeNascimento, profissao){
        this.nome = nome,
        this.anoDeNascimento = anoDeNascimento,
        this.profissao = profissao,
        this.calculaIdade = function(){
            return new Date().getFullYear() - this.anoDeNascimento;
        }
};

const pessoa = new Pessoa("Fulano",1990,"Estudante");
console.log(pessoa);

// Object()

function Object(nome, anoDeNascimento, profissao){
    this.nome = nome,
    this.anoDeNascimento = anoDeNascimento,
    this.profissao = profissao,
    this.calculaIdade = function(){
        return new Date().getFullYear() - this.anoDeNascimento;
    }
};

const pessoa2 = new Object("Fulano2",1992,"Estudante2");
console.log(pessoa);