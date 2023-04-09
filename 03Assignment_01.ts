/*
Create one typescript application which contains one class named as Arithmetic
. Arithmetic class contains three characteristics as Number1, Number2
Create one parameterised constructor which accept two values and assign it to
Number1 and Number2.
In Arithmatic class we have to write four methods (behaviours) as Addition, Subtraction, Multiplication and Division.
 
*/

class Arithmatic
{
    Number1 : number
    Number2 : number


    constructor (Num1 :number,Num2 :number)
    {
        this.Number1=Num1
        this.Number2=Num2
    }

    Addition()
    {
        return this.Number1 + this.Number2

    }

    Subtraction()
    {
        return this.Number1 - this.Number2
    }

    Multiplication()
    {
        return this.Number1 * this.Number2
        
    }
    Division()
    {
        return this.Number1 / this.Number2
        
    }
}

var obj_1 =new Arithmatic(70,30)
console.log("Addition of 70 + 30 is " + obj_1.Addition())

var obj_2 = new Arithmatic(83,44)
console.log("Subtraction of 83 - 44 is " + obj_2.Subtraction())

var obj_3 = new Arithmatic(200,130)
console.log("Multiplication of 200 * 130 is " +  obj_3.Multiplication())

var obj_4 = new Arithmatic(100,20)
console.log("Division of 100 / 20 is " + obj_4.Division())