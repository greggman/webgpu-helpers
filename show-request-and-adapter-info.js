if (navigator.gpu) {
  navigator.gpu.requestAdapter = (function(origFn) {
    return async function(...args) {
      if (args.length) {
        console.log("requestAdapter: ", ...args);
      }
      const adapter = await origFn.call(this, ...args);
      if (adapter) {
        try {
          const info = await adapter.requestAdapterInfo();
          console.log('adapterInfo:', info);
        } catch (e) {
          console.log("ERR:", e);
        }
      }
      return adapter;
    };
  })(navigator.gpu.requestAdapter);

  GPUAdapter.prototype.requestDevice = (function(origFn) {
    return async function(...args) {
      if (args.length) {
        console.log("requestDevice: ", ...args);
      }
      const device = await origFn.call(this, ...args);
      console.log('device limits:', device.limits);
      console.log('device features:', [...device.features].map(v => `\n  '${v}'`).join(''));
      return device;
    };
  })(GPUAdapter.prototype.requestDevice);
}