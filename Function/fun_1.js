/*why Function used :- Reusedbulity code of block
                    - function is 1st class citizon

parmater :- parmater is place holder 
argument :- function calling & data pass

 */

let c=10;
let d=20;

function add()
{
    //block code
   console.log(c+d);
}
add() // funtion calling

//......................................................................................................................//
function add(m,n)
{
    console.log(m+n);
}
add(5,10)
add(20,30)
//......................................................................................................................//
//first class ciizon
let sum = function add(e,f){ //function varibale pass
    console.log(e+f);
}
console.log(sum(10,20));
//.......................................................................................................
// function under function
function x (callback) {
    console.log("Hello");
    callback()
}
function y() {
    console.log( "I m Akash");
}
x(y)

//...............................................................................................................................
// retrun the function
function add(a,b)
{
    return a+b;
}
let adding = add(10,20);
console.log(adding);