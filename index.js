const {Menu} = require('electron');
const mb = require('menubar')({
	preloadWindow: true,
	dir: __dirname,
});

const contextMenu = Menu.buildFromTemplate([
	{label: 'Quit', click: () => mb.app.quit()}
]);

mb.on('ready', () => {
	mb.tray.removeAllListeners('click');
	mb.tray.removeAllListeners('double-click');
	mb.tray.setContextMenu(contextMenu);

	try {
		mb.tray.setHighlightMode('selected');
	} catch(e) {}
});
