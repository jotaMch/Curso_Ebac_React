function calcular(expressao) {
    if (expressao) {
        
        if (/[\+\-\*\/]{2,}|[^\d\+\-\*\/\.]/.test(expressao)) {
            return "Erro";
        }
        
        try {
            return eval(expressao);
        } catch (error) {
            return "Erro"; 
        }
    }
    return "";
}

module.exports = { calcular };
