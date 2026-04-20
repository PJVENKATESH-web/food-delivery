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
const resObj = {
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
};
const RestaurantCard = (props) => {
  const staticImageLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={staticImageLink+props?.resData?.info?.cloudinaryImageId}
        alt="restaurant-logo"
      />
      <h3>{props?.resData?.info?.name}</h3>
      <h4>{props?.resData?.info?.cuisines}</h4>
      <h4>{props?.resData?.info?.avgRating}stars</h4>
      <h4>{props?.resData?.info?.sla?.slaString}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard resData={resObj} />
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
