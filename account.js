const fs = require('fs');
fs.readFile('accounts.txt', 'utf8', (err,data) => {
  if(err){
    console.error(err);
    return;
  }
  lineByLine(data);
});

function lineByLine(text){
    var e1, e2, e3;
    var lines = text.split(/[\r\n]+/g);
    for(var i = 0; i < lines.length; i++) {
        console.log(lines[i]);
        if(i%3==0) e1 = lines[i];
        if(i%3==1) e2 = lines[i];
        if(i%3==2){
            e3 = lines[i];
            analysis(e1,e2,e3,(i+1)/3);
        } 
    }
}

var m0 = [
 " _ ",
 "| |",
 "|_|"
];
	
var m1 = [
 "   ",
 "  |",
 "  |"
];

var m2 = [
" _ ",
" _|",
"|_ "
];

var m3 = [
  " _ ",
  " _|",
  " _|"
];

var m4 = [
  "   ",
  "|_|",
  "  |"
];

var m5 = [
  " _ ",
  "|_ ",
  " _|"
];

var m6 = [
  " _ ",
  "|_ ",
  "|_|"
];

var m7 = [
  " _ ",
  "  |",
  "  |"
];

var m8 = [
  " _ ",
  "|_|",
  "|_|"
];

var m9 = [
  " _ ",
  "|_|",
  " _|"
];

function analysis(e1,e2,e3,j){
    var c1,c2,c3, account="", flag=0;
    for(var n = 0; n<9; n++){
        c1="";
        c2="";
        c3="";
        for(var i=0; i<3; i++){
            c1 += e1.charAt((n*3)+i);
            c2 += e2.charAt((n*3)+i);
            c3 += e3.charAt((n*3)+i);
        }
        account += decoder(c1,c2,c3);
        if(account.charAt(account.length-1)=='?') flag =1;
    }
    if(flag==1) console.log("==> "+account+" ILL");
    else console.log("==> "+account+" "+checkSum(account));
}

function decoder(c1, c2, c3) {
    var digit="";
    if(c1===m0[0] && c2===m0[1] && c3===m0[2]) digit = 0;
    else if(c1===m1[0] && c2===m1[1] && c3===m1[2]) digit = 1;
    else if(c1===m2[0] && c2===m2[1] && c3===m2[2]) digit = 2;
    else if(c1===m3[0] && c2===m3[1] && c3===m3[2]) digit = 3;
    else if(c1===m4[0] && c2===m4[1] && c3===m4[2]) digit = 4;
    else if(c1===m5[0] && c2===m5[1] && c3===m5[2]) digit = 5;
    else if(c1===m6[0] && c2===m6[1] && c3===m6[2]) digit = 6;
    else if(c1===m7[0] && c2===m7[1] && c3===m7[2]) digit = 7;
    else if(c1===m8[0] && c2===m8[1] && c3===m8[2]) digit = 8;
    else if(c1===m9[0] && c2===m9[1] && c3===m9[2]) digit = 9;
    else digit = '?';
    return digit;
}

function checkSum(possible){
  var d1 = possible.charAt(8);
  var d2 = possible.charAt(7);
  var d3 = possible.charAt(6);
  var d4 = possible.charAt(5);
  var d5 = possible.charAt(4);
  var d6 = possible.charAt(3);
  var d7 = possible.charAt(2);
  var d8 = possible.charAt(1);
  var d9 = possible.charAt(0);
  if ((1*d1 + 2*d2 + 3*d3 + 4*d4 + 5*d5 + 6*d6 + 7*d7 + 8*d8  + 9*d9) % 11 == 0) return 'OK'
  else return 'ERR'; 
}

