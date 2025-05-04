// Literais >> Criam objetos de forma literal como conhecemos

var nomeDoObjeto = {
    nomeMembro1 : valorMembro1,
    nomeMembro2 : valorMembro2,
    nomeMembro3 : valorMembro3,
};

// ou

var pessoa = {
    nome : ['Fulano', 'de Tal'],
    anoDeNascimento: 1990,
    profissao: 'Estudante',
    calculaIdade: function(){
        return new Date().getFullYear() - this.anoDeNascimento;
    }
};
