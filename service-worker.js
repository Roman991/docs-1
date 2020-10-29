/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1ca15405875bb813cfa7f1125530f557"
  },
  {
    "url": "annotations.html",
    "revision": "d477a81b8e866295264b6855083e62b0"
  },
  {
    "url": "assets/css/0.styles.12f75f35.css",
    "revision": "804ea70da9affe96036f9c24fced917a"
  },
  {
    "url": "assets/img/err-422-swui.abcf1054.png",
    "revision": "abcf1054db171750b85d94d57a232aff"
  },
  {
    "url": "assets/img/errors-client.8c545526.png",
    "revision": "8c54552649e7349065bb8839351529d2"
  },
  {
    "url": "assets/img/errors-json-client.281534f3.png",
    "revision": "281534f3154c83e9673738f942eb454c"
  },
  {
    "url": "assets/img/errors-json-server.8d28ca48.png",
    "revision": "8d28ca48e78c7a8383b770ea1aa57774"
  },
  {
    "url": "assets/img/errors-server.c923a910.png",
    "revision": "c923a91036ddede850666c665b20cd7d"
  },
  {
    "url": "assets/img/jsdoc-method.9bfd2316.png",
    "revision": "9bfd2316c02dc6e8a92a536c362db346"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SwaggerUI.faac8e72.png",
    "revision": "faac8e72ce413b51c78465adb9e6382b"
  },
  {
    "url": "assets/img/swui-alias.50b1bde7.png",
    "revision": "50b1bde755ca1bca4d14035e2deec587"
  },
  {
    "url": "assets/img/swui-endpoint-description.f12d2880.png",
    "revision": "f12d2880700088f56e11d0ef8525bb5c"
  },
  {
    "url": "assets/img/SwUi-Response.59b451a9.png",
    "revision": "59b451a91dcdb0ac2fc2c1d8ee6fdc51"
  },
  {
    "url": "assets/js/10.5f71d4e0.js",
    "revision": "0c0ec91d9ef05f97dd0e89e6e7570d1a"
  },
  {
    "url": "assets/js/11.e55a1df4.js",
    "revision": "5745c8cd05034d0d213fc97b125104d6"
  },
  {
    "url": "assets/js/12.c840d579.js",
    "revision": "b1a4c4b34215076ebdcec31ecf7e03b6"
  },
  {
    "url": "assets/js/13.97c97053.js",
    "revision": "c6ebe6c4ff7b641decf29dc5a91d2605"
  },
  {
    "url": "assets/js/14.2a7786b7.js",
    "revision": "72b2ae33df2f801f3bd0442c14f0b647"
  },
  {
    "url": "assets/js/15.ae45480b.js",
    "revision": "364f99826344f09b1e06f78a0ea59a9e"
  },
  {
    "url": "assets/js/16.bb624632.js",
    "revision": "8f239b22b1d4ff15f51ec71d36fb94eb"
  },
  {
    "url": "assets/js/17.366fb5a5.js",
    "revision": "38de31179ae14d29cc572f6d0d1659f8"
  },
  {
    "url": "assets/js/18.1dc34212.js",
    "revision": "e2c2a511ee950994cac43285d6a7fea5"
  },
  {
    "url": "assets/js/19.8aafde17.js",
    "revision": "b9aeb453f8d6b0d5c828f341608987da"
  },
  {
    "url": "assets/js/2.ab57128e.js",
    "revision": "ba451933d5e22ba6a4d2f555b5dfe670"
  },
  {
    "url": "assets/js/20.1ec7435e.js",
    "revision": "3348d1c7ac48b9bb16f8a3aa28a0d30c"
  },
  {
    "url": "assets/js/21.9c01ab55.js",
    "revision": "68b6b6db07a6fb0de1b3c8954358b0c4"
  },
  {
    "url": "assets/js/22.730c95c0.js",
    "revision": "f91c01ec0097cb0bff80fc784b52d9cd"
  },
  {
    "url": "assets/js/23.85b8787d.js",
    "revision": "7749ec6c2b1ef846a7dc40956a55c1e9"
  },
  {
    "url": "assets/js/24.34f00647.js",
    "revision": "a80f708e817ef77ff2624fa0cc768197"
  },
  {
    "url": "assets/js/25.2ac38491.js",
    "revision": "b97e25e572694f43b0400fdc59c6ba4f"
  },
  {
    "url": "assets/js/26.dba59441.js",
    "revision": "75d9631cad38a7f4cf4773a3a6701dfc"
  },
  {
    "url": "assets/js/3.545f5bf2.js",
    "revision": "f4bdb00076a5480d1aa5b3c6e1711da5"
  },
  {
    "url": "assets/js/4.031e9d49.js",
    "revision": "0e527dfb88cad497c83796bd9fa2f76c"
  },
  {
    "url": "assets/js/5.c2aa3cf6.js",
    "revision": "78c846ee6169769b75d7f2115011d925"
  },
  {
    "url": "assets/js/6.c07319d3.js",
    "revision": "0d65c98e84d4d7138dbb983f7cd4ff11"
  },
  {
    "url": "assets/js/7.f5776ab4.js",
    "revision": "c5501e96cf881b9c9276a82c1bced3ab"
  },
  {
    "url": "assets/js/8.04a6e67f.js",
    "revision": "4951536f70da24eb7216c6f2c8b9e3ef"
  },
  {
    "url": "assets/js/9.ef1ffe6d.js",
    "revision": "2137a8bbeedfe7cfb3a52c8760c15cf5"
  },
  {
    "url": "assets/js/app.3549a81c.js",
    "revision": "2fc23b6e9f833b0fdef31cb6af90ef66"
  },
  {
    "url": "authentication.html",
    "revision": "5087ca35a57ef0a919aecbb703cce702"
  },
  {
    "url": "decorators.html",
    "revision": "58f4f1ccda964dcf13a283e8c323165c"
  },
  {
    "url": "descriptions.html",
    "revision": "0a9e9800a690f82ae6cc9056295cbdb0"
  },
  {
    "url": "di.html",
    "revision": "ee85c05df5383748c1797404f34f4f87"
  },
  {
    "url": "error-handling.html",
    "revision": "ec3a1aab8659220cc3061ff815e45bbd"
  },
  {
    "url": "examples.html",
    "revision": "1ae7286f81d420c9cf442f919dad5193"
  },
  {
    "url": "faq.html",
    "revision": "a7ef1b50b6596854974cb0476860af89"
  },
  {
    "url": "file-upload.html",
    "revision": "44e0ea9339ac62b0e0381ca6366674e1"
  },
  {
    "url": "generating.html",
    "revision": "33c8d70d473550846c879d38fa5bd9f7"
  },
  {
    "url": "getting-started.html",
    "revision": "c85217a69573023d3bcc7bc5c9ea1508"
  },
  {
    "url": "index.html",
    "revision": "486bbf80d2bbfe04b8cfc28fbe8e7355"
  },
  {
    "url": "introduction.html",
    "revision": "3429c4c8107c53926a62306a7af75776"
  },
  {
    "url": "live-reloading.html",
    "revision": "50bce41a2a77b52ee0345580f08a70c3"
  },
  {
    "url": "path-mapping.html",
    "revision": "a5cb6be6e42a5b157fd3bfcd89fe5336"
  },
  {
    "url": "routes.html",
    "revision": "f2bb2f9e5c229f64beb0f735a8fd2923"
  },
  {
    "url": "templates.html",
    "revision": "50fcccf0c4327c056275ee0ac416f416"
  },
  {
    "url": "upgrading.html",
    "revision": "37c0a99a843e4147bfe326e1affd28f5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
