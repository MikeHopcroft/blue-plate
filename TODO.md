# TODO List

* Checkbox to disable graph rendering
* Tab for more-info/resources
* Lexicon quantity - show value
* intents for undo, start over, clear cart, etc
* x up/down arrow for transcription box
* sort intents on lexicon tab
* x chrome warning showing up in static site build.
  * x Actually - issue may be due to tab control mount/unmount.
  * x Actually - was mistaken
* remove pages/api/hello.js
* replace favicon.ico
* x remove vercel.svg
* publish packages
* github pages hosting with ssl.
  * https://help.github.com/en/github/working-with-github-pages/about-github-pages
  * https://help.github.com/en/github/working-with-github-pages/securing-your-github-pages-site-with-https
* Prototype modal dialogs
* Use gts
* Consider making chrome warning more visible
  * Perhaps a permanant part of the layout?
* History scroll to bottom scrolls Info to the bottom as well.
  * Seems like tabs all share the same scroll position value.
* Glitch while loading - info pane renders before cart.
  * This may be the markdown re-rendering.
  * Seems to be a development server issue.
  * Doesn't happen with exported site.
* Import menu
* Integrate Azure speech to text
* x Integrate token-flow
* x Integrate short-order
* x Chrome browser detection and message
  * x Allow text box entry instead of STT
* After first end-to-end run
  * Figure out what goes into the sagas
  * Consider replacing Cart with State
  * Figure out whether we need to store World (vs just ShortOrderWorld)
  * Log commands to history (e.g. reset, undo, redo)
    * Are all commands voice?
  * x Button to download session info for bug reporting.
  * Button to mark carts as expected/unexpected.
  * Log exceptions in session history
  * Some bug reporting service back end.
  * x Add carts to session history
  * Fix Oliver's bugs
* Control panel
  * Stemmer options
  * Speech to text configuration
  * Rerun with new options - compare with previous
  * Log options/settings to history
* x Clear cart button
* Scroll bar on cart
* Add banner at top
  * Need to think about this - it looks cluttered
* Upload bug report or open issue on github
* x Find proper home for .tab-content rule in _app.css.
* Web Speech
  * Investigate priming speech with lexicon
    * add a muffin => atomwaffen
    * flat white => flat bite
    * add a muffin => out a muffin
  * x Icons: https://www.npmjs.com/package/bootstrap-icons
  * Speech-to-text filter checkbox
  * Arabic numerals
  * ok, okay
  * Browser detect and help message
    * x Initial detection
    * x Warning in markdown
    * use browser.satisfies() for Chrome detection.
    * x Include in ApplicationState for button enable/disable
    * Link to chrome should open in new tab or window. This may require allowing HTML rendering or using a special renderer.
      * https://stackoverflow.com/questions/4425198/can-i-create-links-with-target-blank-in-markdown
  * Diagnose problem on Edge
  * Text input well
  * Processing spinner
  * x Wire up Web Speech API
  * x Recording state machine bug - this.setState vs this.props
* Info Tab
  * x Warning: Did not expect server HTML to contain a <div> in <div>.
    * x Likely related to chrome detect in SSR.
    * x https://stackoverflow.com/questions/45350360/react-16-warning-warning-js36-warning-did-not-expect-server-html-to-contain-a
  * x Investigate markdown loaders for info-control
    * x WARNING control: https://github.com/rexxars/react-markdown/issues/218
    * x https://dev.to/tinacms/creating-a-markdown-blog-with-next-js-52hk
    * x https://www.npmjs.com/package/react-markdown
    * x Image loading: https://stackoverflow.com/questions/51060771/react-markdown-images-not-rendering-in-browser
    * x https://www.newline.co/@dmitryrogozhny/how-to-render-markdown-in-react-with-react-markdown--5d1c3849
    * x General react notes, written in markdown: https://mnyark.github.io/react-markdown/#adding-images-fonts-and-files
* Menu Tab
  * Product search filter
  * x Arrange options in columns
  * x Sort products
  * . Master/Detail for menu
  * Breadcrumb
    * product/attribute
    * product/option
    * product/option/attribute
    * etc
  * Organize menu by products/options/groups
  * react-router for detail selection?
* Test Authoring Tab
* Settings Tab
* Graph Tab
  * Top
    * Edge sort order should perfer words over other edges.
    * x Integrate with short-order and token-flow
    * Display path selection UI
    * Coalesce checkbox
    * x getBBox issue
      * https://stackoverflow.com/questions/21387965/getbbox-width-and-height-returns-0
      * https://stackoverflow.com/questions/40744176/getbbox-and-getcomputedtextlength-once-working-once-not
      * https://github.com/DmitryBaranovskiy/raphael/issues/760
      * https://stackoverflow.com/questions/28282295/getbbox-of-svg-when-hidden
    * x Use results of layout to set translation of entire graph
    * x Integrate with GraphPanelControl
    * x Render paths under boxes
    * x Circles between labels
    * x Arcs on paths
    * x Different styling for words vs tokens
    * Rounded corners on labels?
    * Tooltips with weight, token type, value, etc.
      * https://stackoverflow.com/questions/46384057/how-to-display-a-tooltip-div-when-an-svg-element-is-hovered
      * https://stackoverflow.com/questions/10643426/how-to-add-a-tooltip-to-an-svg-graphic/10643525#10643525
    * Performance: perhaps only render boxes on first pass
    * x Row assignment
    * x Row height computation
    * x Highlighted path
  * Locate graphing code
  * Measuring text
    * .35em for vertical alignment with dy: https://stackoverflow.com/questions/19127035/what-is-the-difference-between-svgs-x-and-dx-attribute
    * Most promising: https://stackoverflow.com/questions/44748197/calculating-svg-bounding-boxes-with-react
    * https://medium.com/@CarysMills/wrapping-svg-text-without-svg-2-ecbfb58f7ba4
    * https://stackoverflow.com/questions/53767047/how-to-measure-width-of-a-string-in-svg-before-creating-the-actual-svg-element
    * https://stackoverflow.com/questions/43880276/how-to-measure-svg-elements-in-react
    * https://docs.jsplumbtoolkit.com/community/current/index.html
    * https://blog.scottlogic.com/2015/02/02/svg-layout-flexbox.html
* Lexicon Tab
  * x Initial version
  * Explanatory text, perhaps in markdown.
* History Tab
  * x Icon to indicate typed vs recorded
  * Icon to indicate correct vs incorrect
  * Local storage
  * x Autoscroll on new entry
  * x Height update problem
  * x Clear history button
  * x Download link
    * https://blog.logrocket.com/programmatic-file-downloads-in-the-browser-9a5186298d5c/
    * https://stackoverflow.com/questions/35206589/how-to-download-fetch-response-in-react-as-file
    * https://stackoverflow.com/questions/46818785/how-to-download-a-file-programmatically-using-js-internet-explorer
      * https://jsfiddle.net/1ecj1rtz/
    * https://github.com/gregnb/mui-datatables/issues/72
      * https://github.com/gregnb/mui-datatables/issues/72
      * https://medium.com/@danny.pule/export-json-to-csv-file-using-javascript-a0b7bc5b00d2
    * https://www.npmjs.com/package/react-csv
    * https://www.npmjs.com/package/react-base64-downloader
    * https://www.npmjs.com/package/js-file-download
  * x Distinction between interim and final states
  * x Timestamps
* Loading screen
  * Spinner
  * Diagnostic message
* x Investigate frame layout
  * x https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  * x Header and Footer are fixed height
  * x Middle expands to take all room - gets scroll bars for overflow.
  * x https://www.npmjs.com/package/react-split-pane (more popular)
  * x https://www.npmjs.com/package/react-split
* x FrameControl Tabs are 100% when the share space with TabBar. Need to use some sort of flow layout.
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
* x Convert to next.js.
* x Prototype webpack loader for yaml.
* x Set up redux state.
* x Integrate Web Speech API
* x Integrate prix-fixe
