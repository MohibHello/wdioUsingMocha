##### WebDriver.io using Mocha Framework ######

Installation refer - https://www.youtube.com/watch?v=RJ2kwpzX8so&ab_channel=freeCodeCamp.org

WedDriver.io API DOCs - https://webdriver.io/docs/api/expect-webdriverio

Sample Site to Test using wdio - https://the-internet.herokuapp.com

Note: This project testcase are written in async way,
i.e., in all test case used async await (for local machine)

Local Testing:

in Terminal use cmd : npx wdio (to run all files test cases)

npx wdio --spec ./test\specs\filename.e2e.js (to run single testcase file)


#### Browser Matchers #####

### browser.matcher() ###

toHaveUrl
toHaveUrlContaining
toHaveTitle
toHaveTitleContaining


#### Element Matchers #####

### ele.matcher() ###

toBeDisplayed
toBeVisible
toExist
toBePresent
toBeExisting
toBeFocused
toHaveAttribute
toHaveAttr
toHaveAttributeContaining
toHaveAttrContaining
toHaveElementClass
toHaveElementClassContaining
toHaveElementProperty
toHaveValue
toHaveValueContaining
toBeClickable
toBeDisabled
toBeEnabled
toBeSelected
toBeChecked
toHaveHref
toHaveLink
toHaveHrefContaining
toHaveLinkContaining
toHaveId
toHaveText
toHaveTextContaining
toBeDisplayedInViewport
toBeVisibleInViewport
toHaveChildren
toBeElementsArrayOfSize

refer = https://webdriver.io/docs/api/expect-webdriverio




