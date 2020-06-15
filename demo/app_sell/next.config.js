// const withSass = require('@zeit/next-sass')
// module.exports = withSass({
//   cssModules: true
// })

const withCSS = require( '@zeit/next-sass');
const withSass = require( '@zeit/next-sass' );
module.exports = withCSS( withSass())