/* Registering the worker is the easy half. Getting a phone that already has an
   older build to notice a new one is the half that goes wrong, so it lives in
   one file that every page loads rather than in ten copies that drift.

   Three things have to happen, and until this file existed only the menu did
   any of them: ask for an update on every launch and whenever the app comes
   back to the foreground, because a home-screen app can sit warm for days
   without the fresh navigation that would otherwise prompt the check; reload
   once when a new worker takes over mid-view, so the page you are looking at
   is not the stale one it replaced; and bypass the HTTP cache when fetching,
   which the worker does for its part. */
(function(){
  "use strict";
  if(!("serviceWorker" in navigator)) return;

  if(navigator.serviceWorker.controller){
    var reloaded = false;
    navigator.serviceWorker.addEventListener("controllerchange", function(){
      if(reloaded) return;
      reloaded = true;
      location.reload();
    });
  }

  window.addEventListener("load", function(){
    navigator.serviceWorker.register("./sw.js").then(function(reg){
      reg.update().catch(function(){});
      document.addEventListener("visibilitychange", function(){
        if(!document.hidden) reg.update().catch(function(){});
      });
    }).catch(function(){});
  });

  if(navigator.storage && navigator.storage.persist){
    navigator.storage.persist().catch(function(){});
  }
})();
