/* 
Create one typescript application which contains one class named as Circle.
Circle class contains two data members as Radious and PI.
PI member is set to 3.14
Create one method Area which will return area of circle.

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

var oCircle=new Circle(8.7)
console.log("Area Of Circle =" +oCircle.Area())

var oCircle1=new Circle(14.8)
console.log("Area Of Circle =" +oCircle1.Area())