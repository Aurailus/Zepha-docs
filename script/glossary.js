{
	// Sort Glossary into multiple columns.

	// Currently Unused

	const columnCount = 3;
	const list = document.getElementsByClassName("glossary-list")[0];
	const targetHeight = list.offsetHeight / columnCount;

	for (let i = 0; i < columnCount; i++) {
		const elem = document.createElement("div");
		elem.classList.add("glossary-column");
		list.appendChild(elem);
	}

	const columns = document.querySelectorAll(".glossary-list > .glossary-column");
	let categories = document.querySelectorAll(".glossary-list > .glossary-category");

	let ind = 0;
	while (categories.length > 0) {
		if (columns[ind].offsetHeight + categories[0].offsetHeight - 100 > targetHeight && ind < columnCount - 1) ind++;
		columns[ind].appendChild(categories[0]);
		categories = document.querySelectorAll(".glossary-list > .glossary-category");
	}

	list.classList.add('flex');
}
