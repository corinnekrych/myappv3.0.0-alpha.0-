# HoneyUI test distribution package

This sample app was creating using [create-react-app](https://github.com/facebook/create-react-app) with the following command:
`yarn create react-app myappv3.0.0-alpha.0 --template typescript`

In order to consume `v3.0.0-alpha.*` here are the steps to do it.


### Add HoneyUI peer dependencies
In your package.json here are the needed dependencies
```json
    "@cloudbees/honeyui": "^3.0.0-alpha.1",
    "@cloudbees/react-honeyui": "^3.0.0-alpha.1",
    "react-bootstrap": "^1.6.1",
```
HoneyUI uses *peer dependencies* it's up to your project to add the version of the peer dependencies in its "dependencies" section

### Add HoneyUI styles
You need to import the CSS/SCSS (either one or the other)

In `index.scss` add

```sass
@import "~@cloudbees/honeyui";
```
 if you want to import all HUI scss.

### Use HoneyUI react component

#### Global import

```tsx
import { Alert, Button } from "@cloudbees/react-honeyui";


<Alert variant="info">
  A simple info alert — check it out!
</Alert>
<Button>HoneyUI Button</Button>
```

#### Importing individually for each component

```tsx
import { Alert } from "@cloudbees/react-honeyui/Alert";
import { Button } from "@cloudbees/react-honeyui/Button";

<Alert variant="info">
  A simple info alert — check it out!
</Alert>
<Button>HoneyUI Button</Button>
<Button>HoneyUI Button</Button>
```

> NOTE: an extra TS config step is needed when willing to consume individual import

For individual import you will need this extra tsconfig in `tsconfid.json` under compilerOptions add:

```json
    "paths": {
      "@cloudbees/react-honeyui/*": ["./node_modules/@cloudbees/react-honeyui/dist/*"]
    },
```
