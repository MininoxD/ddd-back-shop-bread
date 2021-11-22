export class User {
    readonly id?: String
    readonly names?: String
    readonly surnames?: String 
    readonly email?: String 
    readonly phone: String 
    readonly lastLogin?: Date

    constructor(phone: String,id?: String, names?: String, surnames?: String, email?: String ,lastLogin?: Date) {
        this.id = id
        this.names = names
        this.surnames = surnames
        this.email = email
        this.phone = phone
        this.lastLogin = lastLogin
    }
}