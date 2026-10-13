(function () {
  var ANALYTICS = { endpoint: null, queue: [] };
  window.__loopAnalytics = ANALYTICS;
  window.loopTrack = function (name, props) {
    var evt = { name: name, props: props || {}, path: location.pathname, ts: new Date().toISOString() };
    ANALYTICS.queue.push(evt);
    if (ANALYTICS.endpoint) { }
  };
  window.loopTrack("page_view", { title: document.title });
})();
