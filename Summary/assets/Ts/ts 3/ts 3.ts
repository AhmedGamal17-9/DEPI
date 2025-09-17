class human{
  public firstname : string ;
  private age : number ;
  readonly id : number ;

  constructor(){
    this.firstname="none";
    this.age=0;
    this.id=0;
  }

  set (setage :number):void{
   this.age=setage;
  }
  get():number{
   return this.age;
  }
    showData():string{
    this.firstname='Ahmed';
    let lasttname:string ='Gamal';
    return `${this.firstname } ${lasttname}`;
  }
}

let object=new human();
console.log(object.showData());
object.set(19);
console.log(object.get());  

//------------------------------------------------------------------------------------
const ali = new human();
ali.firstname="ali";
console.log( ali , typeof(ali) );
console.log(ali.firstname);
//------------------------------------------------------------------------------------
const ahmed = new human();
ahmed.firstname="ahmed";
console.log( ahmed , typeof(ali) );
console.log(ahmed.firstname);
//------------------------------------------------------------------------------------
const mona = new human();
mona.firstname="mona";
//mona.id = 250;
console.log( mona , typeof(mona) );
console.log(mona.id);
//------------------------------------------------------------------------------------
