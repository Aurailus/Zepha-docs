{
	//Shrink the header when scrolling down

	let header = document.getElementsByTagName("header")[0];

	setInterval(() => {
		let scrollPos = document.documentElement.scrollTop;
		let isShrunk = header.classList.contains("shrunk");

		if (scrollPos > 10 && !isShrunk) {
			header.classList.add('shrunk')
		}
		if (scrollPos <= 10 && isShrunk) {
			header.classList.remove('shrunk')
		}
	}, 80);
}
