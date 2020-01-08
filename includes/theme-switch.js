{
	//Allow Switching themes, store theme as cookie.
	
	const prism_style_node = document.createElement('link');
	prism_style_node.setAttribute("href", `/res/prism/prism_light.css`);
	prism_style_node.setAttribute("rel", "stylesheet");
	document.getElementsByTagName("head")[0].appendChild(prism_style_node);

	{
		const cookies = document.cookie.split(';');
		for (let cookie of cookies) {
			if (cookie.substring(0, 5) === "theme" && cookie.substring(6, cookie.length) === "dark") {
				switchTheme(true);
			}
		}
	}

	document.querySelector(".theme-switch").addEventListener("click", () => {
		const body = document.getElementsByTagName("body")[0];
		let theme = "light";
		if (!body.classList.contains("dark")) {
			switchTheme(true);
			theme = "dark";
		}
		else switchTheme(false);

		let d = new Date();
		d.setTime(d.getTime() + (365*24*60*60*1000));
		document.cookie = `theme=${theme};expires=${d.toUTCString()};path=/`;
	});

	function switchTheme(dark) {
		const body = document.getElementsByTagName("body")[0];
		if (dark) body.classList.add("dark");
		else body.classList.remove("dark");

		prism_style_node.setAttribute("href", `/res/prism/prism_${dark ? "dark" : "light"}.css`);
	}
}
