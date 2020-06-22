# TODO List

* initialState()
  * Add scroll bars to split panels
  * Add banner at top
  * History download link
  * History timestamps
  * History local storage
  * Wire up Web Speech API
  * Investigate frame layout
    * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    * Header and Footer are fixed height
    * Middle expands to take all room - gets scroll bars for overflow.
    * https://www.npmjs.com/package/react-split-pane (more popular)
    * https://www.npmjs.com/package/react-split
  * Investigate markdown loaders for info-control
    * https://dev.to/tinacms/creating-a-markdown-blog-with-next-js-52hk
    * https://www.npmjs.com/package/react-markdown
  * Move saga from index.ts
  * Finish up router for info, menu, graph
  * Move sagas to _app.tsx
  * Move nav bar to header component
  * Loading screen
  * ObjectLoader
    * Problem: loadCatalogState is async (to allow http calls)
    * https://stackoverflow.com/questions/50315639/passing-initial-state-from-api-call-to-createstore-when-react-native-application
    * https://medium.com/@Hibow/getinitialprops-in-next-js-8b1b7ec8f39
    * https://thecodebarbarian.com/redux-saga-vs-async-await.html
  * Build catalog
    * From objects
    * From imported yaml
  * Render menu
  * Build initial cart
  * Render cart
* Global state
  * https://reacttricks.com/sharing-global-data-in-next-with-custom-app-and-usecontext-hook/
* Wireframe with bootstrap.
  * Figure out CSS options in next.js
  * React-router
* Integrate token-flow
* Integrate short-order
* Use gts
* x Prototype static generation with next export
  * Why doesn't Web Speech seem to work in static site?
    * Chrome security - need to use localhost instead of ip address
    * https://stackoverflow.com/questions/46040797/google-webspeech-api-is-throwing-not-allowed-error-for-microphone-permission
    * https://stackoverflow.com/questions/16835421/how-to-allow-chrome-to-access-my-camera-on-localhost
    * https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
* github pages hosting with ssl.
  * https://help.github.com/en/github/working-with-github-pages/about-github-pages
  * https://help.github.com/en/github/working-with-github-pages/securing-your-github-pages-site-with-https
* x Convert to next.js.
* x Prototype webpack loader for yaml.
* x Set up redux state.
* x Integrate Web Speech API
* x Integrate prix-fixe
