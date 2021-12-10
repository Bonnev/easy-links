// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("url", ({ url }) => {
	changeColor.style.backgroundColor = 'green';
	
	changeColor.addEventListener("click", () => {
		chrome.tabs.create({ url })
	})
});