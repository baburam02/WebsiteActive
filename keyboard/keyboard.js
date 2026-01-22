var xy = '';
var FcapsLock = '0';
var Fshift = '0';

let shiftOn =document.getElementById('shift');
let btn = document.getElementById('btnq');

shiftOn.onclick = function() {
	if(btn.className =="btn"){
		btnq.className = "";
		btnw.className = "";
		btne.className = "";
		btnr.className = "";
		btnt.className = "";
		btny.className = "";
		btnu.className = "";
		btni.className = "";
		btno.className = "";
		btnp.className = "";

		btna.className = "";
		btns.className = "";
		btnd.className = "";
		btnf.className = "";
		btng.className = "";
		btnh.className = "";
		btnj.className = "";
		btnk.className = "";
		btnl.className = "";

		btnz.className = "";
		btnx.className = "";
		btnc.className = "";
		btnv.className = "";
		btnb.className = "";
		btnn.className = "";
		btnm.className = "";

		Fshift = '0';
	}
	else{
		btnq.className = "btn";
		btnw.className = "btn";
		btne.className = "btn";
		btnr.className = "btn";
		btnt.className = "btn";
		btny.className = "btn";
		btnu.className = "btn";
		btni.className = "btn";
		btno.className = "btn";
		btnp.className = "btn";

		btna.className = "btn";
		btns.className = "btn";
		btnd.className = "btn";
		btnf.className = "btn";
		btng.className = "btn";
		btnh.className = "btn";
		btnj.className = "btn";
		btnk.className = "btn";
		btnl.className = "btn";

		btnz.className = "btn";
		btnx.className = "btn";
		btnc.className = "btn";
		btnv.className = "btn";
		btnb.className = "btn";
		btnn.className = "btn";
		btnm.className = "btn";

		Fshift = '1';
		
	}
}

//Function key start

//back
function funcDel() {
	var valu = document.getElementById('display').innerHTML;
	var x = document.getElementById('display').innerHTML.length;
	var y = 1;
	var z = x-y;
	document.getElementById('display').innerHTML=valu.slice(0,z);
}
//Cap
function funcCL() {
	if (FcapsLock == '0') {
		FcapsLock = '1';
	}else if (FcapsLock == '1') {
		FcapsLock = '0';
	}
}
//Clear
function funcClear() {
	var valu = document.getElementById('display').innerHTML='';
	FcapsLock = '0';
    Fshift = '0';
}
//shifta
function funcShift() {
	if (Fshift == '0') {
		Fshift = '1';
	}else if (Fshift == '1') {
		Fshift = '0';
	}
}
//Enter
function funcEnter() {
	var valu = document.getElementById('display').innerHTML;'return key '
	if (valu == ' ') {
		alert('Not inserted : Empty innerHTML');
	}else{
		alert('Data Inserted : '+valu);

	}
}
//tab
function funcTab() {
	var valu = document.getElementById('display').innerHTML;
	document.getElementById('display').innerHTML=valu+'	';
}
//space
function funcSpace() {
	var valu = document.getElementById('display').innerHTML;
	document.getElementById('display').innerHTML=valu+' ';
}

//Letter keys
//q
function funcq() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'q';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'Q';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'Q';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'q';
			

		}
	}
}
//w
function funcw() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'w';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'W';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'W';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'w';
		}
	}
}
//e
function funce() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'e';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'E';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'E';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'e';
		}
	}
}
//r
function funcr() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'r';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'R';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'R';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'r';
		}
	}
}
//t
function funct() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'t';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'T';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'T';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'t';
		}
	}
}
//y
function funcy() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'y';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'Y';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'Y';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'y';
		}
	}
}
//u
function funcu() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'u';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'U';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'U';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'u';
		}
	}
}
//i
function funci() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'i';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'I';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'I';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'i';
		}
	}
}
//o
function funco() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'o';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'O';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'O';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'o';
		}
	}
}
//p
function funcp() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'p';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'P';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'P';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'p';
		}
	}
}
//a
function funca() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'a';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'A';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'A';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'a';


		}
	}
}
//s
function funcs() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'s';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'S';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'S';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'s';
		}
	}
}
//d
function funcd() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'d';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'D';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'D';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'d';
		}
	}
}
//f
function funcf() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'f';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'F';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'F';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'f';
		}
	}
}
//g
function funcg() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'g';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'G';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'G';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'g';
		}
	}
}
//h
function funch() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'h';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'H';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'H';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'h';
		}
	}
}
//j
function funcj() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'j';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'J';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'J';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'j';
		}
	}
}

//k
function funck() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'k';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'K';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'K';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'k';
		}
	}
}
//l
function funcl() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'l';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'L';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'L';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'l';
		}
	}
}

//z
function funcz() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'z';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'Z';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'Z';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'z';
		}
	}
}
//x
function funcx() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'x';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'X';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'X';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'x';
		}
	}
}
//c
function funcc() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'c';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'C';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'C';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'c';
		}
	}
}
//v
function funcv() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'v';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'V';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'V';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'v';
		}
	}
}
//b
function funcb() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'b';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'B';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'B';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'b';
		}
	}
}
//n
function funcn() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'n';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'N';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'N';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'n';
		}
	}
}
//m
function funcm() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'m';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'M';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'M';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'m';
		}
	}
}
//Number Keys
//1
function func1() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'1';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'!';
	}
}
//2
function func2() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'2';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'@';
	}
}
//3
function func3() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'3';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'#';
	}
}
//4
function func4() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'4';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'$';
	}
}
//5
function func5() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'5';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'%';
	}
}
//6
function func6() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'6';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'^';
	}
}
//7
function func7() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'7';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'&';
	}
}
//8
function func8() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'8';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'*';
	}
}
//9
function func9() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'9';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'(';
	}
}
//0
function func0() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'0';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+')';
	}
}
//Special keys
function funcSc1() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'`';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'~';
	}
}
function funcSc2() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'_';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'-';
	}
}
function funcSc3() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'[';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'{';
	}
}
function funcSc4() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+']';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'}';
	}
}
function funcSc5() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'\\';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'|';
	}
}
function funcSc6() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+';';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+':';
	}
}
function funcSc7() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+"'";
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'"';
	}
}
function funcSc8() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+',';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'<';
	}
}
function funcSc9() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'/';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'?';
	}
}
function funcDot() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'.';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'>';
	}
}



// For toggle button;

function toggleClass()
{

    const body = document.querySelector('body');
    body.classList.toggle('light');
    body.style.transition = `0.3s linear`;
}
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const progress = document.getElementById('progress');

function showCurrentTime() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;

    progress.style.width = (sec / 60) * 100 + '%'
}

setInterval(showCurrentTime, 1000)

// for time;
const deg = 6; 
// 360 / (12 * 5);

const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    let msec = day.getMilliseconds();
    
    
    // VERY IMPORTANT STEP:
    
    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    
    // gives the smooth transitioning effect, but there's a bug here!
    // sc.style.transition = `1s`;
})
var listener = new window.keypress.Listener();
listener.simple_combo("shift s", function() {
    console.log("You pressed shift and s");
});

// There are also a few other shortcut methods:

// If we want to register a counting combo
listener.counting_combo("tab space", function(e, count) {
    console.log("You've pressed this " + count + " times.");
});

// If you want to register a sequence combo
listener.sequence_combo("up up down down left right left right b a enter", function() {
    lives = 30;
}, true);
listener.register_combo({
    "keys"              : null,
    "on_keydown"        : null,
    "on_keyup"          : null,
    "on_release"        : null,
    "this"              : undefined,
    "prevent_default"   : false,
    "prevent_repeat"    : false,
    "is_unordered"      : false,
    "is_counting"       : false,
    "is_exclusive"      : false,
    "is_solitary"       : false,
    "is_sequence"       : false
})