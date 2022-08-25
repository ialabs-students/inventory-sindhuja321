class Chocolates{
    count:number;
    flavour:string[];

    set_data(count:number,flavour:string[]):void{
       this.count=count;
        this.flavour=flavour;
    }

    display():void{
        console.log("chocolate products : "+ this.flavour);
    }

    defect(def1:string | object):void{
        console.log("The Chocolates "+def1);
    }
}

let item1=new Chocolates();
let item2=new Chocolates();

item1.set_data(25,['KitKat','Dark','DairyMilk']);
item2.set_data(53,['MilkyBar','Munch','Galaxy']);
console.log("-----Displaying Data-------");
item1.display();
item2.display();

item1.flavour.push("Copico");
item2.flavour.push("Eclaise");
console.log("------Adding items--------");
item1.display();
item2.display();

console.log("------Defected items-------");
let removeitem:string="KitKat";
for(let rename in item1.flavour){
    if(item1.flavour[rename] ===removeitem){
        console.log("Item  "+rename+"  "+item1.flavour[rename] )
    }
}

console.log("----------Upadating products----------");
for(let rem_name in item1.flavour){
    if(item1.flavour[rem_name] === removeitem){
        item1.flavour[rem_name]="Sneakers";
        item1.display();
    }
}

console.log("--------Deleting products-------");
for(let del in item1.flavour)
{
    if(item1.flavour[del]==="Sneakers"){
        delete item1.flavour[del];
        item1.display();
    }
}

console.log("------Threshold----------");
if(item2.count<100){
    console.log(item2.count);
    item2.defect(item2.flavour);
}
