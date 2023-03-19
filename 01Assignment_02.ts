/* Comments - Write a type script program which contains one function named Area. That function should calculate 
area of the circle. Accept value of radius from user and return its area. Default value of PI should be 3.14 
Formula for calculating area of circle = PI R square
*/ 

function Area(radious : number) : number
{
    let circleArea : number=0
    circleArea=3.14*(radious*radious)
    return circleArea
}

var circleRadiuos : number=5

var CircleArea : number=0
CircleArea=Area(circleRadiuos)
console.log("Input :" + circleRadiuos)
console.log("Area of Circle is : " + CircleArea)
