/*
Write a typescript program which contains one function names as Maximum.
That function accepts array of numbers and returnnumber from array.
*/
function PrintMyArray(arr : number[]) : void
{
    var str :string=""
    for(var i : number=0;i<arr.length; i++)
    {
        str = str + arr[i] + "  "
    }
    console.log("Input  : " + str)
}
function Maximum (arr : number[]) : number
{
  let iNum :number=0
  
  for(var i : number=0;i<arr.length; i++)
  {
    for(var j : number=0;j<arr.length;j++)
    {
        if(arr[j]<arr[i])
        {
            let a :number=0
            a=arr[i]
            arr[i]=arr[j]
            arr[j]=a
        }
    }
  }  
  return arr[0]
}

var inputArr :number[]=[23,89,6,29,26,45,77,32]
var mxNo : number=0
PrintMyArray(inputArr)
console.log("Output : Maximum number is " + Maximum(inputArr))
