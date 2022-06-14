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
    "revision": "138983d3fa86c2e3054be721a38fd639"
  },
  {
    "url": "assets/css/0.styles.f7015215.css",
    "revision": "c704ef932536e735ebe53aacc3c55080"
  },
  {
    "url": "assets/img/Agile.194c1147.png",
    "revision": "194c1147f9ae804458586e07674beecf"
  },
  {
    "url": "assets/img/Agile1.1e3db965.png",
    "revision": "1e3db9658190a9c695259df023f62fa1"
  },
  {
    "url": "assets/img/Classic.0de09f2e.png",
    "revision": "0de09f2efcd4104f3cad30f38bd26939"
  },
  {
    "url": "assets/img/create_user_after.c8c47c79.png",
    "revision": "c8c47c7975d578a8f4b300e2e625f659"
  },
  {
    "url": "assets/img/create_user_before.ad730647.png",
    "revision": "ad7306473fe248a095eef969c851ded0"
  },
  {
    "url": "assets/img/create_user.b992e211.png",
    "revision": "b992e2112cd9ddbee556dbe383da6496"
  },
  {
    "url": "assets/img/crust.61e88074.png",
    "revision": "61e88074aafaf1ef3147222a7c08d62f"
  },
  {
    "url": "assets/img/get_all_users.56d375f9.png",
    "revision": "56d375f9814dd811b6b128a60cb4c11f"
  },
  {
    "url": "assets/img/get_tasks_by_project.725475f9.png",
    "revision": "725475f94cbd8a2901466f927d62f0dd"
  },
  {
    "url": "assets/img/Kanban.4e4c6315.png",
    "revision": "4e4c63154c6b2b559e2fe027ba90303f"
  },
  {
    "url": "assets/img/Privelege_diagram.b45df399.png",
    "revision": "b45df39955c0b63260594a784807a733"
  },
  {
    "url": "assets/img/relational_schema.236c75fa.png",
    "revision": "236c75fa3230b725efce00087e252d56"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sigma.e9f1e416.png",
    "revision": "e9f1e416fd825a5f172d469c8056b4b8"
  },
  {
    "url": "assets/js/10.59ff8adf.js",
    "revision": "0a83817b2068b028a456b6268cb25c59"
  },
  {
    "url": "assets/js/11.bc31628e.js",
    "revision": "1eb6a6a833c1415ef00ff5db6140d8b8"
  },
  {
    "url": "assets/js/12.a11c4e76.js",
    "revision": "fac7f98ab9f9c1ce6f78c9db770cf779"
  },
  {
    "url": "assets/js/13.f6eafe83.js",
    "revision": "ea20078f9457d3cb7708ec33c2d407db"
  },
  {
    "url": "assets/js/14.9676336f.js",
    "revision": "c5f8fcfd530235e0dbbbfff57f7bbcd5"
  },
  {
    "url": "assets/js/15.53563db3.js",
    "revision": "adb1135146d12197bc8e9233373e3975"
  },
  {
    "url": "assets/js/16.73013da2.js",
    "revision": "bf448e1e2e561e81653d79ceb53985cb"
  },
  {
    "url": "assets/js/17.49c3600a.js",
    "revision": "3a289c3669446cf254030e541c5e86dd"
  },
  {
    "url": "assets/js/18.6c77e3ec.js",
    "revision": "cab0e6aa6e29c7415e57b17e4627894b"
  },
  {
    "url": "assets/js/19.e56422e5.js",
    "revision": "ad0a4cab6ffee25a35b5c79eba26c4dc"
  },
  {
    "url": "assets/js/2.7eb26c5b.js",
    "revision": "5f3001a5ae0939e22f16a14030b62dae"
  },
  {
    "url": "assets/js/20.03b7d084.js",
    "revision": "25f21cb68660bc9c046f0ed8e548e0b1"
  },
  {
    "url": "assets/js/21.72d96b97.js",
    "revision": "6c2c934a66e8ebc224d822e8ce33eb81"
  },
  {
    "url": "assets/js/22.5ea28898.js",
    "revision": "bc47fe86b2f34d82652401f100e6a634"
  },
  {
    "url": "assets/js/23.ae62a73f.js",
    "revision": "64e4455df7a4e96f58b11d0c9d4a9993"
  },
  {
    "url": "assets/js/24.f7494321.js",
    "revision": "6a1092c8d234f235785ac13ed4856fe9"
  },
  {
    "url": "assets/js/26.6dec4e79.js",
    "revision": "57e940fd028f64683c665bc0f029fdf5"
  },
  {
    "url": "assets/js/3.60814b08.js",
    "revision": "0a539aeaa10886fc58f7ee68de0dd847"
  },
  {
    "url": "assets/js/4.bc84dd2c.js",
    "revision": "2913c89fee87f5f487f2b180852e1b06"
  },
  {
    "url": "assets/js/5.84bc6417.js",
    "revision": "b6b369c8f56af87b6464e39666058dc3"
  },
  {
    "url": "assets/js/6.1747596f.js",
    "revision": "48ebf2e542bb440d489e64bd364990cb"
  },
  {
    "url": "assets/js/7.77942256.js",
    "revision": "1087c03b99e977fa78dcea12c35a4653"
  },
  {
    "url": "assets/js/8.58f2573d.js",
    "revision": "ee5cc77e718e0d116dfe6c661b7945c4"
  },
  {
    "url": "assets/js/9.3ada139a.js",
    "revision": "eddb22b452be025093da9620f23db5e3"
  },
  {
    "url": "assets/js/app.2ecc18d1.js",
    "revision": "1b86d96fdd85a5222528fd1818429078"
  },
  {
    "url": "conclusion/index.html",
    "revision": "7e565eee51037bce6b8b807a7e844032"
  },
  {
    "url": "design/index.html",
    "revision": "d8f24f1e1e56f3e50c4c73bff40d277c"
  },
  {
    "url": "index.html",
    "revision": "8fc82011bdc11c988f3a05f749da467c"
  },
  {
    "url": "intro/index.html",
    "revision": "dde3e6a367ba76ffff57459332393a5f"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "16cb62916985ac121b52f1c6eaf6371d"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "b6d893ad7b20eb09405dea0424e942a2"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "697b63954658e4e6266bd08879103ee0"
  },
  {
    "url": "software/index.html",
    "revision": "3a98ace05cf34c8191985d2f12c91e97"
  },
  {
    "url": "test/index.html",
    "revision": "3f1e1c4ecbc7713763106eb51544ea1f"
  },
  {
    "url": "use cases/index.html",
    "revision": "7488f60121e02e08e8f76b7762f70b4d"
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
