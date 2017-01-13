import polyfill from 'progressive-web-sdk/dist/polyfill'
import {initCacheManifest} from 'progressive-web-sdk/dist/asset-utils'
import cacheHashManifest from '../tmp/cache-hash-manifest.json'

// React
import React from 'react'
import {render} from 'react-dom'

// Redux
import configureStore from './store'

// App provider
import AppProvider from './app-provider'

// Stylesheet: importing it here compiles the SCSS into CSS. The CSS is actually
// added to the markup in `loader.js`
import Stylesheet from './stylesheet.scss' // eslint-disable-line no-unused-vars

import {initMobifyAnalytics} from 'progressive-web-sdk/dist/analytics'

polyfill()

initMobifyAnalytics(AJS_SLUG) // eslint-disable-line no-undef
initCacheManifest(cacheHashManifest)

const store = configureStore()

const rootEl = document.getElementsByClassName('react-target')[0]

render(<AppProvider store={store} />, rootEl)
