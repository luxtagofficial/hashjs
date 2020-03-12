import sha256 from 'crypto-js/sha256';
// const sha256 = require('crypto-js/sha256');

const hashContent = (content) => sha256(content);

export default hashContent
