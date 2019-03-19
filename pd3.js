class Human{
    constructor(firstName,lastName,dateOfBirth,gender,tripList){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dateOfBirth=dateOfBirth;
        this.gender=gender;
        this.tripList=tripList||['Latvia','Italy','Spain','Turkey'];
    }
    fullname()
    {
        return this.firstName+" "+this.lastName+" "+this.dateOfBirth;
    }
    uzstadit(value)
    {
        this.firstName=value;
    }
    ievadittrip(valsts){
        this.tripList.push(valsts);
    }
    izvadittrip(){
        return this.tripList;
    }

}
let persona = new Human('Sentis','Sjakste','01.09.1995','male',['Latvia','Italy','Spain','Turkey'])
console.log(persona.izvadittrip());
persona.ievadittrip('Poland');
console.log(persona.izvadittrip());
console.log(persona.fullname());
persona.uzstadit('Walter');
console.log(persona.fullname());

class female extends Human{
    constructor(firstName,lastName,dateOfBirth){
        super();
        this.firstName=firstName;
        this.lastName=lastName;
        this.dateOfBirth=dateOfBirth;
        this.gender='Female';
    }
    
}
let girl =new female('Elizabeth','Teilor','02.02.2000');
console.log(girl.fullname());