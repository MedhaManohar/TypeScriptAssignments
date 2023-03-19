/*
Write a typescript program which contains one function named as DisplayFactors. 
That function should accept 1 number and display factors of that number.
*/

function DisplayFactors(num : number) : void
{
    let counter : number=1
    let dispString : string="1"
    for(counter=2;counter<num;counter++)
    {
        if (num%counter==0)
        {
            dispString=dispString + "," + counter;
        }
    }
    console.log("Input : " + num)
    console.log("Output :" + dispString)

}

var inputNumber : number=20
DisplayFactors(inputNumber)