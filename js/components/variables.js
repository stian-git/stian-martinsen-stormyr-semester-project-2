// Strapi Base URL:
export const baseUrl = "https://semester-project-2-2022.herokuapp.com/";

// Rebrickable:
export const rebrickableApiKey = "ca2870058d849c35e623b673de5478db";
export const rebrickableBaseUrl = "https://rebrickable.com/api/v3/lego/sets/";
export const rebrickableSetUrl = "https://rebrickable.com/sets/";

// export const

// Editable variables:
export const userAdminGroupId = 3;

// Other variables (editing is not recommended):
export const storeUserIsAdmin = "storeUserIsAdmin";
export const storeUserName = "storeUserName";
export const storeUserIsBlocked = "storeUserIsBlocked";
export const storeUserEmail = "storeUserEmail";
export const storeUserIsLoggedIn = "storeUserIsLoggedIn";
export const storeUserToken = "storeUserToken";
export const storeSearchResult = "storeSearchResult";
export const storeAllProductsArray = "storeAllProductsArray";
export const storeCartContent = "storeCartContent";

export const defaultAuthenticatedUserGroupName = "Authenticated user";
export const noCorsUrl = "https://noroffcors.herokuapp.com/";
export const legoProductBaseUrl = "https://www.lego.com/en-gb/product/";

export const productForm = document.querySelector("form.productform");
export const prodNumberField = document.querySelector(".productform #productnumber");
export const prodTitleField = document.querySelector(".productform #producttitle");
export const prodDescField = document.querySelector(".productform #productdescription");
export const prodPriceField = document.querySelector(".productform #productprice");
export const prodStockField = document.querySelector(".productform #productstock");
export const prodIsFeaturedField = document.querySelector(".productform #flexSwitchFeaturedProduct");
export const prodIsStoppedField = document.querySelector(".productform #flexSwitchProductionStopped");
export const prodIdField = document.querySelector(".productform #productid");
export const saveProductButton = document.querySelector("main .saveproductbutton");
export const continueButton = document.querySelector("main .continuebutton");
export const header = document.querySelector("main h1");
export const imageFormContainer = document.querySelector(".editimages");
export const imagesToAddButton = document.querySelector("#imagesToAdd");
export const apiFormDataRef = "api::product.product";
export const apiFormDataField = "image";
export const imageEditContainer = document.querySelector(".editimages tbody");
export const imageEditContainerTable = document.querySelector(".editimages table");
export const deleteProductButton = document.querySelector(".deleteproductbutton");
export const searchFilterField = document.querySelector("input.textfilter");

export const placeHolderImage = "https://res.cloudinary.com/devokuww7/image/upload/v1664034347/brickastle_placeholder_image_7c8fd39a31.png";
export const placeHolderThumb = "https://res.cloudinary.com/devokuww7/image/upload/v1664034347/thumbnail_brickastle_placeholder_image_7c8fd39a31.png";

export const modelFilter = document.querySelector("th[data-sortby=productnumber]");
export const titleFilter = document.querySelector("th[data-sortby=title]");
export const priceFilter = document.querySelector("th[data-sortby=price]");
export const carouselContainer = document.querySelector("#imagecarousel");
export const carouselImageContainer = document.querySelector("#imagecarousel .carousel-inner");

export const footerContainer = document.querySelector("footer");
export const currency = "EUR";
export const priceContainer = document.querySelector(".price");

export const loginButton = document.querySelector(".loginbutton");
export const logoutButton = document.querySelector(".logoutbutton");
export const searchButton = document.querySelector(".searchform-button");
export const searchField = document.querySelector(".searchform-field");
export const productTitle = document.querySelector("h1.producttitle");
export const productModel = document.querySelector(".modelnumber");
export const cartButton = document.querySelector("button.togglecart");
export const loginMenu = document.querySelector("nav .login-menu");
export const loginMenuHeader = document.querySelector("nav .login-menu .dropdown-toggle");
export const loginLink = document.querySelector(".login-link");
export const loginStatusMessage = document.querySelector(".modal-error");
export const loginCancelButton = document.querySelector(".logincancel");
export const loginForm = document.querySelector("#loginModal .modal-body form");
export const usernameField = document.querySelector("#loginModal #username");
export const passwordField = document.querySelector("#loginModal #password");

//export const adminFeaturesSectionOnProductsPage = document.querySelectorAll("#productlist .card-footer");
export const cartNavItem = document.querySelector("ul.navbar-nav").children[2].firstElementChild;
export const emptyCartButton = document.querySelector("button.emptycart");

export const modalCarouselIndicatorContainer = document.querySelector("#modalimagecarousel .carousel-indicators");
export const modalCarouselImageContainer = document.querySelector("#modalimagecarousel .carousel-inner");
export const carouselIndicatorContainer = document.querySelector("#imagecarousel .carousel-indicators");

export const totalPriceContainer = document.querySelector(".cartsummary__container-price");
export const minifigsContainer = document.querySelector("#minifigures-tab-pane .card-group");

export const detailsTab = document.querySelector("#details-tab-pane");
export const linkTab = document.querySelector("#links-tab-pane");

export const cartContainer = document.querySelector("table.cart tbody");
export const cartTable = document.querySelector("table.cart");
export const cartsummary = document.querySelector(".cartsummary");
export const mainElement = document.querySelector("main");

export const spinnerModalBackButton = document.querySelector("#spinnerModal button.spinnercancel");
export const spinnerModalMessage = document.querySelector("#spinnerModal .spinnermessage");
export const spinnerModalTriggerButton = document.querySelector("button.spinnermodaltrigger");
export const spinnerModalHeader = document.querySelector("#spinnerModal .modal-title");

export const statusContainer = document.querySelector(".statuscontainer");
export const statusMessage = document.querySelector(".statuscontainer-message");

export const productlist = document.querySelector("#productlist");

//export const adminMenuItems = document.querySelectorAll(".navbar .adminitem mainmenu__adminmenu-link");
export const adminMenuItems = document.querySelectorAll(".navbar .mainmenu__adminmenu-link");

export const editProductButton = document.querySelector(".topcontainer__buysection-editbutton");
export const editProductButtonLink = document.querySelector(".topcontainer__buysection-editbuttonlink");

export const charsToIgnoreInNumbers = ["-", ",", "e", "E", "."];
export const minLengthProdNumber = 3;
export const minLengthProdTitle = 2;

export const prodNumberRequirementLabel = document.querySelector(".productnumber-requirement");
export const prodTitleRequirementLabel = document.querySelector(".producttitle-requirement");
export const prodPriceRequirementLabel = document.querySelector(".productprice-requirement");
export const prodStockRequirementLabel = document.querySelector(".productstock-requirement");
