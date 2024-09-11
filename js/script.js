

function hitungLuas(){
alas= document.getElementById('alas').value;
tinggi= document.getElementById('tinggi').value;
luas= 0.5*alas*tinggi;
document.getElementById('luas').value=luas;
}




function hitungKeliling(){
    var a= document.getElementById('a').value;
    var b= document.getElementById('b').value;
    var c= document.getElementById('c').value;
    var keliling= parseInt(a) + parseInt(b) + parseInt(c);
    document.getElementById('keliling').value=keliling;

}

