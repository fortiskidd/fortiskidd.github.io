window.onload=function(){
	order();
	var btn = document.createElement("BUTTON");        // Create a <button> element
	var t = document.createTextNode("Finished");       // Create a text node
	btn.appendChild(t);                                // Append the text to <button>
	var butt = document.getElementById("controls").appendChild(btn);  
	butt.onclick = win;
	document.getElementById("shufflebutton").addEventListener('click', shuffle);

};	

function order(){
	var puzzle=document.getElementById("puzzlearea");
	var pieces=puzzle.children;
	var xSpace = "300px";
	var ySpace = "300px";
	for(var j=0;j<pieces.length;j++){
		pieces[j].className= "puzzlepiece";
		pieces[j].style.left = (j%4*100)+'px';
		pieces[j].style.top = (parseInt(j/4)*100) + 'px';
		pieces[j].style.backgroundPosition= '-' + pieces[j].style.left + ' ' + '-' + pieces[j].style.top;
		document.getElementById("puzzlearea").addEventListener("mouseover", function() { puzzle.classList.add("movablepiece")});
		document.getElementById("puzzlearea").addEventListener("mouseout", function() { puzzle.classList.remove("movablepiece")});
		//pieces[j].addEventListener('click',Move);	*/

	}
}

function Move() {
	
}

function shuffle() {
	alert('Under Development');  /*
	for (var i =pieces.length - 1; i > 0;i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = pieces[i];
		pieces[i] = pieces[j];
		pieces[j] = temp;
	}
	return pieces;*/
}

    function win()
{
	var body = document.getElementsByTagName('body');
	body[0].style.backgroundImage = 'url("http://www.clipartkid.com/images/20/winner2-2rdvKR-clipart.jpg")';
	alert('You Are A Winner!!');
}


