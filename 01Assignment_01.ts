function Maximum (no1 : number,no2 : number, no3 : number) : number
{
    
    if(no1>no2 && no1> no3)
    {
        return no1
    }
    else if (no2 > no1 && no2 > no3)
    {
        return no2
    }
    else if (no1==no2 && no3>no1)
    {
        return no3
    }
    else
    {
        return no1
    }

}

var input1 :number=100
var input2 :number=80
var input3 :number=50

var Ans:number=0
Ans=Maximum(input1,input2,input3)

console.log("Input  : " + input1 + ",", input2 + "," + input3)
console.log("Output : " + Ans)
