const config = require('./config');
const plugins = require('./gatsby-config.plugins');
const pjson = require('./package.json');

const siteUrl = 'http://devtohr.com';

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: `Dev To HR`,
    description: `Dev profiles for human resource`,
    sidebarTitle: 'Dev To HR',
    sidebarSubtext: 'Documentation',
    siteLastUpdated: new Date().toISOString(),
    version: pjson.version,
    siteUrl,
    types: config.types,
    keywords: 'devtohr, devtohr.com, dev jobs, remote jobs, human resource, hr',
    author: {
      name: 'tuantvk',
      url: 'https://tuantvk.github.io',
      email: 'tuanhanhphuc123@gmail.com'
    },
    socials: [
      {
        name: 'Twitter',
        imgpath: 'icon-twitter.svg',
        url: 'https://twitter.com/tuantvk'
      },
      {
        name: 'GitHub',
        imgpath: 'icon-github.svg',
        url: 'https://github.com/tuantvk'
      },
    ]
  },
  plugins,
}