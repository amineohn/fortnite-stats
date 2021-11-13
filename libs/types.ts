export type AEs = {
  build: string;
  mainKey: string;
  dynamicKeys: [{ pakFilename: string; pakGuid: string; key: string }];
};
export type Maps = {
  images: { blank: string; pois: string };
  pois: [
    {
      id: number;
      name: string;
      location: { x: number; y: number; z: number };
    }
  ];
};
export type Shop = {
  hash: string;
  date: string;
  vbuckIcon: string;
  featured: {
    name: string;
    entries: [
      {
        regularPrice: number;
        finalPrice: number;
        bundle: { name: string; info: string; image: string };
        banner: { value: string; intensity: string; backendValue: string };
        giftable: boolean;
        refundable: boolean;
        sortPriority: number;
        categories: [];
        sectionId: string;
        section: {
          id: string;
          name: string;
          index: number;
          landingPriority: number;
          sortOffersByOwnership: boolean;
          showIneligibleOffers: boolean;
          showIneligibleOffersIfGiftable: boolean;
          showTimer: boolean;
          enableToastNotification: boolean;
          hidden: boolean;
        };
        devName: string;
        offerId: string;
        displayAssetPath: string;
        titleSize: string;
        newDisplayAssetPath: string;
        newDisplayAsset: {
          id: string;
          cosmeticId: string;
          materialInstances: [
            {
              id: string;
              image: { OfferImage: string; Background: string };
              colors: {
                Background_Color_A: string;
                Background_Color_B: string;
                FallOff_Color: string;
              };
              scalings: {
                Spotlight_Hardness: number;
                OffsetImage_X: number;
                OffsetImage_Y: number;
                ZoomImage_Percent: number;
                RefractionDepthBias: number;
                Gradient_Position_X: number;
                Gradient_Position_Y: number;
                Gradient_Size: number;
                FallOffColor_Fill_Percent: number;
                FallOffColor_Postion: number;
              };
              flags: {
                IsAnimatedWrap: boolean;
              };
            }
          ];
        };
      }
    ];
    items: [
      {
        id: number;
        name: string;
        description: string;
        type: { value: string; displayValue: string; backendValue: string };
        rarity: { value: string; displayValue: string; backendValue: string };
        series: string;
        set: { value: string; text: string; backendValue: string };
        introduction: {
          chapter: string;
          season: string;
          text: string;
          backendValue: number;
        };
        images: {
          smallIcon: string;
          icon: string;
          featured: string;
          other: string;
        };
        variants: string;
        searchTags: [];
        metaTags: string;
        showcaseVideo: string;
        dynamicPakId: string;
        displayAssetPath: string;
        definitionPath: string;
        path: string;
        added: string;
        shopHistory: [];
      }
    ];
  };
};
