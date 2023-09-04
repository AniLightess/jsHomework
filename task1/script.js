const some_blocks = document.querySelectorAll(".block");

some_blocks.forEach((block) => {
	block.style.backgroundColor = "gray";
	block.style.width = "100px";
	block.style.height = "100px";
});

let second_block = document.getElementById("div_2");

console.log(second_block);

second_block.style.backgroundColor = "yellow";

const text_area =  document.querySelectorAll('textarea');

text_area.forEach(text_area => {
	text_area.style.backgroundColor = "white";
	text_area.style.width = "200px";
	text_area.style.height = "200px";
	text_area.innerHTML = "Я додав якийсь текст за замовченням"
});
