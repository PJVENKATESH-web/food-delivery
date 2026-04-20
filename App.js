import React from "react";
import ReactDOM from "react-dom/client";

/*
 *AppLayout
 *-Header
 *--Logo
 *--Nav Items
 *-Body
 *--Search
 *--Restaurant Container
 *---RestaurantCard
 *----Image|Name of Res|Star Rating|Cuisines|DeliveryTime
 *-Footer
 *--Copywright|Links|address|Contact
 *
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://logowik.com/content/uploads/images/foody2917.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const resList = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "373558",
      name: "Chaitanya Food Court - Tiffins",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/11/1327b8ed-149d-4c25-b9e7-ca2ecf88bb4f_373558.jpg",
      locality: "Kphb Colony",
      areaName: "Kukatpally",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Snacks", "Sweets"],
      avgRating: 4.4,
      veg: true,
      parentId: "453215",
      avgRatingString: "4.4",
      totalRatingsString: "23K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-04-20 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-692d1d62-83d2-4f44-b3c3-bb37843bcc9e",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/chaitanya-food-court-tiffins-kphb-colony-kukatpally-rest373558",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "623059",
      name: "Varalakshmi Tiffins",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/c75ff48c-b373-4733-8126-e3180cbb0fa0_623059.jpg",
      locality: "Aditya Nagar",
      areaName: "Nizampet & Pragathi Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "6482",
      avgRatingString: "4.5",
      totalRatingsString: "19K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-04-20 11:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId:
              "brand_cards/Badges%202026/124_Best%20in%20Breakfast2026.png",
            description: "Best in Breakfast",
          },
          {
            imageId:
              "brand_cards/Badges%202026/32_Best%20in%20South%20Indian2026.png",
            description: "Best in South Indian",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Best in Breakfast",
                  imageId:
                    "brand_cards/Badges%202026/124_Best%20in%20Breakfast2026.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Best in South Indian",
                  imageId:
                    "brand_cards/Badges%202026/32_Best%20in%20South%20Indian2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-692d1d62-83d2-4f44-b3c3-bb37843bcc9e",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/varalakshmi-tiffins-aditya-nagar-nizampet-and-pragathi-nagar-rest623059",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "91819",
      name: "Shree Raghavendra",
      cloudinaryImageId: "wm0hmcikqc5cpdw0acub",
      locality: "Balaji Park Town",
      areaName: "Nizampet",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      parentId: "19739",
      avgRatingString: "4.5",
      totalRatingsString: "42K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-04-20 16:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-692d1d62-83d2-4f44-b3c3-bb37843bcc9e",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/shree-raghavendra-balaji-park-town-nizampet-rest91819",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "758541",
      name: "Times Tiffins",
      cloudinaryImageId: "b24fd6a1a856f7c7eb01169ab5c1fd1a",
      locality: "Miyapur",
      areaName: "Miyapur",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Meal", "Breakfast", "Home Food"],
      avgRating: 4.4,
      parentId: "19897",
      avgRatingString: "4.4",
      totalRatingsString: "5.4K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 6.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-04-20 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "655",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-692d1d62-83d2-4f44-b3c3-bb37843bcc9e",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/times-tiffins-miyapur-rest758541",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "997663",
      name: "Istas cafe-pure ghee tiffins",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/25/3ebd5a0d-c5d5-41b0-8da5-dd21d0225564_997663.jpg",
      locality: "Kukatpally",
      areaName: "Kukatpally",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian"],
      avgRating: 4.4,
      veg: true,
      parentId: "583688",
      avgRatingString: "4.4",
      totalRatingsString: "1.4K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-04-20 12:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "35% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-692d1d62-83d2-4f44-b3c3-bb37843bcc9e",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/istas-cafe-pure-ghee-tiffins-kukatpally-rest997663",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1064594",
      name: "Cafe Amrutham",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/30/396ed8ab-0dda-4282-b598-60f20ba3d2f0_1064594.jpg",
      locality: "Sevalal Nagar",
      areaName: "Sevalal Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian"],
      avgRating: 4.2,
      veg: true,
      parentId: "617940",
      avgRatingString: "4.2",
      totalRatingsString: "1.2K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-04-20 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹95",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.6",
          ratingCount: "196",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-692d1d62-83d2-4f44-b3c3-bb37843bcc9e",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/cafe-amrutham-sevalal-nagar-rest1064594",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "702152",
      name: "Chittoor Naidu Veg and Non-veg Tiffins",
      cloudinaryImageId: "f1bc9ddf53de574cdc35ab2f717df234",
      locality: "Moosapet",
      areaName: "Kukatpally",
      costForTwo: "₹400 for two",
      cuisines: ["South Indian"],
      avgRating: 4.2,
      parentId: "419474",
      avgRatingString: "4.2",
      totalRatingsString: "637",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.2,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-04-20 11:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-692d1d62-83d2-4f44-b3c3-bb37843bcc9e",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/chittoor-naidu-veg-and-non-veg-tiffins-moosapet-kukatpally-rest702152",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "938497",
      name: "Hotel Babu Biryani Point",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/8/7768f217-5285-4aca-9506-7bedf3470289_938497.jpg",
      locality: "Kukatpally",
      areaName: "Kukatpally",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "South Indian"],
      avgRating: 3.1,
      parentId: "9568",
      avgRatingString: "3.1",
      totalRatingsString: "67",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-04-20 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹60 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-692d1d62-83d2-4f44-b3c3-bb37843bcc9e",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/hotel-babu-biryani-point-kukatpally-rest938497",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];
const RestaurantCard = (props) => {
  const { resData } = props;
  // const staticImageLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData?.info?.cloudinaryImageId
        }
        alt="restaurant-logo"
      />
      <h4>{resData?.info?.name}</h4>
      <h5>{resData?.info?.cuisines.join()}</h5>
      <h5>{resData?.info?.avgRating}stars</h5>
      <h5>{resData?.info?.costForTwo}</h5>
      <h5>{resData?.info?.sla?.deliveryTime} minutes</h5>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard resData={resList[0]} />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
