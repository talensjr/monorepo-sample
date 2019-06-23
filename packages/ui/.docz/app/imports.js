export const imports = {
  'src/components/button/button-doc.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-button-button-doc" */ 'src/components/button/button-doc.mdx'
    ),
  'src/components/h1/h1-doc.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-h1-h1-doc" */ 'src/components/h1/h1-doc.mdx'
    ),
}
