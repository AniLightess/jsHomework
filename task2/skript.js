const some_blocks = document.querySelectorAll(".block");

some_blocks.forEach((block) => {
	block.style.backgroundColor = "gray";
	block.style.width = "100px";
	block.style.height = "100px";
});

const first_block = document.getElementById("div_1");
const second_block = document.getElementById("div_2");
const third_block = document.getElementById("div_3");

first_block.style.backgroundColor = "red";
second_block.style.backgroundColor = "yellow";
third_block.style.backgroundColor = "green";

const text_area = document.querySelectorAll("textarea");

text_area.forEach((text_area) => {
	text_area.style.backgroundColor = "grey";
	text_area.style.width = "200px";
	text_area.style.height = "200px";
	text_area.innerHTML = "Я додав якийсь текст за замовченням";
});

let changeColor = (target) => {
	if (target.style.backgroundColor === "red") {
		target.style.backgroundColor = "yellow";
		target.innerHTML = "Зараз Жовтий колір";
	} else if (target.style.backgroundColor === "yellow") {
		target.style.backgroundColor = "green";
		target.innerHTML = "Зараз Зелений колір";
	} else if (target.style.backgroundColor === "green") {
		target.style.backgroundColor = "red";
		target.innerHTML = "Зараз Червоний колір";
	}
};

let clickIvent = (event) => {
	const target = event.currentTarget;
	console.log(target);
	console.log(getComputedStyle(target).backgroundColor);
	changeColor(target);
};

first_block.addEventListener("click", clickIvent, changeColor);
second_block.addEventListener("click", clickIvent, changeColor);
third_block.addEventListener("click", clickIvent, changeColor);
