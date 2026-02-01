const LearnMoreButton = document.getElementById("LearnMoreButton");
const PopUp = document.getElementById("PopUp");
const Percentage = document.getElementById("Percentage");



function GrabSSN() {
	PopUp.style.display = "block";
	let i = 0;

	setInterval(function(){
		if (i<=100){
			Percentage.innerText = i + "%";
			i++;
		}
	}, 50);
}



