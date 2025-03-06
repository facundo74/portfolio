
export default {
  basePath: '/portfolio/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
