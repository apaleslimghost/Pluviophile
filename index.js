const {Menu} = require('electron');
const mb = require('menubar')({
	preloadWindow: true,
	dir: __dirname,
});

mb.on('after-create-window', () => {
	const contextMenu = Menu.buildFromTemplate([
		{label: 'Quit', click: () => mb.app.quit()}
	]);

	mb.tray.on('right-click', () => {
		mb.tray.popUpContextMenu(contextMenu);
	})
});
