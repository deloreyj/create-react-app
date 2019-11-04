/* eslint-disable strict */
module.exports = {
  '**/*.js': ['npm run lint', 'npm run test:staged'],
  '**/*.{js,json}': ['npm run format', 'git add'],
};
