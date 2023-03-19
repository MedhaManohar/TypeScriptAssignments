/* Write a typescript programwhich contains one arrow function names Chkarmstrong.
That function accepts one number and check whether number is Armstrong or not.

*/

var ChkArmstrong=(iNum : number)=>{
    let num1 :number= iNum;  
    let sum :number = 0
    while (num1 > 0)  
    {  
        let rem : number = num1 % 10;  
        sum=sum+(rem*rem*rem);  
        num1= Math.floor(num1/ 10);  
    }  
    
    console.log("Input  : " + iNum);
    if (iNum == sum)  
        console.log("Output  : Is A Armstrong Number");  
    else  
        console.log("Output  : Is Not A Armstrong Number"); 
}

ChkArmstrong(153)