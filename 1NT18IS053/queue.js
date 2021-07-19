class Queue
{
    constructor()
    {
        this.items = [];
    }
enqueue(x)
{   
    this.items.push(x);
}

dequeue()
{
    if(this.isEmpty())
        return "QUEUE UNDERFLOW";
    return this.items.shift();
}
display()
{
    var str = "";
    for(var i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
    return str;
}
isEmpty()
{
    return this.items.length == 0;
}
}

var queue = new Queue();
queue.enqueue(60);
queue.enqueue(3);
queue.enqueue(45);
queue.enqueue(10);
queue.enqueue(23);
queue.enqueue(40);
 
 
console.log("before dequeue:-   "+queue.display());

console.log("deleted element:-  "+queue.dequeue());
  
console.log("after dequeue:-    "+queue.display());