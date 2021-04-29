class Default {
texto: String; // tipo string aceita somente texto com ''
any: any; // tipo any aceitar qualquer tipo de dados
boleano: boolean; // true or false
numero: number; //numero
array: Array<any>; // any[]


constructor() {
    this.metodo();
    this.array = [{
        teste: "teste"
    }];
}

metodo() {
     this.numero = 10 ;
     this.texto =  `Olá mundo ${this.numero}`;
     return alert(this.texto);
}

}