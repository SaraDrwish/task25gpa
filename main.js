function gpa(){

var txt = parseFloat( document.getElementById("txt").value);
// var res =  document.getElementById("res").value;
var btn = document.getElementById("btn");

//  console.log(txt *=4 );

if (txt >= 3.5 && txt <=4 || txt >= 90&& txt <=100)
{
document.getElementById("res").value = "A";
 
//console.log(res);

}
else if (txt >= 80 && txt <= 89  || txt >= 3 && txt <=3.4)
{
    document.getElementById("res").value = "B";
}
else if (txt >= 70 && txt <= 79 || txt >= 2.5&& txt <=2.9){

    document.getElementById("res").value = "C";
}
else if (txt >= 60 && txt <= 69 || txt >= 2 && txt <=2.4){

    document.getElementById("res").value = "D";
}
else {
    document.getElementById("res").value = "F";
  }
}

