//function for encoding a message hamming code
function hammingCalc(){
    const input = document.getElementById("input1").value;
    const type1 = document.getElementById("drop2").value;
    const type2 = document.getElementById("drop1").value;
    let result = document.getElementById("output1");

    if(type1 === "Left-To-Right" && type2 ==="Even"){
        result.value = hammingCodeLtoREven(input);
    }else if(type1 === "Right-To-Left" && type2 === "Even"){
        result.value = hammingCodeRtoLEven(input);
    }else if(type1 === "Left-To-Right" && type2 === "Odd"){
        result.value = hammingCodeLtoROdd(input);
    }else if(type1 === "Right-To-Left" && type2 === "Odd"){
        result.value = hammingCodeRtoLOdd(input);
    }
}

//function for encoding message using hamming code with even parity from left to right
function hammingCodeLtoREven(x){
    let n = x.length;
    let p = 0,t = 0,c=0;
    let k = 0, l = 0,s=0;
    let res = "",res1="";
    var par=0;
    //find number of parity bits
    while(p==0){
        if (Math.pow(2,s) >= n+ s + 1){
        p=s;
        }
        s+=1;
    }
    t=p+n; //total bit of hamming code
    for (var j = 0; j<t; j++){
        if((j+1)== Math.pow(2,k)){
            res = res + "?";
            k+=1;
        }else{
            res = res + x[l];
            l+=1;
        }
    }
    for (var i =0; i<res.length;i++){
        if(res[i]=="?"){
            c=i+2;
            while(c<=t){
                if(((i+1) & c) == (i+1)){
                    par += parseInt(res[c-1]);
                }
                c+=1;
            }
            if(par % 2 == 0){
                res1 +="0";
            }else {
                res1 +="1";
            }
            par =0;
        }else{
            res1 += res[i];
        }
    }
    console.log(res);
    return res1;
}

//function for encoding message using hamming code with even parity from right ot left
function hammingCodeRtoLEven(x){
    let n = x.length;
    let p = 0,t = 0,c=0;
    let k = 0, l = 0,s=0;
    let res = "",res1="";
    let par=0;
    x= x.split("").reverse().join("");//reverse the input for R to L
    //find number of parity bits
    while(p==0){
        if (Math.pow(2,s) >= n+ s + 1){
        p=s;
        }
        s+=1;
    }
    t=p+n; //total bit of hamming code
    for (var j = 0; j<t; j++){
        if((j+1)== Math.pow(2,k)){
            res = res + "?";
            k+=1;
        }else{
            res = res + x[l];
            l+=1;
        }
    }
    for (var i =0; i<res.length;i++){
        if(res[i]=="?"){
            c=i+2;
            while(c<=t){
                if(((i+1) & c) == (i+1)){
                    par += parseInt(res[c-1]);
                }
                c+=1;
            }
            if(par % 2 == 0){
                res1 +="0";
            }else {
                res1 +="1";
            }
            par =0;
        }else{
            res1 += res[i];
        }
    }
    console.log(res);
    return res1.split("").reverse().join(""); //reverse the ans to get the ans for R to L
}

//function for encoding message using hamming code with odd parity from left to right
function hammingCodeLtoROdd(x){
    let n = x.length;
    let p = 0,t = 0,c=0;
    let k = 0, l = 0,s=0;
    let res = "",res1="";
    var par=0;
    //find number of parity bits
    while(p==0){
        if (Math.pow(2,s) >= n+ s + 1){
        p=s;
        }
        s+=1;
    }
    t=p+n; //total bit of hamming code
    for (var j = 0; j<t; j++){
        if((j+1)== Math.pow(2,k)){
            res = res + "?";
            k+=1;
        }else{
            res = res + x[l];
            l+=1;
        }
    }
    for (var i =0; i<res.length;i++){
        if(res[i]=="?"){
            c=i+2;
            while(c<=t){
                if(((i+1) & c) == (i+1)){
                    par += parseInt(res[c-1]);
                }
                c+=1;
            }
            if(par % 2 == 0){
                res1 +="1";
            }else {
                res1 +="0";
            }
            par =0;
        }else{
            res1 += res[i];
        }
    }
    console.log(res);
    return res1;
}

//function for encoding message using hamming code with odd parity from Right to left
function hammingCodeRtoLOdd(x){
    let n = x.length;
    let p = 0,t = 0,c=0;
    let k = 0, l = 0,s=0;
    let res = "",res1="";
    let par=0;
    x= x.split("").reverse().join("");//reverse the input for R to L
    //find number of parity bits
    while(p==0){
        if (Math.pow(2,s) >= n+ s + 1){
        p=s;
        }
        s+=1;
    }
    t=p+n; //total bit of hamming code
    for (var j = 0; j<t; j++){
        if((j+1)== Math.pow(2,k)){
            res = res + "?";
            k+=1;
        }else{
            res = res + x[l];
            l+=1;
        }
    }
    for (var i =0; i<res.length;i++){
        if(res[i]=="?"){
            c=i+2;
            while(c<=t){
                if(((i+1) & c) == (i+1)){
                    par += parseInt(res[c-1]);
                }
                c+=1;
            }
            if(par % 2 == 0){
                res1 +="1";
            }else {
                res1 +="0";
            }
            par =0;
        }else{
            res1 += res[i];
        }
    }
    console.log(res);
    return res1.split("").reverse().join(""); //reverse the ans to get the ans for R to L
}

//function for  error detection of a message in hamming code
function hammingCalc1(){
    let input1 = document.getElementById("detect-input").value;
    const type1 = document.getElementById("detect-type1").value;
    const type2 = document.getElementById("detect-type2").value;
    let result1 = document.getElementById("detect-result");

    if(type1 === "Right-To-Left" && type2 === "Even"){//right to left with even parity
        let n = input1.length;
        let k=0,ctr=0;
        var parity = "";
        input1= input1.split("").reverse().join("");
        for (var i = 0; i < n;i++){
            if((i+1)== Math.pow(2,k)){
                for(var j =i;j < n; j++){
                    if(((i+1) & (j+1)) == (i+1)){
                        if(input1[j] == "1"){
                            ctr++;
                        }else{
                            ctr +=0;
                        }
                    }
                }
                if(ctr % 2 == 0){
                    parity +="0";
                }else if(ctr % 2 == 1 ){
                    parity +="1";
                }
                ctr = 0;
                k++;
            }
        }
        if(parseInt(parity)==0){
            result1.innerHTML = "Error Free";
        }else{
            parity =  parity.split("").reverse().join("");
            var p = parseInt(parity,2).toString();
            result1.innerHTML = "The position of error is  &nbsp; &nbsp; " + `${(n-p)+1}` + "&nbsp;&nbsp; from left or &nbsp;&nbsp;" + p +"&nbsp;&nbsp; from right";
        }
    }else if(type1 === "Left-To-Right" && type2 === "Even"){ //left to right using even parity
        let n = input1.length;
        let k=0,ctr=0;
        var parity = "";
        for (var i = 0; i < n;i++){
            if((i+1)== Math.pow(2,k)){
                for(var j =i;j < n; j++){
                    if(((i+1) & (j+1)) == (i+1)){
                        if(input1[j] == "1"){
                            ctr++;
                        }else{
                            ctr +=0;
                        }
                    }
                }
                if(ctr % 2 == 0){
                    parity +="0";
                }else if(ctr % 2 == 1 ){
                    parity +="1";
                }
                ctr = 0;
                k++;
            }
        }
        if(parseInt(parity)==0){
            result1.innerHTML = "Error Free";
        }else{
            parity =  parity.split("").reverse().join("");
            var p = parseInt(parity,2).toString();
            result1.innerHTML = "The position of error is  &nbsp; &nbsp; " + p + "&nbsp;&nbsp; from left or &nbsp;&nbsp;" +  `${(n-p)+1}` +"&nbsp;&nbsp; from right";
        }
    }else if (type1 === "Right-To-Left" && type2 === "Odd"){//for right to left using odd parity
        let n = input1.length;
        let k=0,ctr=0;
        var parity = "";
        input1= input1.split("").reverse().join("");
        for (var i = 0; i < n;i++){
            if((i+1)== Math.pow(2,k)){
                for(var j =i;j < n; j++){
                    if(((i+1) & (j+1)) == (i+1)){
                        if(input1[j] == "1"){
                            ctr++;
                        }else{
                            ctr +=0;
                        }
                    }
                }
                if(ctr % 2 == 0){
                    parity +="1";
                }else if(ctr % 2 == 1 ){
                    parity +="0";
                }
                ctr = 0;
                k++;
            }
        }
        if(parseInt(parity)==0){
            result1.innerHTML = "Error Free";
        }else{
            parity =  parity.split("").reverse().join("");
            var p = parseInt(parity,2).toString();
            result1.innerHTML = "The position of error is  &nbsp; &nbsp; " + `${(n-p)+1}` + "&nbsp;&nbsp; from left or &nbsp;&nbsp;" + p +"&nbsp;&nbsp; from right";
        }
    }else if(type1 === "Left-To-Right" && type2 === "Odd"){//left to right using odd parity
        let n = input1.length;
        let k=0,ctr=0;
        var parity = "";
        for (var i = 0; i < n;i++){
            if((i+1)== Math.pow(2,k)){
                for(var j =i;j < n; j++){
                    if(((i+1) & (j+1)) == (i+1)){
                        if(input1[j] == "1"){
                            ctr++;
                        }else{
                            ctr +=0;
                        }
                    }
                }
                if(ctr % 2 == 0){
                    parity +="1";
                }else if(ctr % 2 == 1 ){
                    parity +="0";
                }
                ctr = 0;
                k++;
            }
        }
        if(parseInt(parity)==0){
            result1.innerHTML = "Error Free";
        }else{
            parity =  parity.split("").reverse().join("");
            var p = parseInt(parity,2).toString();

            result1.innerHTML = "The position of error is  &nbsp; &nbsp; " + p + "&nbsp;&nbsp; from left or &nbsp;&nbsp;" + `${(n-p)+1}` +"&nbsp;&nbsp; from right";
        }
    }
}

//-----------------------------------------------------------------------------------------------------

//correction of message in hamming code
function hammingcrctnEvenRtoL(x){
    let n = x.length;
    let k=0,ctr=0;
    var parity = "";
    var result ="";
    x= x.split("").reverse().join("");//remove this for LtoR
    for (var i = 0; i < n;i++){
        if((i+1)== Math.pow(2,k)){
            for(var j =i;j < n; j++){
                if(((i+1) & (j+1)) == (i+1)){
                    if(x[j] == "1"){
                        ctr++;
                    }else{
                        ctr +=0;
                    }
                }
            }
            //console.log(ctr);
            if(ctr % 2 == 0){
                parity +="0";//parity +="1";//for odd
            }else if(ctr % 2 == 1 ){
                parity +="1";//parity +="0";//for odd
            }
            
            ctr = 0;
            k++;
        }
    }
    //console.log(parity);
    if(parseInt(parity)==0){
        result = "Error Free";
        return result;
    }else{
        parity =  parity.split("").reverse().join("");
        var p = parseInt(parity,2);
        for(var a = 0; a<n;a++){
            if(a == p-1){
                if(x[a] == "1"){
                    result +="0";
                }else{
                    result +="1";
                }
            }else{
                result += x[a];
            }
        }
        return result.split("").reverse().join("");//return result;//for LtoR
    }
}

//-------------------------------------------------------------
//decoding of message in hamming code

//function for binary to bcd code
function convertbcd() {
    const fromCode = document.getElementById("bcd-select1").value;
    const toCode = document.getElementById("bcd-select2").value;
    var input = document.getElementById("bcd-input").value;
    let result = document.getElementById("bcd-result");

    if( fromCode=="BCD Code" && toCode=="BCD Code")
    result.innerHTML=input;
    else if(fromCode=="Decimal" && toCode=="Decimal")
    result.innerHTML=input;
    else if(fromCode=="BCD Code" && toCode =="Decimal")
    result.innerHTML=bcdTOdecimal(input).join('_');
    else if(fromCode=="Decimal" && toCode=="BCD Code")
    result.innerHTML =decimalTObcd(input);
    if (input == "") {
        result.innerHTML = "";
    } else if (fromCode=="BCD Code" && input.search(/^[10]+$/) == -1 ){
        result.innerHTML = "BCD Code can only have 0's and 1's";

    }
}

//Function that performs conversion of  binary to bcd
function separator(str, n) { //used for converting BCD code to decimal
    var val = [];
    var i, l;
    for(i = 0, l = str.length; i < l; i += n) {
       val.push(parseInt(str.substr(i, n),2));
    }

    return val;
};
function bcdTOdecimal(x) {
    var y=x.length;
    var input1="";
    var inv=["I","N","V","A","L","I","D"];
    if(y%4==1 || y==1)
    input1="000"+x;
    else if(y%4==2 || y==2)
    input1="00"+x;
    else if(y%4==3 || y==3)
    input1="0"+x;
    else
    input1=x;
    const minVal = (currentValue) => currentValue <= 9;
    w=separator(input1,4);
    if(w.every(minVal)==true)
    return w;
    else
    return inv;
    }
function decimalTObcd(z=""){
    var x = "_";

    for (var i = 0; i < z.length; i++) {
        var y = parseInt(z[i]).toString(2)
        if (y.length == 1) {
        x = x + "000" + y + "_   ";
        }
        if (y.length == 2) {
        x = x + "00" + y + "_   ";
        }
        if (y.length == 3) {
        x = x + "0" + y + "_   ";
        }
        if (y.length == 4) {
        x = x + +y + "_   ";
        }

    }
    return x;

}

//function for bcd addition
//Function to perform BCD addition
function bcdadd(){
    var input1 = document.getElementById("bcdadd-input1").value;
    var input2 = document.getElementById("bcdadd-input2").value;
    let result = document.getElementById("bcdadd-result");

    var s1= bcdTOdecimal(input1).join('');
    var s2= bcdTOdecimal(input2).join('');
    var decimalresult;
    var bcdresult;
    if(s1=="INVALID" || s2=="INVALID")
    result.innerHTML="INVALID BCD";
    else{
        decimalresult=parseInt(s1)+parseInt(s2);
        bcdresult=decimalTObcd(decimalresult.toString());
        result.innerHTML="BCD Result="+bcdresult+"<br>";
        result.innerHTML +="Decimal Result="+decimalresult+"<br>";

    }
    if (input1 == "" && input2 == "") {
        result.innerHTML = "";
    } else if (input1.search(/^[10]+$/) == -1 || input2.search(/^[10]+$/) == -1 )
        result.innerHTML = "BCD Code can only have 0's and 1's";

}


//Function that performs conversion of grey to binary and viceversa
function convertgrey() {
    const fromBase = document.getElementById("grey-select1").value;
    var input = document.getElementById("grey-input").value;
    let result = document.getElementById("grey-result");
    let work = document.getElementById("grey-working");
    let print = "<h2 style='margin-top: 50px;'>Working Steps </h2> &emsp;";
    var x = input[0];

    if (fromBase == "Binary"){
        print +=  "<h4> Converting Binary to Grey Code </h4> &emsp;";
        print +=  "<br><h5>STEP 1 : Take the first bit of the input and write it to the output.</h5>";
        print +=  "Output ->" + x;
        print +=  "<br><h5>STEP 2 : Repeat the steps below until you reach the end of the input </h5>";
        for (var i = 1; i < input.length; i++){
            var m= parseInt(input[i - 1] ^ input[i]).toString();
            print += "Take the " + (i+1) + "'th bit of the input and XOR it to the previous bit of the input " + "i.e,"+ input[i] + "⊕" + input[i-1] + "=" + m + "<br>";
            print +=  "Write the result to the output. Outputh ->" + x + "<span style='text-decoration: underline;'>" + m + "</span><br><br>";
            x += m;
        }
        print += "<br><h5>STEP 3 : So, our final gray code result is" + x + "</h5>";
    }

    else{
        print +=  "<h4> Converting Grey Code to Binary </h4> &emsp;";
        print +=  "<br><h5>STEP 1 : Take the first bit of the gray code input and write it to the output. Output -> " + x + "</h5>";
        print +=  "<br><h5>STEP 2 : Repeat the steps below until you reach the end of the input </h5>";
        for (var i = 1; i < input.length; i++){
            var n = parseInt(x[i - 1] ^ input[i]).toString();
            print += "Take the " + (i+1) + "'th bit of the input and XOR it to the previous bit of the Output " + "i.e,"+ input[i] + "⊕" + x.charAt(x.length-1) + "=" + n + "<br>";
            print +=  "Write the result to the output. Outputh ->" + x + "<span style='text-decoration: underline;'>" + n + "</span><br><br>";
            x += n;
        }
        print += "<br><h5>Step 3 : So, our binary result is:" + x + " </h5>";
    }

    if (input == "") {
        x= "";
    } else if(input.search(/^[10]+$/) == -1)
             x= "Binary and grey code can only have 0's and 1's";
    result.innerHTML = "Answer ->" + x;
    work.innerHTML = print;
}


//Function that performs conversion of Binary to Decimal to Hexadecimal and viceversa
function convertBinhex() {
    const fromBase = document.getElementById("binary-hexadecimal-select1").value;
    const toBase = document.getElementById("binary-hexadecimal-select2").value;
    const input = document.getElementById("binary-hexadecimal-input").value;
    let result = document.getElementById("binary-hexadecimal-result");
    let from = 2;
    let to = 2;

    if (fromBase === "Binary") from = 2;
    else if (fromBase === "Decimal") from = 10;
    else if (fromBase === "Octal") from = 8;
    else from = 16;

    if (toBase === "Binary") to = 2;
    else if (toBase === "Decimal") to = 10;
    else if (toBase === "Octal") to = 8;
    else to = 16;

    result.innerHTML = fracDectoBinHexOct(calculatefrac(input,from),to);
    if (input == "") {
        result.innerHTML = "";
    } else if (from == 2) {
        if (input.search(/^[-.10]+$/) == -1)
            result.innerHTML = "Binary numbers can only have 0's and 1's";

    }else if (from == 8) {
        if (input.search(/^[-.01234567]+$/) == -1)
            result.innerHTML = "Octal numbers can't have 8s and 9s";

    }
}

//converts both integer and fractional of decimal to binary/octal/hexadecimal
function fracDectoBinHexOct(value, base){
    var i = 1;
    var s = "";
    var n ;
    var [integer , fraction = ''] = value.toString().split('.');
    fraction = Math.pow(10,-1 * fraction.length) * fraction;

    while(i<=7 ){
       fraction = base * fraction;
       s = s + parseInt(fraction).toString(base);;
       fraction = "0"+fraction.toString().substring(fraction.toString().indexOf("."));
       n= Math.abs(fraction);
       if(n - Math.floor(n) == 0){
       break;
       }
       i++;
    }
    return  (parseInt(integer,10).toString(base) + "."+ s );
}


//converts both integer and fractional part of  binary/hexa/octal to decimal
function calculatefrac(value, base = 2) {
    var [integer, fraction = ''] = value.toString().split('.');

    return parseInt(integer, base) + (integer[0] !== '-' || -1) * fraction.split('').reduceRight((r, a) => (r + parseInt(a, base)) / base, 0);
}

//---------------------------------------------------------
//Function for addition of any number system
function addBinDecHexOct(){
    const firstBase = document.getElementById("adding-all-select1").value;
    const secondBase = document.getElementById("adding-all-select2").value;
    const input1 = document.getElementById("adding-all-input1").value;
    const input2 = document.getElementById("adding-all-input2").value;
    const resultType= document.getElementById("adding-all-result-type").value;
    let result = document.getElementById("adding-all-result");
    var x1,x1o;
    var x2,x2o;

    if(firstBase === "Binary"){
        x1=parseInt(input1,2);
        x1o=x1.toString(2);
    }
    else if (firstBase === "Octal"){
        x1=parseInt(input1,8);
        x1o=x1.toString(8);
    }
    else if(firstBase === "Hexa Decimal"){
        x1=parseInt(input1,16);
        x1o=x1.toString(16);
    }
    else if(firstBase === "Decimal"){
        x1=parseInt(input1);
        x1o=x1;
    }

    if(secondBase === "Binary"){
        x2=parseInt(input2,2);
        x2o=x2.toString(2);
    }
    else if (secondBase === "Octal"){
        x2=parseInt(input2,8);
        x2o=x2.toString(8);
    }
    else if(secondBase === "Hexa Decimal"){
        x2=parseInt(input2,16);
        x2o=x2.toString(16);
    }
    else if(secondBase === "Decimal"){
        x2=parseInt(input2);
        x2o=x2;
    }

    var x3=x1+x2;
    console.log(x1)
    if(isNaN(x1) || x1o!=input1)
    result.innerHTML="Enter correct "+firstBase+" value in Input 1";
    else if(isNaN(x2)|| x2o!=input2)
    result.innerHTML="Enter a "+secondBase+" value in Input 2";
    else if(resultType === "Binary")
    result.innerHTML="Answer in binary="+x3.toString(2);
    else if (resultType === "Octal")
    result.innerHTML="Answer in Octal="+x3.toString(8);
    else if(resultType === "Hexa Decimal")
    result.innerHTML="Answer in Hexa Decimal="+x3.toString(16);
    else if(resultType === "Decimal")
    result.innerHTML="Answer in Decimal="+x3.toString();
    else
    result.innerHTML="";
}

//----------------------------------------------------------------------------
//Function for subtraction of any number system
function subBinDecHexOct(){
    const base = document.getElementById("subtract-all-select1").value;
    var input1 = document.getElementById("subtract-all-input1").value;
    var input2 = document.getElementById("subtract-all-input2").value;
    let result = document.getElementById("subtract-all-result");
    let work = document.getElementById("subtract-all-working");
    let print = "<h2 style='margin-top: 50px;'>Working Steps </h2> &emsp;"

    if(input1.length>input2.length){
        var p=input1.length-input2.length;
        p = Math.pow(10,p);
        input2 = p + input2;
        input2 = input2.substring(1);
        input1 = input1;
    } else if (input1.length < input2.length){
        var t = input2.length-input1.length;
        t = Math.pow(10,t);
        input1 = t + input1;
        input1 = input1.substring(1);
        input2 = input2;
    } else {
        input1 = input1;
        input2 = input2;
    }

    if(base === "Binary"){
        var add = "";
        var ans = "";

        var twoco= calculateTwoComplement(input2);
        print += "<h5>STEP 0 : Find 2's complement of Subtrahend</h5>"+input2+"->"+twoco;
        add = (parseInt(twoco,2)+parseInt(input1,2)).toString(2);
        print += "<br><br><h5>STEP 1 : Add Minuend and 2's complement of Subtrahend</h5>"+"<p>&nbsp;&nbsp;&nbsp;" + input1 + "<br>+&nbsp;" + twoco+ "<br>--------<br>&nbsp;&nbsp;&nbsp;" + add+"</p>";
        if(add.length == input1.length){
            ans = calculateTwoComplement(add);
            result.innerHTML = "-" + ans;
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  _"+add+"<br>";
            print += "Note- No carry is present. So, answer will be -ve <br>"
            print += "<br><h5>STEP 3 : Find 2's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Two's complement of the sum ) ->  <span style='text-decoration: underline;'>-" + ans + "</span>";
        } else if (add.length > input1.length){
            ans = add.substring(1);
            result.innerHTML = ans;
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  <span style='text-decoration: underline;'>"+add.substring(0,1) + "</span>" +ans+"<br>";
            print += "Note- Carry is present. So, answer will be +ve <br>"
            print += "<br><h5>STEP 3 : Find 2's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Discard the carry) ->   <span style='text-decoration: underline;'>" + ans + "</span>";
        } else if (add.length < input1.length){
            var a1 = input1.length - add.length;
            a1 = Math.pow(10,a1);
            add = a1 + add;
            ans = add.substring(1);
            result.innerHTML = "-" + calculateTwoComplement(ans);
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  _"+add+"<br>";
            print += "Note- No carry is present. So, answer will be -ve <br>"
            print += "<br><h5>STEP 3 : Find 2's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Two's complement of the sum) ->   <span style='text-decoration: underline;'>-" + ans + "</span>";
        }

    }else if(base === "Octal"){
        var add1 = "";
        var ans1 = "";
        var eigco= calculateEightComplement(input2);
        print += "<h5>STEP 0 : Find 8's complement of Subtrahend</h5>"+input2+"->"+eigco;
        add1 = (parseInt(eigco,8)+parseInt(input1,8)).toString(8);
        print += "<br><br><h5>STEP 1 : Add Minuend and 8's complement of Subtrahend</h5>"+"<p>&nbsp;&nbsp;&nbsp;" + input1 + "<br>+&nbsp;" + eigco+ "<br>--------<br>&nbsp;&nbsp;&nbsp;" + add1+"</p>";
        if(add1.length == input1.length){
            ans1 = calculateEightComplement(add1);
            result.innerHTML = "-" + ans1;
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  _"+add1+"<br>";
            print += "Note- No carry is present. So, answer will be -ve <br>"
            print += "<br><h5>STEP 3 : Find 8's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Eight's complement of the sum ) ->  <span style='text-decoration: underline;'>-" + ans1 + "</span>";
        } else if (add1.length > input1.length){
            ans1 = add1.substring(1);
            result.innerHTML = ans1;
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  <span style='text-decoration: underline;'>"+add1.substring(0,1) + "</span>" +ans1+"<br>";
            print += "Note- Carry is present. So, answer will be +ve <br>"
            print += "<br><h5>STEP 3 : Find 8's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Discard the carry) ->   <span style='text-decoration: underline;'>" + ans1 + "</span>";
        } else if (add1.length < input1.length){
            var a2 = input1.length - add1.length;
            a2 = Math.pow(10,a2);
            ans1 = a2 + add1;
            ans1 = ans1.substring(1);
            result.innerHTML = "-" + calculateEightComplement(ans1);
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  _"+add1+"<br>";
            print += "Note- No carry is present. So, answer will be -ve <br>"
            print += "<br><h5>STEP 3 : Find 8's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Eight's complement of the sum) ->   <span style='text-decoration: underline;'>-" + ans1 + "</span>";
        }

    }else if(base === "Hexa Decimal"){
        var add2 = "";
        var ans2 = "";
        var sixtnco= calculateSixteenComplement(input2);
        print += "<h5>STEP 0 : Find 16's complement of Subtrahend</h5>"+input2+"->"+sixtnco;
        add2 = (parseInt(sixtnco,16)+parseInt(input1,16)).toString(16);
        print += "<br><br><h5>STEP 1 : Add Minuend and 16's complement of Subtrahend</h5>"+"<p>&nbsp;&nbsp;&nbsp;" + input1 + "<br>+&nbsp;" + sixtnco+ "<br>--------<br>&nbsp;&nbsp;&nbsp;" + add2+"</p>";
        if(add2.length == input1.length){
            ans2 = calculateSixteenComplement(add2);
            result.innerHTML = "-" + ans2;
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  _"+add2+"<br>";
            print += "Note- No carry is present. So, answer will be -ve <br>"
            print += "<br><h5>STEP 3 : Find 16's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Sixteen's complement of the sum ) ->  <span style='text-decoration: underline;'>-" + ans2 + "</span>";
        } else if (add2.length > input1.length){
            ans2 = add2.substring(1);
            result.innerHTML = ans2;
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  <span style='text-decoration: underline;'>"+add2.substring(0,1) + "</span>" +ans2+"<br>";
            print += "Note- Carry is present. So, answer will be +ve <br>"
            print += "<br><h5>STEP 3 : Find 16's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Discard the carry) ->   <span style='text-decoration: underline;'>" + ans2 + "</span>";
        } else if (add2.length < input1.length){
            var a3 = input1.length - add2.length;
            a3 = Math.pow(10,a3);
            ans2 = a3 + add2;
            ans2 = ans2.substring(1);
            result.innerHTML = "-" + calculateSixteenComplement(ans2);
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  _"+add2+"<br>";
            print += "Note- No carry is present. So, answer will be -ve <br>"
            print += "<br><h5>STEP 3 : Find 16's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Sixteen's complement of the sum) ->   <span style='text-decoration: underline;'>-" + ans2 + "</span>";
        }

    }else if(base === "Decimal"){
        var add3 = "";
        var ans3 = "";
        var tenco= calculateTenComplement(input2);
        print += "<h5>STEP 0 : Find 10's complement of Subtrahend</h5>"+input2+"->"+tenco;
        add3 = (parseInt(tenco)+parseInt(input1)).toString();
        print += "<br><br><h5>STEP 1 : Add Minuend and 10's complement of Subtrahend</h5>"+"<p>&nbsp;&nbsp;&nbsp;" + input1 + "<br>+&nbsp;" + tenco+ "<br>--------<br>&nbsp;&nbsp;&nbsp;" + add3+"</p>";
        if(add3.length == input1.length){
            ans3 = calculateTenComplement(add3);
            result.innerHTML = "-" + ans3;
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  _"+add3+"<br>";
            print += "Note- No carry is present. So, answer will be -ve <br>"
            print += "<br><h5>STEP 3 : Find 10's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Ten's complement of the sum ) ->  <span style='text-decoration: underline;'>-" + ans3 + "</span>";
        } else if (add3.length > input1.length){
            ans3 = add3.substring(1);
            result.innerHTML = ans3;
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  <span style='text-decoration: underline;'>"+add3.substring(0,1) + "</span>" +ans3+"<br>";
            print += "Note- Carry is present. So, answer will be +ve <br>"
            print += "<br><h5>STEP 3 : Find 10's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Discard the carry) ->   <span style='text-decoration: underline;'>" + ans3 + "</span>";
        } else if (add3.length < input1.length){
            var a4 = input1.length - add3.length;
            a4 = Math.pow(10,a4);
            ans3 = a4 + add3;
            ans3 = ans3.substring(1);
            result.innerHTML = "-" + calculateTenComplement(ans3);
            print += "<br><h5>STEP 2 : Check the presence of carry</h5>";
            print += "->  _"+add3+"<br>";
            print += "Note- No carry is present. So, answer will be -ve <br>"
            print += "<br><h5>STEP 3 : Find 10's complement of sum found in 'STEP 1'</h5>";
            print += "ANSWER (Ten's complement of the sum) ->   <span style='text-decoration: underline;'>-" + ans3 + "</span>";
        }

    }
    work.innerHTML = print;
}

//called this function while subtracting binary numbers.
function calculateTwoComplement(x){
    var ar = x.split("");
    var two = new Array(ar.length);

    for (var i = ar.length - 1; i >= 0; i--) {
        two[i] = ar[i];
        if (ar[i] == 1)
            break;

    }
    if (i == -1) {
        var twoc = '1' + two.join('');
    } else {
        for (var k = i - 1; k >= 0; k--) {
            if (ar[k] == 0) {
                two[k] = 1;

            } else {
                two[k] = 0;
            }
        }
        var twoc = two.join('');
    }
    return twoc;
}

//called this function while subtracting octal numbers
function calculateEightComplement(x){
    if(x.search(8)==0 || x.search(9)==0){
        return  "Invalid";
    }else{
    var sev = "";
    var eig = "";
    for (var i = 0; i < x.length; i++) {
        sev += '7' - x[i];
    }
    eig = (parseInt(sev,8) + 1).toString(8);
    return eig;
    }
}

//called this function while subtracting hexa-decimal numbers.
function calculateSixteenComplement(x){
    var fiftn1 = "";
    var sixtn1 = "";
    for (var i = 0; i < x.length; i++) {
        fiftn1 += ('15' - parseInt(x[i],16)).toString(16);
    }
    sixtn1 = (parseInt(fiftn1,16) + 1).toString(16);
    return sixtn1;
}

//called this function while subtracting decimal numbers.
function calculateTenComplement(x){
    var ninec = "";
    var tenc = "";
    for (var i = 0; i < x.length; i++) {
        ninec += '9' - x[i];
    }
    tenc = (parseInt(ninec) + 1).toString();
    return tenc;
}


//----------------------------------------------------

//Function for multiplication of any number system
function multBinDecHexOct(){
    const firstBase = document.getElementById("multiplying-all-select1").value;
    const secondBase = document.getElementById("multiplying-all-select2").value;
    const input1 = document.getElementById("multiplying-all-input1").value;
    const input2 = document.getElementById("multiplying-all-input2").value;
    const resultType= document.getElementById("multiplying-all-result-type").value;
    let result = document.getElementById("multiplying-all-result");
    var x1;
    var x2;

    if(firstBase === "Binary")
    x1=parseInt(input1,2);
    else if (firstBase === "Octal")
    x1=parseInt(input1,8);
    else if(firstBase === "Hexa Decimal")
    x1=parseInt(input1,16);
    else if(firstBase === "Decimal")
    x1=parseInt(input1);

    if(secondBase === "Binary")
    x2=parseInt(input2,2);
    else if (secondBase === "Octal")
    x2=parseInt(input2,8);
    else if(secondBase === "Hexa Decimal")
    x2=parseInt(input2,16);
    else if(secondBase === "Decimal")
    x2=parseInt(input2);

    var x3=x1*x2;

    if(resultType === "Binary")
    result.innerHTML="Answer in binary="+x3.toString(2);
    else if (resultType === "Octal")
    result.innerHTML="Answer in Octal="+x3.toString(8);
    else if(resultType === "Hexa Decimal")
    result.innerHTML="Answer in Hexa Decimal="+x3.toString(16);
    else if(resultType === "Decimal")
    result.innerHTML="Answer in Decimal="+x3.toString();
}


//call fucntions - calculateTenComplement, calculateSixteenComplement,... for calculating
//R and R-1 complement
