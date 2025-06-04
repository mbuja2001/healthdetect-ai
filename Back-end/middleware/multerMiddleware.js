const multer = require('multer');

// You can configure where to store the file temporarily (in memory or disk)
const storage = multer.memoryStorage(); // Or diskStorage if needed

const upload = multer({ storage });

module.exports = upload;
