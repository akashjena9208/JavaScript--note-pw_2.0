//assignment operator
var username="Akash";
console.log(username);

var n1=20;
var n2=10;

//Arrithmetic operator
var res=n1+n2;
console.log(res);
console.log("+ operator");

//Substraction
var res=n1-n2;
console.log(res);
console.log("- operator");

//multiplication
var res=n1*n2
console.log(res);
console.log("* operator");

//division
var res=n1/n2;
console.log(res);
console.log("/ opeartor");

//modules
var res=n1%n2;
console.log(res);
console.log("moudulos  operator");

//increment  & Decrement

//post incriment:- x++ 1st value used then incrised
//pre incriment:- x--  1st incresd then change
var a=5;
var b= a++ + ++a + --a;
console.log(a);
console.log(b);
console.log("it is incriment decri ment operator");


// relation operatot
//  ==,<,>,<=,>=,=!


var num1=10;
var num2 =20;
var num3= 10;

var res= num1==num2;
console.log(res);
console.log("relation operator");

//.......................................Condition Operator..............................................................

//if & else

let age=25;
if(age<18)
{
    console.log("you are aligibule");
}
else{
    console.log("you are not eligibule");
}

console.log(" if & ELSE");


//Ternary operator

let A=18;
let ress=(A<18)?console.log("he is child"): console.log("He is Adult");

console.log(ress);
console.log("TERNARY OPERATOR");
// for loop
for(i=0;i<3;i++)
{
    console.log("*");
}
console.log("for loop");
// nasted loop
for ( let i=0;i<2;i++)
{
    for(let j=0;j<2;j++)
    {
        console.log("1");
    }
    console.log("2");
}
console.log("nasted loop");

//while loop
i=0;
while (i<2) 
{
    console.log("3");
    i++;
}
console.log("while loop");

// do while 
i=0;
do{
    console.log("4");
    i++
}
while(i<2)
console.log("do while opeartor");

// Swicth case

Grade ='A';
switch (Grade) {
     case 'C': console.log(" he is just pass");
        
        break;

        case 'B': console.log(" he is average Student");
        
        break;

        case 'A': console.log(" he is Exicelent Student");
        
        break;

    default: console.log(" he is a fall");
        break;
}
