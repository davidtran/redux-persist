var setImmediate = typeof global !== 'undefined' && typeof global.setImmediate !== 'undefined' ? global.setImmediate : function (fn, ms) {
  return setTimeout(fn, ms);
};

export default setImmediate;