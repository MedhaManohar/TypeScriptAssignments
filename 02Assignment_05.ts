/* Write a typescript program which contains one function named as ChkString.
That function accept one string and check whether that string contains "Marvellous"
word or not.

*/

var ChkString=(str : string) : number=>{return str.search("Marvellous")}

var strInput :string ="Pune Kothrud Marvellous Infosystems"
console.log("Input  : " + strInput)

 if(ChkString(strInput)==-1)
    console.log("Output  : string does not contains Marvellous in it.")
 else
    console.log("Output  : string contains Marvellous in it.")
     