function orderSandwich(...items:string[]):void{
    console.log("Your Ordered a Sandwich with: ");
    for(let item of items){
        console.log("-"+item);
    }
    console.log("Enjoy Your Order");
}
orderSandwich("Chicken","Jalapeno","With Cheese");
orderSandwich("Beef","Chilli");
orderSandwich("Beef");


