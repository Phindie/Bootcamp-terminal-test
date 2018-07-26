module.exports = function countAllPaarl(number){
console.log(number);

  var cjreg = [];
  var reg = number.split(",");
  for(var i = 0; i<reg.length; i++){

    var num = reg[i].trim();
    console.log(num);
    if(num.startsWith("CJ")){

      cjreg.push(num);
    //  break;

       }

}

 return cjreg.length;
}
