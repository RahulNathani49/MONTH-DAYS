function display(){
   var value = document.getElementById("input").innerHTML;
    var dis=document.getElementById("display");
    var feb="MONTH HAS 28 dAYS";
    var oddday="MONTH HAS 31 DAYS";
    var evenday="MONTH HAS 30 DAYS";
    if(value ==1 || value==3 || value==5 || value==7 || value==8 || value==10 || value==12){
    dis.innerHTML=oddday;  
}
    else if(value == 2){
     dis.innerHTML=feb;
    }
    else{
     dis.innerHTML=evenday;
    }
}   