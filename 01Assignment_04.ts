/*
Write a typescript program which contains one function names as ChkPrime. 
That function should accept one number and it should return true 
if the given number is prime and otherwise return false.
*/

function ChkPrime(num : number) : boolean
{
    
    for(var i: number=2;i<num;i++)
    {
        if(num % i==0)
        {
            return false;
        }
    }
    return true;

    
}

var chkNum : number = 29
var outPut : boolean
outPut=ChkPrime(chkNum)
console.log("Input   : " + chkNum)

if(outPut==false)
 console.log("Number is not prime")
else
console.log("It is prime number")