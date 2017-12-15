# parcel-vue-demo

You must `node >= 8`.

```
npm i
npm run dev
```

## You May Like

* parcel-plugin-vue
* parcel-plugin-eslint

## Make some issues clear

### Used with 'parcel-plugin-typescript'

The log show `Cannot find module './index.vue'.`

The Result of browser is OK!

It's that the plugin for 'typescript' can't find '*.vue'.

In 'ts-loader', that has a 'appendTsSuffixTo' option can used for '*.vue'.

More in https://github.com/TypeStrong/ts-loader#appendtsxsuffixto-regexp-default.