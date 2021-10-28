// Name:        Seadragon.Seadragon.Config.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
// (c) 2010 CodePlex Foundation
Type.registerNamespace('Sys.Extended.UI.Seadragon');
Type.registerNamespace('Seadragon');
Sys.Extended.UI.Seadragon.Config = function() {

    this.debugMode = true;

    this.animationTime = 1.5;

    this.blendTime = 0.5;

    this.alwaysBlend = false;

    this.autoHideControls = true;

    this.immediateRender = false;

    this.wrapHorizontal = false;

    this.wrapVertical = false;

    this.minZoomDimension = 0.8;

    this.maxZoomPixelRatio = 2;

    this.visibilityRatio = 0.5;

    this.springStiffness = 5.0;

    this.imageLoaderLimit = 2;

    this.clickTimeThreshold = 200;

    this.clickDistThreshold = 5;

    this.zoomPerClick = 2.0;

    this.zoomPerSecond = 2.0;

    this.showNavigationControl = true;

    this.maxImageCacheCount = 100;

    this.minPixelRatio = 0.5;

    this.mouseNavEnabled = true;

    this.navImages = {
        zoomIn: {
            REST: 'WebResource.axd?d=pG5_4hUAA5YIAqZBiNWUgrnpTKQYKdKZfDag_5b7XzwnJVfK5SwmgkHmxQPFUViC_4-nipz3MXPeWeY8plzNst2Pfx20_12IyF2iQAfiavhNmL1CrRHf0e_38HJ5B-__e99PJGswBPzhgQGqWo0t7A2&t=635226086440000000',
            GROUP: 'WebResource.axd?d=fZpKw9SmHQCZBtM9tOdaALQr03hroz3VzdgzaEpJiRwFn6QkwW-5tn0tWmaxzdsggNAR8Zl0aqefv0neDpP5qg0w43fsQBEwqBLpqbt7VidJISuLXU8Yhh5VQHWqMoUBZ1l-YvPTGHrN6r7zSIYef7rHGQVi2lgtMyAfwgB9lxA1&t=635226086440000000',
            HOVER: 'WebResource.axd?d=uzAk4OY5271rgq-ObUPGwlHZWf4YUikV7O3_9-pemzyV2yZbkdzUeYb7X4XO_LdWMXIkQoJXhuG5Ocd5hVLhES2Mdd5kgP1MpDUIprY8iRMDqNv3MNdXZ5E0MvXfBh-rhYJEIbvDfyI21-01aLVWwg2&t=635226086440000000',
            DOWN: 'WebResource.axd?d=LOCOF27AomsciRUBYEuevpUv3C9sOUpPQZHQkQfEmixQLmUSI_l9FNCQ7W68LNwE1liKzj_0B1Agw1pb9FvEe8ZKLoyBD95rljElTi35f2_01F7kL2T6MgxfqWSQomYeO05BppkZGHUf4lg6lmojlA2&t=635226086440000000'
        },
        zoomOut: {
            REST: 'WebResource.axd?d=rTKr9YduwCPFdE4yBATKhaBQEggBkviM4sr1Cts3fITtb031c8h4ll0i6zNnbI1vBnwh_isAgg0W-mA0qvRtO8DpcAe4aYMhFFGEkgX0Yvf2dF_kJIs4YvJeCVlSqJ13zJ0saqNXgJG6axbRBfHhUA2&t=635226086440000000',
            GROUP: 'WebResource.axd?d=T2mjrRETZ1xknyIFvmHptO3egSXtbpQSiAuePCnCbxLek3L4-Q0AsUPXMi1kEPjFlGY1--3pBNc_8Gf9EkUHpQ6x8QB2M-sGsuHLpkrAUKI652GznM740wwOaAC-7t-7k0A3yVd-jLS8BLQlhH46MM3QfeH6PkASDg4k8WY1Lwc1&t=635226086440000000',
            HOVER: 'WebResource.axd?d=rZw_Wo89geap4ViedaPgPTIsySGHeJsm8xFy-1VVZ3E7bFRxWXvS3l8xsC-z7ftzEnZ1GXnprtpNDG5k34YdZqo9l7lLYPphhTwsjaQbKNmmlrWoBtfKZn0qxCBlXG7sUiIb8E-FxiHzAuFw60QXpw2&t=635226086440000000',
            DOWN: 'WebResource.axd?d=XLxaftmPq5Yd4fbPOFUaKqhYlfMrdBO06upXhRD4t3vtezhkmgVXYFq6kzXainfXzuVLNtyBCJ1PXnJNn5Gtgzc-iyb391FmoFH149fjolFJ7uo8livkl4gz47irFyoZk7fTo8BVP-kcO2WZ2rmajpzKKTFsYKXMIp4_Vsb8k_k1&t=635226086440000000'
        },
        home: {
            REST: 'WebResource.axd?d=boKWqTX81389UMaE8fDMHnLCNLgZ3suuzJK02TkYDiGZUXz9mfW-KugH2_eb1G6XxShoVgW-AqGoyOPmcKavhLEWbvMvcY-pfdHGZ_KxDei1WiH-LS8wa0453IcFui5D4Z192-6cV0_1zNMNlGdE6Q2&t=635226086440000000',
            GROUP: 'WebResource.axd?d=w6INIiR6DzWPJ0r3h6pNjdKBpm3Z-Zrpw_kBlm3jUqWBigjljNZVEe8ax-nmEqGWN37IGyEOep08dTiVJqU7SCI09tOv-5yes7vL8XEeUfNtu4bXpacoJLmcEv2rHmreerv9az1Q1sFY-RggileoBhDH7J8nfGZmX83cuWsRqJk1&t=635226086440000000',
            HOVER: 'WebResource.axd?d=_3tAERfJQjeJB0A18nko0rXq19NkYdVe9qKL7HTtc-Vp3tOm2vpUmbU9VjwBvZK9ge2IuiwnqTDFLXJNUVtyEJkzd1bJP56tmH_pbFFmiPT__v6_W4PtqktDvKSkNIadnLlrDTnG9mTvBiGjZkQ5tQ2&t=635226086440000000',
            DOWN: 'WebResource.axd?d=Si-sg7_eSEqeSJ4JTAeVPoGbrH4SiJB8bbhlvK5BJY0YckMfLvPhR1aHFTq5I116570MT6cx5EUWHqQAlmIWWGDx0mUGUp801Xg1djevIHWzKQV96vpXqKY5qw9V45TPkqvfQ5HMiOEIhd81OBghmA2&t=635226086440000000'
        },
        fullpage: {
            REST: 'WebResource.axd?d=P6AOtvQCgrIm4hsJt9HuZLl_UT9EeL7bnHW9-u6RGtobBL6EVoSTrokiQB6WVljxVhnX6ulK9-rtZuV2ko4q3U7TThj38itsetIcJ-c9KuWBJ7yfzuYp0duPX18FI8qfR8d-rk808wVQ-Xbzuatc_g2&t=635226086440000000',
            GROUP: 'WebResource.axd?d=WkF_Zc-SD8qT1pC-CLOjJQevCkW6Bad807ii-LXIltVpeVOvkKRw2MeRqzfRuoZ4Ttnl2T0NmncfiTNV9q2l-d7Tet7lQOBAdKOjafkjDCOHfwNgI4Ti7aPU0Ou_PA3c8rcxH7bIu0YUWf10CUxRLQY9S9D9R-Z9PirapsAkelA1&t=635226086440000000',
            HOVER: 'WebResource.axd?d=4UN0JLtMS3HYfD0gWeRM0WtFBoSE-E5AyjLMLS5wXm4aMOc6E09zxkSIkzmk5p8_FGFKvUsOO3a--4mVX52CErfSNCp2EA_ZbLZte7F3D4IS1YzF73VDXBW7uRf403RMmH4Z9WdsV4P44HU5hW-TSA2&t=635226086440000000',
            DOWN: 'WebResource.axd?d=NFsZK5l5TBk_-eAb7t60yqqynP3PbxTZMmB1YMNSeDt32UQQtNgjnZNmWUypYJOvkPuN5CJCuUIcub00OFMscZhjhHD-RnLgSlpgYEHno8igfRDp5mVj1xea4BqqIJFAH4dABycZNgvy5jpnSmUCtn4clzBJCj9yrtVx_budGW01&t=635226086440000000'
        }
    };
};
Sys.Extended.UI.Seadragon.Config.registerClass('Sys.Extended.UI.Seadragon.Config', null, Sys.IDisposable);
