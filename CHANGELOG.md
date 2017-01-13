## 0.10.0 (January 8, 2017)
- Implement the Progressive Checkout UI components
- Fix inconsistencies between the generator and best practices

## 0.9.1 (November 14, 2016)
- Use SDK version 0.10.4

## 0.9.0 (November 14, 2016)
- Use SDK version 0.10.3
- Build the homepage, PLPs, PDPs and login for Merlin's Potions

## 0.8.0 (November 2, 2016)
- Use SDK version 0.9.0

## 0.7.2 (October 27, 2016)
- Use SDK version 0.8.3
- Update react-styleguidist to 4.1.0
- Include webpack-dev-server@1.14.1 and webpack-hot-middleware@2.13.0 to workaround styleguidist problems
- Add IconLabelButton component
- Add NavItem component
- Implement global navigation menu
- Remove progressive-web-sdk module from Babel transpiling
- Add yarn lockfile

## 0.7.1 (October 26, 2016)
- ACTUALLY bump SDK version to 0.8.1

## 0.7.0 (October 24, 2016)
- Use SDK version 0.8.1

## 0.6.0 (October 13, 2016)
- Use SDK version 0.7.0

## 0.5.4 (October 11, 2016)
- Use SDK version 0.6.6

## 0.5.3 (October 6, 2016)
- Use SDK version 0.6.5
- Fix Jest tests when importing modules that themselves import .svg assets
- Rename `build` npm script to `prod:build`
- Adds Nightwatch checkout flow smoke test scaffolding; smoke-test npm script

## 0.5.2 (September 29, 2016)
- Use SDK version 0.6.3
- Use SDK polyfill (which includes es6-promise polyfill)
- Remove react-hot-loader [#106](https://github.com/mobify/saxamaphone/pull/106)
- Add npm script alias for generating form components [#105](https://github.com/mobify/saxamaphone/pull/105)

## 0.5.1 (September 25, 2016)
- Use SDK version 0.6.1

## 0.5.0 (September 22, 2016)
- Add SkipLinks and corresponding nightwatch tests
- Make Merlin's Potions the initial URL for local Nightwatch tests

## 0.4.0 (September 20, 2016)
- Include charset attribute on main script tag
- Fix issue with hot-loader errors
- Display SDK components in the project's styleguide

## 0.3.0 (September 19, 2016)
- Moved /static folder into /app to fix CSS url pathing issues

## 0.2.0 (September 16, 2016)
- Updated login form example to use FormFields
- Added example of using loadScripts for injecting scripts from desktop

## 0.1.1 (September 15, 2016)
- Use SDK version 0.4.4

## 0.1.0 (September 14, 2016)
- Add PostCSS (Autoprefixer) and CSS minification
- Move Styleguidist's webpack settings to the `/webpack` directory
- Use SDK version 0.4.3 (test framework AVA replaced with Jest, Analytics utils)
- Project utils.js now contains makeRequest method

## 0.0.4 (August 31, 2016)
- Add configuration for building in specific cache manifest files into the main
  and loader build files

## 0.0.3 (August 26, 2016)
- use SDK version 0.1.1

## 0.0.2
- use SDK version 0.0.11
- Add icons
- Update how jQuery is used
- Use the router from the SDK

##0.0.1
- Initial scaffold
