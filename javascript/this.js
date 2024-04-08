document.getElementById("topic").innerHTML="this"

//console.log(this)


const car ={
    name : 'Nano' ,
    colour : 'purple',
    availability : true,
   price: function(cost){
     tax = (cost * (18/100))
     registration = (cost *(5/100))
     bill = 100000 + tax + registration
    
    console.log(`Grand Total : inr ${bill}`)
    },
    order : function(){
     order = [this.name,this.colour,this.availability,this.price.bill]
     console.log(order)
    }
    
}
car.price(100000)
car.order()


