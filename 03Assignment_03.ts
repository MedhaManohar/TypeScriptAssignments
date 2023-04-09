/*
Create one typescript application which contains one class
named as CircleX which will inherits above circle class.
In circle class we have to write one method as Circumference which will 
return circumference of circle.

*/

class Circle
{
    Radious : number
    PI : number
    
    constructor(data : number)
    {
        this.Radious=data
        this.PI=3.14
    }

    Area(): number
    {
        return (this.Radious * this.Radious) * this.PI
    }
}

class CircleX extends Circle
{
    constructor(data :number)
    {
        super(data)
    }

    CalculateCircumfarance() : number
    {
        return 2 * this.PI * this.Radious
    }
}



var oCircle1=new Circle(14.8)
console.log("Area Of Circle =" +oCircle1.Area())

var oCircleX=new CircleX(18.97)
console.log("Area Of Circle =" +oCircleX.Area())
console.log("Curcumfarance Of Circle =" +oCircleX.CalculateCircumfarance())