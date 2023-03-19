/*
Write a typescript program which contains one function names as Summation.
That function accepts array of numbers and returns the summation
 of each number from array 
*/
function PrintMyArray(arr: number[]) : void
{
    var str :string=""
    for(var i : number=0;i<arr.length; i++)
    {
        str = str + arr[i] + "  "
    }
    console.log("Input  : " + str)
}
function Summation (arr : number[]) : number
{
  let iSum :number=0
  
  for(var i : number=0;i<arr.length; i++)
  {
    iSum=iSum + arr[i]
  }  
  return iSum
}

var inputArr :number[]=[23,6,7,4,5,7]
var mxNo : number=0
PrintMyArray(inputArr)
console.log("Output :Addition is " + Summation(inputArr))
