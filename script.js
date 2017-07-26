$("li").on("mouseout", getHuman).on("click", getWhacky)
	.on("mouseenter", getGhosted);

function getGhosted () {
	$(this).animate({opacity: "0.3"}, 300);
}

function getHuman () {
	$(this).animate({opacity: "1"}, 300);
}

function getWhacky () {
	$(this).find("a").text("Get Pwnd!!").css("background-color", "gray");
}
