chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ url: 'https://denisa-kids.com/' });
	// console.log('Default background color set to %cgreen', `color: ${color}`);
});