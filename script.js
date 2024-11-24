function compare() {
    var a,b,c;
    a=document.comp.a.value;
    b=document.comp.b.value;
    c=document.comp.c.value;
    if((a>b)&&(a>c)){
        document.getElementById("result").innerHTML= a+" is greater";
    }
    else if((b>a)&&(b>c)){ 
        document.getElementById("result").innerHTML= b+" is greater";
    }
    else{
        document.getElementById("result").innerHTML= c+" is greater";
    }
}