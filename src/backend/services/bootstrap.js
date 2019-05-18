'use strict';

const path = require('path');
const fs = require('fs');

module.exports.prepare = () => {
	const uploadsDir = path.join('public', 'uploads');

	if (!fs.existsSync(uploadsDir)) {
		fs.mkdirSync(uploadsDir);
	}
};
