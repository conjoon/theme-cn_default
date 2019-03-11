# theme-cn_default  [![Build Status](https://travis-ci.org/conjoon/theme-cn_default.svg?branch=master)](https://travis-ci.org/conjoon/theme-cn_default)
This **Sencha ExtJS** package contains the default theme for development of [conjoon](https://github.com/conjoon) along
with its application packages.
Please note, that this theme serves as a base for pluggable packages, such as 
[conjoon/app-cn_mail](https://github.com/conjoon/app-cn_mail), where styling information for these 
packages are self-contained.


## Naming
The following naming conventions apply:

#### Namespace
#### Package name
`theme-cn_default`

# Usage
## Requirements
This package requires the [app-cn_navport](https://github.com/coon-js/app-cn_navport) package of the [coon.js](https://github.com/coon-js) project,
due to overrides appliedby this theme.

# Usage
Specified as ```theme``` property in conjoon's ```app.json```.
Additionally, packages providing styling information might refer to this theme
to access SASS-variable definitions.