# TODO List

* initialState()
* Web Speech
  * x Wire up Web Speech API
  * x Recording state machine bug - this.setState vs this.props
  * ok, okay
  * Arabic numerals
  * Processing spinner
* Integrate token-flow
* Integrate short-order
* Use gts
* Add banner at top
* Add scroll bars to split panels
* Menu
  * Master/Detail for menu
  * Organize menu by products/options/groups
  * react-router for detail selection?
* History
  * Download link
    * https://blog.logrocket.com/programmatic-file-downloads-in-the-browser-9a5186298d5c/
    * https://stackoverflow.com/questions/35206589/how-to-download-fetch-response-in-react-as-file
  * Local storage
  * x Distinction between interim and final states
  * x Timestamps
* Investigate frame layout
  * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  * Header and Footer are fixed height
  * Middle expands to take all room - gets scroll bars for overflow.
  * x https://www.npmjs.com/package/react-split-pane (more popular)
  * x https://www.npmjs.com/package/react-split
* Investigate markdown loaders for info-control
  * https://dev.to/tinacms/creating-a-markdown-blog-with-next-js-52hk
  * https://www.npmjs.com/package/react-markdown
* x Move saga from index.ts
* Finish up router for info, menu, graph
* Move sagas to _app.tsx
* Move nav bar to header component
* Loading screen
* x ObjectLoader
  * x Problem: loadCatalogState is async (to allow http calls)
  * x https://stackoverflow.com/questions/50315639/passing-initial-state-from-api-call-to-createstore-when-react-native-application
  * x https://medium.com/@Hibow/getinitialprops-in-next-js-8b1b7ec8f39
  * x https://thecodebarbarian.com/redux-saga-vs-async-await.html
* x Build catalog
  * x From objects
  * x From imported yaml
* x Render menu
* x Build initial cart
* x Render cart
* Global state
  * https://reacttricks.com/sharing-global-data-in-next-with-custom-app-and-usecontext-hook/
* Wireframe with bootstrap.
  * x Figure out CSS options in next.js
  * React-router
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
