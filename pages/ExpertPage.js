// page_objects/ExpertPage.js
const { I } = inject();

module.exports = {
  locators: {
    // Locators for buttons using [data-test-id] attribute
    startPrivateSession: { css: "#mc_btn_start_private" },
    badgeLive: { css: ".mc_badge.mc_stream_info_badge.notranslate" },
    addToFavouritesButton: {
      xpath:
        "//*[@id='video-container']/div[40]/div[1]/div[3]/div[2]/div[1]/div[2]/div[1]",
    },
    popupModalLocator: { css: '[data-testid="mainLoginSignUpOverlayApplet"]' },
    buyCreditButton: {
      css: '[data-id="buyCreditIcon"]',
    },
    surpriseOranumSurprisesHuman: {
      css: '[data-testid="surprise-OranumSurprisesHuman"]',
    },
    surpriseOranumSurprisesTree: {
      css: '[data-testid="surprise-OranumSurprisesTree"]',
    },
    surpriseOranumSurprisesHand: {
      css: '[data-testid="surprise-OranumSurprisesHand"]',
    },
    surpriseOranumSurprisesEye: {
      css: '[data-testid="surprise-OranumSurprisesEye"]',
    },
    surpriseOranumSurprisesFlower: {
      css: '[data-testid="surprise-OranumSurprisesFlower"]',
    },
    surpriseOranumSurprisesYinYang: {
      css: '[data-testid="surprise-OranumSurprisesYinYang"]',
    },
    surpriseOranumSurprisesPhoenix: {
      css: '[data-testid="surprise-OranumSurprisesPhoenix"]',
    },
    surpriseOranumSurprisesSun: {
      css: '[data-testid="surprise-OranumSurprisesSun"]',
    },
    surpriseOranumSurprisesHeart: {
      css: '[data-testid="surprise-OranumSurprisesHeart"]',
    },
    surpriseOranumSurprisesFox: {
      css: '[data-testid="surprise-OranumSurprisesFox"]',
    },
    surpriseOranumSurprisesDreamcatcher: {
      css: '[data-testid="surprise-OranumSurprisesDreamcatcher_LJ"]',
    },
    surpriseOranumSurprisesDiamond: {
      css: '[data-testid="surprise-OranumSurprisesDiamond_LJ"]',
    },
    surpriseOranumSurprisesGlobe: {
      css: '[data-testid="surprise-OranumSurprisesGlobe_LJ"]',
    },
  },
};
