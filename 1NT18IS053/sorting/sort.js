let a = []
let numbers = []
let strings = []
let element =  document.getElementById('element')
let pnumbers = document.getElementById('#numbers')
let pstrings = document.getElementById('#strings')
let parray = document.getElementById('#array')
let add = document.getElementById("#add")
let sort = document.getElementById("#sort")
add.addEventListener('click', addFunc )
sort.addEventListener('click', sortFunc)
function addFunc(){
    a.push(element.value)
    console.log(a)
}

function sortFunc(){
    var regex = /\d/g;
    for(let i=0; i<a.length; i++){
        if(regex.test(a[i])){
            numbers.push(a[i])
            
        }else{
            strings.push(a[i])
            
        }
    }
    strings.sort()
    numbers.sort()
    console.log(numbers)
    parray.innerHTML = "initial array is:- " + a
    pnumbers.innerHTML = "sorted array for numbers is:- " + numbers
    pstrings.innerHTML = "sorted array for strings is:- " + strings
}

function backFunc(x){
    x.style.background = "black"
    x.style.color = "white"
}