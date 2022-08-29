export class Contato {
    private _nome : string
    private _telefone : number
    private _genero : string
    private _dataNascimento : string

    constructor(nome : string, telefone : number, genero : string, dataNascimento : string){
        this._nome = nome
        this._telefone = telefone
        this._genero = genero
        this._dataNascimento = dataNascimento
    }

    get nome() : string{
        return this._nome
    }
    set nome(nome: string){
        this._nome = nome
    }
    get telefone() : number{
        return this._telefone
    }
    set telefone(telefone : number){
        this._telefone = telefone
    }

    get genero() : string{
        return this._genero
    }
    set genero(genero: string){
        this._genero = genero
    }

    get dataNascimento() : string{
        return this._dataNascimento
    }
    set dataNascimento(dataNascimento: string){
        this._dataNascimento = dataNascimento
    }
}

