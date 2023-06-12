import {Tokens} from './ListaDeTokens.js'
export const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const operadores = ['+', '-', '*', '/', ':='];

export const operadoresRelacionais = ['=', '>', '>=', '<', '<='];

export const delimitadores = ['(', ')', '[', ']', ';', '.', ',',  ':'];

export const caracterEspecial = ['\'', '\"'];

/*
+ | - | * | = | <> | < | > | <= | >= |

( | ) | [ | ] | := | . | , | ; | : | .. | div | or | and | not | if | then | else | of |
while | do | begin | end | read | write | var | array | function |
procedure | program | true | false | char | integer | boolean
 */

export const palavrasReservadas = [
    'div',
    'or',
    'and',
    'not',
    'if',
    'then',
    'else',
    'of',
    'while',
    'do',
    'begin',
    'end',
    'read',
    'write',
    'var',
    'array',
    'function',
    'procedure',
    'program',
    'true',
    'false',
    'char',
    'integer',
    'boolean',
    'writeln',
    'readln'
]
export const letter = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
]

export const quePalavraReservada = (word)=> {
    let NameToken = '';

    switch (word) {
        case palavrasReservadas[0]:
            NameToken = Tokens.token_div;
            break;
        case palavrasReservadas[1]:
            NameToken = Tokens.token_or;
            break;
        case palavrasReservadas[2]:
            NameToken = Tokens.token_and;
            break;
        case palavrasReservadas[3]:
            NameToken = Tokens.token_not;
            break;
        case palavrasReservadas[4]:
            NameToken = Tokens.token_if;
            break;
        case palavrasReservadas[5]:
            NameToken = Tokens.token_then;
            break;
        case palavrasReservadas[6]:
            NameToken = Tokens.token_else;
            break;
        case palavrasReservadas[7]:
            NameToken = Tokens.token_of;
            break;
        case palavrasReservadas[8]:
            NameToken = Tokens.token_while;
            break;
        case palavrasReservadas[9]:
            NameToken = Tokens.token_do;
            break;
        case palavrasReservadas[10]:
            NameToken = Tokens.token_begin;
            break;
        case palavrasReservadas[11]:
            NameToken = Tokens.token_end;
            break;
        case palavrasReservadas[12]:
            NameToken = Tokens.token_read;
            break;
        case palavrasReservadas[13]:
            NameToken = Tokens.token_write;
            break;
        case palavrasReservadas[14]:
            NameToken = Tokens.token_var;
            break;
        case palavrasReservadas[15]:
            NameToken = Tokens.token_array;
            break;
        case palavrasReservadas[16]:
            NameToken = Tokens.token_function;
            break;
        case palavrasReservadas[17]:
            NameToken = Tokens.token_procedure;
            break;
        case palavrasReservadas[18]:
            NameToken = Tokens.token_program;
            break;
        case palavrasReservadas[19]:
            NameToken = Tokens.token_true;
            break;
        case palavrasReservadas[20]:
            NameToken = Tokens.token_false;
            break;
        case palavrasReservadas[21]:
            NameToken = Tokens.token_char;
            break;
        case palavrasReservadas[22]:
            NameToken = Tokens.token_integer;
            break;
        case palavrasReservadas[23]:
            NameToken = Tokens.token_boolean;
            break;
        case palavrasReservadas[24]:
            NameToken = Tokens.token_writeln;
            break;
        case palavrasReservadas[25]:
            NameToken = Tokens.token_readln;
            break;
        default:
            break;
    }

    return NameToken;


}


export const isNumerical = (word) => {
    for(let index = 0; index < word.length; index++)
        if(!digit.includes(word[index]))
            return false;
    return true;
}

export const queDelimitador = (caracter) => {
    let NameToken = '';
    switch (caracter){
        case delimitadores[0]:
            NameToken =Tokens.token_abrir_parenteses;
            break;
        case delimitadores[1]:
            NameToken =Tokens.token_fechar_parenteses;
            break;
        case delimitadores[2]:
            NameToken =Tokens.token_abrir_conchetes;
            break;
        case delimitadores[3]:
            NameToken =Tokens.token_fechar_conchetes;
            break;
        case delimitadores[4]:
            NameToken =Tokens.token_ponto_virgula;
            break;
        case delimitadores[5]:
            NameToken =Tokens.token_ponto;
            break;
        case delimitadores[6]:
            NameToken =Tokens.token_virgula;
            break;
        case delimitadores[7]:
            NameToken =Tokens.token_dois_pontos;
            break;
        default:
            break;
    }


    return NameToken;
}

export const queOperador = (caracter) => {
    let NameToken = '';
    switch (caracter){
        case operadores[0]:
            NameToken = Tokens.token_soma;
            break;
        case operadores[1]:
            NameToken = Tokens.token_subtraccao;
            break;
        case operadores[2]:
            NameToken = Tokens.token_multiplicacao;
            break;
        case operadores[3]:
            NameToken = Tokens.token_divisao;
            break;
        case operadores[4]:
            NameToken = Tokens.token_igual_atribuicao;
            break;
        default:
            break;

    }

    return NameToken;
}

export const isIdentificador = (word) => {
    if(!letter.includes(word[0]))
        return false;

    // for(let index = 1; index < word.length; index++)
    //     if(!(letter.includes(word[index] || digit.includes(word[index]))))
    //         return false;

    return true;
}

export const queOperadorRelacional = (word) =>{
    let NameToken = '';
    switch (word){
        case operadoresRelacionais[0]:
            NameToken = Tokens.token_igual;
            break;
        case operadoresRelacionais[1]:
            NameToken = Tokens.token_maior;
            break;
        case operadoresRelacionais[2]:
            NameToken = Tokens.token_maior_igual;
            break;
        case operadoresRelacionais[3]:
            NameToken = Tokens.token_menor;
            break;
        case operadoresRelacionais[4]:
            NameToken = Tokens.token_menor_igual;
            break;
        default:
            break;

    }

    return NameToken;
}