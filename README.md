See https://github.com/reactjs/prop-types/issues/38

### Example when `prop-types` is bundled by an external lib
```
./run-fail.sh
```

The browser console shows:
>Warning: Failed prop type: Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them.

### Example when `prop-types` is added to externals (thus excluded from the bundle)
```
./run-correct.sh
```

This builds `external-lib` using `external-lib/webpack.config.correct.js`, where the only change is that `prop-types` is listed in `externals`.

No warnings or errors are shown.