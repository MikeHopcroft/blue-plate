# TODO List

* Top
  * Graph
    * . Rework CSS
    * . Flow layout for graph and controls
    * Cart filter
      * Edge circles/dots should be gray when not selected.
      * x Vertical scroll bar missing vs selection not tall enough
      * Reassess whether EdgeTreatment is needed.
      * x Manipulating scroll bars should not select span.
      * Mouse capture for span.
      * Sort paths by decreasing score.
      * Gray out filtered items inside span
      * Path score
      * Previous/current cart
      * New token type: INPUT
      * Drag select path span for filter graph
      * Graph control will need cart as input
      * const subgraph = subgraphFromItems(
          attributes,
          lexer,
          cart,
          graph,
          span,
          true
        );
    * Crash bug
      * Set pathIndex to zero when changing cartFilter.
      * Missing edges in cartFilter mode.
      * UI to select span
    * x Path selector
    * . New color scheme
  * Clean up extra <Nav> tags in master-detail for menu and lexicon.
  * x Publish and take prix-fixe, short-order and token-flow
  * x Undo button
  * English/Spanish
    * Demo script and/or sample history
    * Recursive aliasesFromPattern
    * Ensure all packages are using aliasesFromPattern from prix-fixe
    * Remove aliasesFromPattern from token-flow?
    * Spanish regression suite
      * OPTION: use English with chocolate syrup removed
      * OPTION: write new one
      * OPTION: rebase English for chocolate syrup
    * x Stemmer
    * x Mode switcher
    * x Speech config
    * x Menu and lexicon switch
    * x Regression suite switch
  * Empty graph should not render
  * History fit and finish
    * x Note balloon too close to transcription
    * Dismiss note editor control on Enter key
      * Not sure why this won't work - it works with ESC - form submit issue?
    * BUG: Popover moves to 0,0 after dismissing with Escape key
    * x Thumbs icon hits keyboard icon
    * x Focus set in note when it opens
    * x Caret moves to end of note when it opens
    * x Dismiss note editor control on Escape key
    * x Dismiss note editor on click outside
  * MasterDetail
    * Default item
    * Maintain current item across tabs
    * Left arrow, ESC key closes drilldown panel
    * x Detail and Drilldown Panes should have titles fixed and scroll below (so back button and title don't scroll off of screen)
  * TestsControl
    * Better master item visuals
      * x Red/Green background colors and highlight colors
      * Comment ...
    * react-dom.development.js:88 Warning: Expected server HTML to contain a matching <div> in <div>.
    * Test suite summary - aggregated metrics
    * Default active test
    * Keep active test across tab changes
    * Load test suite separately from world - or have a button to load test suite.
    * onDetail performance - switching tests
    * Filter to only show failing tests
    * Filter tests by suite
    * x graph drilldown
    * x Reduce short-order console spew - debug mode?
  * x BluePlateWorld
  * https://www.npmjs.com/package/source-map-explorer
  * prix-fixe function scoreSuite() should be templated by TURN type.
  * MasterDetail - default item selection
  * MasterDetail - scroll detail pane to home position on navigate
    * Repro: make window small.
    * Scroll to show legal options.
    * Click on one.
    * Expect to scroll back to upper left corner
  * x Master/detail/drilldown control
    * x Products, Product Details, Option Details
    * x Tokens, Aliases, Expansions
    * x Words, Tokens, Token Details
    * x Test Cases, Steps
  * React hooks for world, etc. that are now in ApplicationState
  * Stem the words in the lexicon
  * Demo keys - CTRL-1, CTRL-2, etc.
  * Azure static website
  * Graph
    * x Highlighting best path
    * Highlighting other paths
    * Aliases popup
  * x Word Frequencies/Collisions
    * x Word, Uses, Details of Use
  * x Test Suite
    * x Case, Expected/Observed/Edits
* x Better graph visuals
  * x Space around boxes
  * x Highlight best path
  * x Multiline with score
* Rename SetSpeechSupport to SetSpeechSupported
* "a lotta"
* "with x instead of y"
* Clear cart should clear the transcription
* History grouping should be based on gap length, not start to end time
* History groups break at cart resets
* "an espresso" =? "a nespresso"
* regression.yaml failures
  * What is wrong with "get a double double"?
    * Product recipes not implemented
* SpeechToTextFilter: "double-double"
* speechToTextFilter should be called from exactly one place
* Undo button next to clear button
* . Finish up history editing controls (thumbs, notes)
* lexicon master-detail
* confusion matrix
  * word => attrib/entity/intent viewer
* recipes view
* x Clear cart button
* Consider moving clear and undo to the recorder bar
* Intents for undo, start over, clear cart, etc
* Deactivate popovers on click outside
  * https://stackoverflow.com/questions/11703093/how-to-dismiss-a-twitter-bootstrap-popover-by-clicking-outside
* Endeavor to keep graph centerline at same y-value across graphs
* Guided tour / demo mode
  * Text entry
  * Switch tabs
  * Play voice
  * Recognize voice
* x Speech-to-text filter
  * x From speech
  * x From text
* History tab actions
  * Popover grabs focus, sets caret to end
  * Popover dismiss on enter key and or focus lost
  * Popover writes to state
  * x Visible on hover
  * . Thumbs up/down
  * . Edit notes
* x Menu option detail overlay
  * x Close button
* Product search
* PNGs of icons for info page documentation.
* Spanish version
  * Dropdown menu for English vs Spanish
  * Bilingual?
  * Configure speech recognition
  * Text to number - can stay as English
  * Number to text - can stay as English
  * Stemmer
  * Text-to-speech filter
    * Additional punctuation - perhaps remove all non-alpha?
* Extend menu
  * Burgers
  * Hot dogs
  * Fries
  * Wings
  * Mexican
* Link buttons in markdown for navigating to other modes (e.g. settings)
* Control panel
  * Stemmer options
  * Speech to text configuration
  * Rerun with new options - compare with previous
  * Log options/settings to history
* Graph should not rerender as transcription changes - or should it?
* Checkbox to disable graph rendering
* Tab for more-info/resources
* Prototype modal dialogs
* Use gts
* Consider making chrome warning more visible
  * Perhaps a permanant part of the layout?
* Import/upload menu files
* Edit intents
* x publish packages
* x replace favicon.ico
* x Lexicon quantity - show value
* x Graph unit attribute rendering
* x Graph token scores in title
* x sort intents on lexicon tab
* x up/down arrow for transcription box
* x chrome warning showing up in static site build.
  * x Actually - issue may be due to tab control mount/unmount.
  * x Actually - was mistaken
* x remove pages/api/hello.js
* x remove vercel.svg
* History scroll to bottom scrolls Info to the bottom as well.
  * Seems like tabs all share the same scroll position value.
* x Glitch while loading - info pane renders before cart.
  * x This may be the markdown re-rendering.
  * x Seems to be a development server issue. Yes.
  * x Doesn't happen with exported site. Correct.
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
  * Cookbooks and recipes
  * Close button for option detail pane returns to product.
  * Product search filter
  * Organize menu by products/options/groups
  * x Master/Detail for menu
  * x Arrange options in columns
  * x Sort products
  * Breadcrumb
    * product/attribute
    * product/option
    * product/option/attribute
    * etc
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
  * x Icon to indicate correct vs incorrect
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
* x MIT License
* x Favicon
  * Coffee
  * Fries
  * Hot Dog
  * Hamburger
  * Pizza Slice
  * Microphone
  * https://favicon.io/emoji-favicons/
  * https://favicon.io/emoji-favicons/french-fries/
* x github pages hosting with ssl.
  * https://help.github.com/en/github/working-with-github-pages/about-github-pages
  * https://help.github.com/en/github/working-with-github-pages/securing-your-github-pages-site-with-https
  * Next.js with gh-pages
    * https://github.com/thierryc/Next-gh-page-example
    * https://medium.com/@anotherplanet/git-tips-next-js-github-pages-2dbc9a819cb8
    * https://itnext.io/next-js-app-on-github-pages-768020f2b65e
