$("a").click(function(e) {
	let aid = $(this).attr("href");
	if (typeof aid !== "undefined") {
		if (aid[0] === '#') {
			e.preventDefault();
			$('html,body').animate({scrollTop: $(aid).offset().top - 80}, 'slow');
		}
	}
});