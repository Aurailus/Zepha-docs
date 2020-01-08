{
	// Handle markdown content.

	const content = document.getElementsByClassName("page-wrapper")[0];

	// Put the page-title class on first header.
	content.getElementsByTagName('h1')[0].classList.add('page-title');

	//Set the tab title to the page title.
	document.getElementsByTagName("title")[0].innerText = content.getElementsByTagName('h1')[0].innerText + " • Zepha Docs";

	//Give all block level code blocks syntax highlighting. 
	const pre_tags = content.getElementsByTagName("pre");
	for (let i = 0; i < pre_tags.length; i++) {
		if (pre_tags[i].getElementsByTagName("code").length > 0) pre_tags[i].classList.add("language-lua");
	}
	
	//Create Aside Nav
	content.classList.add('aside');

	const aside_bounds = document.createElement("div");
	aside_bounds.classList.add('page-aside-bounding-box');
	content.appendChild(aside_bounds);

	const aside_wrap = document.createElement("div");
	aside_wrap.classList.add('page-aside-wrap');
	aside_bounds.appendChild(aside_wrap);

	const aside = document.createElement("div");
	aside.classList.add('page-aside');
	aside_wrap.appendChild(aside);

	//Make aside sticky
	let is_sticky = false;
	let scrolled = false;

	document.addEventListener('scroll', () => { scrolled = true; }, { capture: true, passive: true });

	function updateSidebar() {
		const offset = aside_bounds.getBoundingClientRect();

		if (!position /*Top*/) {
			if (!is_sticky && offset.y < 64) {
				is_sticky = true;
				aside_wrap.classList.add('sticky');
				aside_wrap.style.left = offset.x + "px";
			}
			if (is_sticky && offset.y > 64) {
				is_sticky = false;
				aside_wrap.classList.remove('sticky');
				aside_wrap.style.left = "";
			}
			if (content.getBoundingClientRect().bottom - aside_wrap.getBoundingClientRect().bottom - 24 < 0) {
				position = true;
				is_sticky = false;
				aside_wrap.classList.remove('sticky');
				aside_wrap.style.left = "";
				aside_bounds.classList.add('bottom');
			}
		}
		else /*Bottom*/ {
			if (offset.y > 64) {
				position = false;
				is_sticky = true;
				aside_wrap.classList.add('sticky');
				aside_wrap.style.left = offset.x + "px";
				aside_bounds.classList.remove('bottom');
			}
		}
	}

	let position = false; //top = false, bottom = true
	function test() { if (scrolled) { updateSidebar(); } scrolled = false; window.requestAnimationFrame(test); }
	test();

	//Populate Side Nav
	content.querySelectorAll('h1, h2, h3').forEach((e, i) => {
		let level = e.tagName == "H1" ? 1 : e.tagName == "H2" ? 2 : 3;

		let anchor = e.getAttribute('id');

		if (!anchor) {
			anchor = e.innerText.toLowerCase().replace(/[^A-z0-9]/g, '_');
			e.setAttribute('id', anchor);
		}

		e.innerHTML = `<a href="#${e.id}">${e.innerText}</a>`;

		let temp = document.createElement("div");
		temp.innerHTML = `<a class="item level${level}" href="#${anchor}"><button class="toggle">arrow_right</button>${e.innerText}</a>`;
		let link = temp.firstChild;

		if (level == 1) {
			aside.appendChild(link);
			let wrap = document.createElement("div");
			wrap.classList.add('tl-wrap');
			aside.appendChild(wrap);
		}
		else if (level == 2) {
			let wraps = aside.querySelectorAll('.tl-wrap');
			wraps[wraps.length - 1].appendChild(link);
			let wrap = document.createElement("div");
			wrap.classList.add('ml-wrap');
			wraps[wraps.length - 1].appendChild(wrap);
		}
		else {
			let wraps = aside.querySelectorAll('.ml-wrap');
			wraps[wraps.length - 1].appendChild(link);
			link.querySelector('button').remove();
		}
	});

	aside.querySelectorAll('.ml-wrap, .tl-wrap').forEach((e, i) => {
		if (e.querySelectorAll("*").length === 0) {
			e.previousSibling.querySelector('button').remove();
			e.remove();
		}
	});
	
	//Dropdowns
	aside.querySelectorAll('a.item button').forEach((e, i) => {
		e.addEventListener("click", (evt) => {
			evt.preventDefault();
			evt.stopPropagation();
			e.parentElement.classList.toggle('collapsed');
			e.classList.toggle('collapsed');
			updateSidebar();
		});
	});

	//Smooth scroll to headers
	let scrollEvt = null;
	document.querySelectorAll("a").forEach((e, i) => {
		if (e.getAttribute("href").startsWith("#")) {
			e.addEventListener('click', (evt) => {

				let prev = document.querySelector(".target")
				if (prev !== null) prev.classList.remove('target');

				evt.preventDefault();
				let href = e.getAttribute("href");

				let elem = document.getElementById(href.substring(1, href.length));

				elem.setAttribute("id", "");
				setTimeout(() => window.location.hash = href, 10);
				setTimeout(() => elem.setAttribute("id", href.substring(1, href.length)), 20);
				elem.classList.add('target');
				
				let target = elem.getBoundingClientRect().top + document.documentElement.scrollTop - 64;
				if (elem !== null) window.scroll({
					top: target,
					behavior: "smooth"
				});
			})
		}
	});

	//Subtract header height from anchor pos if page is just loaded.
	if (window.location.hash.length > 0 && document.documentElement.scrollTop == 0) {
		setTimeout(() => window.scrollTo({top: document.documentElement.scrollTop - 64}), 50);
	}
}
