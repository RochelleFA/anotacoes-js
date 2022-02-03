//console.log() - imprime o resultado na tela
// string - tipo de dado, sempre entre ""

console.log("Olá, mundo!");
console.log("Olá, José!");

//variáveis {let, const ou var}
// variáveis criadas com const não podem ser alteradas; variáveis criadas com let podem ser alteradas;
// variáveis sempre começam com letra minúscula

let nome = "José";
const idade = 30;

//texto sempre entre ""

console.log(nome); //imprime o conteúdo atribuído à variável nome
console.log(idade);
// para funcionar deve ser inserida uma variável já definida

//para mudar o valor da variável
nome = "José Messias"; //funciona - variável let
idade = 31; //não funciona - variável const


//BOOLEANOS = valor verdadeiro ou falso

const ehMaiorDeIdade = true; //ou false
console.log(ehMaiorDeIdade); //resultado true porque acima foi atribuído o valor true


//OPERADORES MAMTEMÁTICOS
const resultado = 5 + 4

console.log(resultado) //imprime na tela a soma (subtração, divisão e/ou multiplicação)

const resto = 5 % 4 //resulta em 1 porque o % apresenta apenas o resto da divisão
const novoExemplo = 5 + 4 * 3 - 8 //não faz na ordem, respeita as regras da matemática

let resultado = 5
resultado = resultado + 5
//ou resultado +=5
//ou resultado ++ (adiciona 1)


//OBJETOS - conjuntos de variáveis que dizem respeito a um mesmo objeto

const pessoa ={
    nome: "Rochelle",
    idade: 26,
    ehMaiorDeIdade: true,
    altura: 1.7
};

console.log(pessoa.altura); //imprime a propriedade "altura" do objeto

//condicionais

if (pessoa.idade < 18) { //apenas se o resultado for true a segunda linha é executada
    console.log("É menor de idade.");
} else if (pessoa.idade < 60) { //é executado apenas se a informação do "if" for false
    console.log("É maior de idade.");
} else { //é executado se as condições anteriores forem false
    console.log("É idoso!");
} //else if apenas quando há mais de duas situações a serem verificadas

//comparadores
// >= maior ou igual
// <= menor ou igual
// < menor que
// > maior que
// == verifica se é igual
// != verifica se é diferente
// === verificar se é idêntico (se conteúdo e tipo (number, string,...) são iguais)

//CONCATECAÇÃO (formar sentenças, juntar informações)
if (pessoa.idade > 18) {
    console.log(pessoa.nome + "é maior de idade.");
    //vai imprimir "Rochelle é maior de idade."
}
let texto = pessoa.nome + "tem" + pessoa.idade + "anos.";
    console.log(texto);
    //vai imprimir "Rochelle tem 26 anos."

    if (pessoa.idade > 18) {
        console.log(`${pessoa.nome} é adulta`); //imprime "Rochelle é adulta"
    }

    