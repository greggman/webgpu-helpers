# WebGPU Helpers

Some scripts I used to help me debug and develop with WebGPU

Most of these you'd add to your page above your scripts.

## Show the requestAdaptor and requestDevice info

```html
<script src="https://greggman.github.io/webpgu-helpers/show-request-and-adpater-info.js"></script>
```

## force powerPreference high-performance

```html
<script src="https://greggman.github.io/webpgu-helpers/force-high-performance.js"></script>
```

Will also print the adapter info so you can verify which GPU was returned

## force powerPreference low-power

```html
<script src="https://greggman.github.io/webpgu-helpers/force-low-power.js"></script>
```

Will also print the adapter info so you can verify which GPU was returned

## Dump Shaders

```html
<script src="https://greggman.github.io/webpgu-helpers/dump-shaders.js"></script>
```

This might be useful for things like three.js, babylon.js, unity, etc where it's not clear what shaders are being used and you'd
like to produce a stand alone repo for a bug report or just see
how their shaders work.

# LICENSE

[MIT](LICENSE.md)
