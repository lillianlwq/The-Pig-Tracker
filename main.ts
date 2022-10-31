
var pc = new PigController();

function store() {
    var p = new Pig("Pork Chop", "Pork bellied", 10, 20, "strong")
    pc.add(p) 
}

document.getElementById("create")!.addEventListener('click',function(){
    store();
})

document.getElementById("get")!.addEventListener('click',function(){
    console.log(pc.getAll())
})

document.getElementById("delete")!.addEventListener('click',function(){
    console.log(pc.delete(1))
})