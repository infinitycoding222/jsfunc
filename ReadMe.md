# Useful JS Functions


##### Current Functions:
- Reverse array

- Post data to hastebin.com

### Packages need to install:

- node-fetch `default should be installed with node.JS`

### How to use: 

```javascript
const JS = require("usefuljsfunc")
const fetch = require("node-fetch")

// Reversing an array
JS.Reverse("hi hello") // returns olleh ih

// Posting data to hastebin
JS.PostHastebin("datahere") // posts data to hasteb.in

// Returning Minecraft Achievements
JS.MC("StringUnder15Length") // returns image achievement with the string provided 
```

## Changes: 
1. v1.1.0 - Published
2. v1.1.2 - Fixed Reverse Function returning all words as one
3. v1.2.0 - Added Minecraft Achievement Function and Made possible to use with Discord.JS Bot
4. v1.2.1x - Updated Readme and renamed `Minecraft Achievement to MC`
5. v1.3.0x - Updated Readme and fixed many bugs 
6. v1.3.2 - Added `capitalise` function that requires 1 argument