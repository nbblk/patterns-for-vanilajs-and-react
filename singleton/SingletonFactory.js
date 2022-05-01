module.exports = (function () {
  console.log("=== singleton factory ===");
  let instance;
  let count = 0;

  function createInstance() {
    return {
      increment: function () {
        ++count;
      },
      decrement: function () {
        --count;
      },
      getCount: function () {
        return count;
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
