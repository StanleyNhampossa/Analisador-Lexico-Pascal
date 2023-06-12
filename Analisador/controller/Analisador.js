import Token from '/Analisador/model/C_Token.js';
import {
    delimitadores,
    operadores,
    operadoresRelacionais,
    palavrasReservadas,
    queDelimitador,
    quePalavraReservada,
    queOperador,
    isIdentificador, isNumerical, queOperadorRelacional, caracterEspecial

} from "./Helpers.js";
import {Categorias} from "./ListaDeCategorias.js";

export const Analisador = (textoUI) => {

    const inicio = performance.now();

    let arrayToken = [];

    let chart = '';

    let clean_text = textoUI.toLowerCase();

    let character = false;

    let index;

    const addTokenArray = (TokenObject) => {
        arrayToken.push(TokenObject);
        chart = '';
        
    }

    for (index = 0; index < clean_text.length; index++) {

        if(/\s/g.test(clean_text[index])) {
            chart += clean_text[index]
        }else if(clean_text[index] === ':' && clean_text[index + 1] === '=') {
            chart += clean_text[index] + clean_text[++index];
        }else if((clean_text[index] === '>' || clean_text[index] === '<') && clean_text[index + 1] === '='){
            chart += clean_text[index] + clean_text[++index];
        }else if(delimitadores.includes(clean_text[index])) {
            chart += clean_text[index];
        }else if(operadores.includes(clean_text[index])) {
            chart += clean_text[index];
        }else if(operadoresRelacionais.includes(clean_text[index])) {
            chart += clean_text[index];

        }else if(clean_text[index] === '\''){
            chart += clean_text[index++]
            while (index !== clean_text.length &&
                    !caracterEspecial.includes(clean_text[index])){
                chart += clean_text[index++]
            }
            if(clean_text[index] === '\'') {
                chart += clean_text[index];
                character = true;
            }
        }else {

            while (!/\s/g.test(clean_text[index]) &&
            index !== clean_text.length &&
            !delimitadores.includes(clean_text[index]) &&
            !operadores.includes(clean_text[index]) &&
            !operadoresRelacionais.includes(clean_text[index])) {
                chart += clean_text[index++];
            }
        }

        if(delimitadores.includes(chart)){
            let NameToken = queDelimitador(chart);
            addTokenArray(new Token(NameToken, Categorias.SpecialSymbol, chart));
        }else if(palavrasReservadas.includes(chart)){
            index--;
            let NameToken = quePalavraReservada(chart);
            addTokenArray(new Token(NameToken, Categorias.SpecialSymbol, chart));
        }else if(operadores.includes(chart)){
            let NameToken = queOperador(chart);
            addTokenArray(new Token(NameToken, Categorias.SpecialSymbol, chart));
        }else if(operadoresRelacionais.includes(chart)) {
            let NameToken = queOperadorRelacional(chart);
            addTokenArray(new Token(NameToken, Categorias.SpecialSymbol, chart));
        }else if(/\s/g.test(chart)) {
            chart = '';
        }else if(isNumerical(chart)) {
            index--;
            addTokenArray(new Token(Categorias.Digit, Categorias.Digit, chart))
        }else if(character){
            addTokenArray(new Token(Categorias.CharacterConstant, Categorias.CharacterConstant, chart))
        }else if(isIdentificador(chart)) {
            index--;
            addTokenArray(new Token(Categorias.Identifier, Categorias.Identifier, chart))
        }else {
            index--;
            addTokenArray(new Token(Categorias.Erro, Categorias.Erro, chart))
        }

    }
    const fim = performance.now();
    const diferenca = Math.round(fim - inicio);
    // console.log(inicio)
    // console.log(fim)
    // console.log(diferenca)

    return {arrayToken, diferenca};
}