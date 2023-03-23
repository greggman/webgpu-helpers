if (navigator.gpu) {
  navigator.gpu.requestAdapter = (function(origFn) {
    return async function(desc = {}) {
      const adapter = await origFn.call(this, {...desc, powerPreference: 'low-power'});
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
}