# TODO List

* FrameControl Tabs are 100% when the share space with TabBar. Need to use some sort of flow layout.
* Add banner at top
  * Need to think about this - it looks cluttered
* Integrate token-flow
* Integrate short-order
* Use gts
* Upload bug report or open issue on github
* Find proper home for .tab-content rule in _app.css.
* Web Speech
  * Diagnose problem on Edge
  * Text input well
  * Speech-to-text filter checkbox
  * ok, okay
  * Arabic numerals
  * Processing spinner
  * x Wire up Web Speech API
  * x Recording state machine bug - this.setState vs this.props
* Menu Tab
  * Sort products
  * Master/Detail for menu
  * Breadcrumb
    * product/attribute
    * product/option
    * product/option/attribute
    * etc
  * Organize menu by products/options/groups
  * react-router for detail selection?
* Test Authoring Tab
* Graph Tab
  * Locate graphing code
* History Tab
  * Autoscroll on new entry
  * x Height update problem
  * Clear history button
  * Download link
    * https://blog.logrocket.com/programmatic-file-downloads-in-the-browser-9a5186298d5c/
    * https://stackoverflow.com/questions/35206589/how-to-download-fetch-response-in-react-as-file
  * Local storage
  * x Distinction between interim and final states
  * x Timestamps
* Loading screen
* Investigate frame layout
  * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  * Header and Footer are fixed height
  * Middle expands to take all room - gets scroll bars for overflow.
  * x https://www.npmjs.com/package/react-split-pane (more popular)
  * x https://www.npmjs.com/package/react-split
* Investigate markdown loaders for info-control
  * https://dev.to/tinacms/creating-a-markdown-blog-with-next-js-52hk
  * https://www.npmjs.com/package/react-markdown
* Finish up router for info, menu, graph
* x Move saga from index.ts
* x initialState()
* x Add scroll bars to split panels
* x Move sagas to _app.tsx
* Move nav bar to header component
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
