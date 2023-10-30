slide1()
slide1D()

function Gojo(){
    var texto = document.getElementById("th");

    document.getElementById("img").src="Gojo.png";    
    texto = "Satoro Gojo";
    document.getElementById("th").innerHTML =  texto; 
}

function Itadori(){
    var texto = document.getElementById("th");

    document.getElementById("img").src="itadori.webp";    
    texto = "Yuji Itadori";
    document.getElementById("th").innerHTML =  texto; 
}

function Fushiguro(){
    var texto = document.getElementById("th");

    document.getElementById("img").src="fushiguro.png";    
    texto = "Megumi Fushiguro";
    document.getElementById("th").innerHTML =  texto; 
}

function Nobara(){
    var texto = document.getElementById("th");

    document.getElementById("img").src="nobara.webp";    
    texto = "Nobara Kugisake";
    document.getElementById("th").innerHTML =  texto; 
}

function Sukuna(){
    var texto = document.getElementById("th");

    document.getElementById("img").src="sukuna.png";    
    texto = "Ryomei Sukuna";
    document.getElementById("th").innerHTML =  texto; 
}

function slide1(){
    document.getElementById("igif2").src="logog.gif"
    setTimeout("slide2()",3000)
}
function slide2(){
    document.getElementById("igif2").src="gojog.gif"
    setTimeout("slide3()",3000)
}
function slide3(){
    document.getElementById("igif2").src="itadorig.gif"
    setTimeout("slide1()",3000)
}

function slide1D(){
    document.getElementById("igif").src="megumig.gif"
    setTimeout("slide2D()",3000)
}
function slide2D(){
    document.getElementById("igif").src="nobarag.gif"
    setTimeout("slide1D()",1500)
}