export class ClassUser {

    id:number
    mail:string
    passwd:string
    name:string
    surname:string

    constructor(
        id: number,
        mail: string,
        passwd: string,
        name: string,
        surname: string
    ) {
        this.id = id;
        this.mail = mail;
        this.passwd = passwd;
        this.name = name;
        this.surname = surname;
    }


}
