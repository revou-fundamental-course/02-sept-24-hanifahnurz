

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


function hitungLuasJajar(){
    alasJajar= document.getElementById('alas-jajar').value;
    tinggiJajar= document.getElementById('tinggi-jajar').value;
    luasJajar= alasJajar*tinggiJajar;
    document.getElementById('luas-jajar').value=luasJajar;
}

function hitungKelilingJajar(){
    var lebarJajar= document.getElementById('lebar-jajar').value;
    var panjangJajar= document.getElementById('panjang-jajar').value;
    var kelilingJajar= (parseInt(lebarJajar)*2) + (parseInt(panjangJajar)*2);
    document.getElementById('keliling-jajar').value=kelilingJajar;
    
}

function hitungLuasPersegi(){
    sisi= document.getElementById('sisi-persegi').value;
    luasPersegi= sisi*sisi;
    document.getElementById('luas-persegi').value=luasPersegi;
    
}

function hitungKelilingPersegi(){
    sisiPersegi= document.getElementById('sisik-persegi').value;
    kelilingPersegi= sisiPersegi*4;
    document.getElementById('keliling-persegi').value=kelilingPersegi;
    
}