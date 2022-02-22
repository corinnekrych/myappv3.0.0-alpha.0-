# HoneyUI test distribution package

Using v3.0.0-alpha.*


### package.json
Needed dependencies
```json
    "@cloudbees/honeyui": "^3.0.0-alpha.1",
    "@cloudbees/honeyui-icons": "^3.0.0-alpha.1",
    "@cloudbees/react-honeyui": "^3.0.0-alpha.1",
    "@material-ui/core": "^4.12.3",
    "@material-ui/icons": "^4.11.2",
    "react-bootstrap": "^1.6.1",
```

### tsconfig
In compilerOptions add:

```json
    "paths": {
      "@cloudbees/react-honeyui/*": ["./node_modules/@cloudbees/react-honeyui/dist/*"]
    },
```
