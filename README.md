# Webpack library with arrays of entries.

Looking to export...

```js
window.Components = {
  bar: "bar",
  bar: "baz",
  foo: "foo",
  index: {}
};
```

but it's exporting

```js
window.Components = {
  bar: "baz",
  foo: "foo",
  index: {}
};
```

## Verify

- Run `yarn start` (after install of packages)
- Check console
