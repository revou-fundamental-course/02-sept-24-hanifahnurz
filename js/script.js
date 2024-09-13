

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

function hitungLuasPersegiPanjang(){
    panjang= document.getElementById('persegi-panjang').value;
    lebar= document.getElementById('persegi-lebar').value;
    luasPersegiPanjang= panjang*lebar;
    document.getElementById('luas-persegi-panjang').value=luasPersegiPanjang;
    
}

function hitungKelilingPersegiPanjang(){
    panjang= document.getElementById('persegik-panjang').value;
    lebar= document.getElementById('persegik-lebar').value;
    kelilingPersegiPanjang= (parseInt(panjang)*2) + (parseInt(lebar)*2) ;
    document.getElementById('keliling-persegi-panjang').value=kelilingPersegiPanjang;
    
}

function hitungLuasBelah(){
    d1= document.getElementById('d1').value;
    d2= document.getElementById('d2').value;
    luas= 0.5*d1*d2;
    document.getElementById('luas-belah-ketupat').value=luas;

}

function hitungKelilingBelah(){
    sisiBelah= document.getElementById('sisik-belah').value;
    kelilingBelah= sisiBelah*4;
    document.getElementById('keliling-belah-ketupat').value=kelilingBelah;
    
}