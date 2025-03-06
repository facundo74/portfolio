
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 64665, hash: '71479c1e760aa78721a1f1dddc9e97860ec724167401c8e2f54aa99a075cc10c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17756, hash: '991b57bdedb8f093534484c8564ee67dead330b6edee5c6e207f4b751f8ae03b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-C7QNG5TK.css': {size: 84793, hash: '5pd2PHjYvwg', text: () => import('./assets-chunks/styles-C7QNG5TK_css.mjs').then(m => m.default)}
  },
};
