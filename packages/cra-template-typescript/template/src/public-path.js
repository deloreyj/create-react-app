/* eslint-disable */
const baseUrl = document.currentScript.src.split('/static/')[0] + '/';
// This is needed so the webchunks can load from the correct location. See README for full details.
__webpack_public_path__ = baseUrl;