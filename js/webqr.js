var gCtx = null;
var gCanvas = null;
var imageData = null;
var c=0;
var stype=0;
var webkit=false;
var v=null;

function initCanvas(ww,hh)
{
	gCanvas = document.getElementById("qr-canvas");
	var w = ww;
	var h = hh;
	gCanvas.style.width = w + "px";
	gCanvas.style.height = h + "px";
	gCanvas.width = w;
	gCanvas.height = h;
	gCtx = gCanvas.getContext("2d");
	gCtx.clearRect(0, 0, w, h);
	imageData = gCtx.getImageData( 0,0,320,240);
}

function htmlEntities(str) {
	return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function read(a)
{
	var html="<br>";
	if(a.indexOf("http://") === 0 || a.indexOf("https://") === 0)
		html+="<a target='_blank' href='"+a+"'>"+a+"</a><br>";
	html+="<b>"+htmlEntities(a)+"</b><br><br>";
	document.getElementById("result").innerHTML=html;
}	

function isCanvasSupported(){
	var elem = document.createElement('canvas');
	return !!(elem.getContext && elem.getContext('2d'));
}

function load()
{
	if(isCanvasSupported() && window.File && window.FileReader)
	{
		initCanvas(800,600);
		qrcode.callback = read;
		document.getElementById("mainbody").style.display="inline";
	}
	else
	{
		document.getElementById("mainbody").style.display="inline";
		document.getElementById("mainbody").innerHTML='<p id="mp1">QR code scanner for HTML5 capable browsers</p><br>'+
		'<br><p id="mp2">sorry your browser is not supported</p><br><br>'+
		'<p id="mp1">try <a href="http://www.mozilla.com/firefox"><img src="firefox.png"/></a> or <a href="http://chrome.google.com"><img src="chrome_logo.gif"/></a> or <a href="http://www.opera.com"><img src="Opera-logo.png"/></a></p>';
	}
}

function setimg()
{
    
    
	if(stype==2)
		return;
	var qrfile = document.getElementById('qrimage').src;
	gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
	qrcode.decode(qrfile);
	//stype=2;
}
