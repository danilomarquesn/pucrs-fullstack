// Funções que criam e retornam objetos - with NEW

function Pessoa(){
    let nome = nome;
    let anoDeNascimento = 1990;
    let profissao = "SRE";
    this.calculaIdade = function(){
        return new Date().getFullYear() - anoDeNascimento;
    }
};

const pessoa = new Pessoa();
console.log(pessoa);