casperjs-1.1.0-beta3's CSS selectors do not support selecting a selected OPTION.

This example proves that CasperJS is unable to find a selected OPTION that JQuery is able to find.

```
git clone https://github.com/sheldonh/casperjs-css-selector-bug.git
cd casperjs-css-selector-bug
casperjs test not_so_simple.js
```

Reported: https://github.com/n1k0/casperjs/issues/1000
