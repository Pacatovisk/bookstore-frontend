var Default = /** @class */ (function () {
    function Default() {
        this.metodo();
        this.array = [{
                teste: "teste"
            }];
    }
    Default.prototype.metodo = function () {
        this.numero = 10;
        this.texto = "Ol\u00E1 mundo " + this.numero;
        return alert(this.texto);
    };
    return Default;
}());
