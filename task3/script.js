const addBlockBasicStyle = document.querySelectorAll("div");

addBlockBasicStyle.forEach((block) => {
	block.style.backgroundColor = "black";
	block.style.width = "100px";
	block.style.height = "100px";
});

const topDiv = document.getElementById("topDiv");
const middleDiv = document.getElementById("middleDiv");
const bottomDiv = document.getElementById("bottomDiv");

let clickIvent = (event) => {
  const target = event.currentTarget;
	if (target == topDiv) {
		changeTopColor(topDiv);
	} else if (target == middleDiv) {
		changeMiddleColor(middleDiv);
	} else if (target == bottomDiv) {
		changeBottomColor(bottomDiv);
	}
};

const changeTopColor = (topDiv) => {
	if (topDiv.style.backgroundColor == "black") {
		topDiv.style.backgroundColor = "red";
	} else {
		topDiv.style.backgroundColor = "black";
	}
};

const changeMiddleColor = (middleDiv) => {
	if (middleDiv.style.backgroundColor == "black") {
		middleDiv.style.backgroundColor = "yellow";
	} else {
		middleDiv.style.backgroundColor = "black";
	}
};

const changeBottomColor = (bottomDiv) => {
	if (bottomDiv.style.backgroundColor == "black") {
		bottomDiv.style.backgroundColor = "green";
	} else {
		bottomDiv.style.backgroundColor = "black";
	}
};

topDiv.addEventListener("click", clickIvent);
middleDiv.addEventListener("click", clickIvent);
bottomDiv.addEventListener("click", clickIvent);

function circle(step, interval) {
	let num = 1;
	const timer = setInterval(() => {
		circleNumber(num);
		num++;
		if (num > step) {
			clearInterval(timer);
		}
	}, interval);
}

function circleNumber(num) {
	if (num % 3 === 0 && num % 5 === 0) {
		console.log("FizzBuzz");
	} else if (num % 3 === 0) {
		console.log("Fizz");
	} else if (num % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(num);
	}
}

circle(10, 100);
