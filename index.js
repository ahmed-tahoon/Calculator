
var num1="";
var num2="";
var result="";
var op="";











function Currnet_Date(){
var time = new Date();
var ampm = time.getHours( ) >= 12 ? ' PM' : ' AM';
hours = time.getHours( ) % 12;
hours = hours ? hours : 12;
var x1=time.getMonth() + 1+ "/" + time.getDate() + "/" + time.getFullYear(); 
x1 = x1 + " - " +  hours + ":" +  time.getMinutes() + ":" +  time.getSeconds() + "" + ampm;
document.querySelector(".data").innerHTML=x1;
setTimeout(Currnet_Date,1000);

}
Currnet_Date();

function evaluate(){
   
   if(op=='+')
   {
       num1=Number(num1)
       num2=Number(num2);
       res= num2+num1;
         
   } 
   else if (op=='-')
   {
       num1=Number(num1)
       num2=Number(num2);
       res= num1-num2;

   }
   else if (op=='x')
   {
       num1=Number(num1)
       num2=Number(num2);
       res= num2*num1;

   }
   else
   {
       num1=Number(num1)
       num2=Number(num2);
       res= num2/num1;
   }


   num2="";
   num1=res;
   op="";
   $(".screen").text(res)
   $(".result").text(res)


}

function clear()
{
    num1="";
    num2="";
    res="";
    op="";
    $(".screen").text("")
    $(".result").text("result Here")
}



$(".btn").click (function(e){

    var x= e.target.innerHTML;

     

     if(x=="DEL")
    {
        clear();
    }
    else if(x=="="&&num1!=""&&num2!=""&&op!="")
    {
        evaluate();
    }

    else if(x=='+'||x=='x'||x=='/'||x=='-'){
        if (num1!=""&&op==""){
    op=x;
    $(".screen").append(e.target.innerHTML)
        }
        else
        {
            alert("Sooryyy")
        }
    }

    else if(op==""){
        num1+=x;
    $(".screen").append(e.target.innerHTML)
    console.log(num1)
    }
    else if(op!=""&&num1!="")
     {
     console.log(x);
    

    num2+=x;
    $(".screen").append(e.target.innerHTML)
    
     }
     










});

