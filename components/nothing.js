fetchExchangeRates: function () {
      var self = this;

      var exchangeRateMod = kony.mvc.MDAApplication.getSharedInstance()
        .getModuleManager()
        .getModule("ForeignExchangeUIModule");

      var errorCallback = function (error) {
        alert("Error fetching rates: " + JSON.stringify(error));
      };

      exchangeRateMod.presentationController.getExchangeRates(function (
        response
      ) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();

        self.view.segRatesDetails.widgetDataMap = {
          lblCurrCode: "lblCurrCode",
          lblBuyRate: "lblBuyRate",
          lblSellRate: "lblSellRate",
          imgCurrency: "imgCurrency",
        };

        var images = [
          "aed.png",
          "ats.png",
          "aud.png",
          "bef.png",
          "cad.png",
          "chf.png",
          "dem.png",
          "djf.png",
          "dkk.png",
          "etb.png",
          "eur.png",
          "frf.png",
          "gbp.png",
          "inr.png",
          "itl.png",
          "jpy.png",
          "kes.png",
          "nlg.png",
          "nok.png",
          "sar.png",
          "sek.png",
          "usd.png",
          "xaf.png",
          "zar.png",
        ];
        if (!Array.isArray(response.body)) {
          alert("Unexpected response format");
          return;
        }
        // alert(response.body);
        var mappedCurrencyData = response.body.map(function (currency) {
          var matchingImage = images.find((image) =>
            image.startsWith((currency.currencyCode || "").toLowerCase())
          );

          return {
            lblCurrCode: currency.currencyCode,
            lblBuyRate: currency.buyRate.toFixed(4),
            lblSellRate: currency.sellRate.toFixed(4),
            imgCurrency: matchingImage || "defaultflag.png",
          };
        });

        if (self.view.segRatesDetails) {
          self.view.segRatesDetails.setData(mappedCurrencyData);
        }
      },
      errorCallback); // make sure this is supported
    },
  