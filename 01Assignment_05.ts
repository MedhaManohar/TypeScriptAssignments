/*
Write a typescript program which contains one function named as fibonacci. 
That function accept one number from user and 
print Fibonacci series till that number 
*/

function Fibonacci(num1 :number) : void
{
  var iNum1 : number =0;
  var iNum2 : number =1;
  var iNum3 : number=0;
  var strOutput  : string=""
  while (iNum3<num1)
    {
        iNum3=iNum1 + iNum2;
        strOutput=strOutput + iNum3 + " "
        iNum1 = iNum2
        iNum2 = iNum3
    }
   
    console.log("Output : " +strOutput)
}

var input1 : number =21
console.log("Input : " +21)
Fibonacci(input1)