export const filterData = [
    { name: "Fast food", image: require("../assets/image/Fast_food.jpg"), id: "0" },
    { name: "Burgers", image: require("../assets/image/Burgers.jpg"), id: "1" },
    { name: "Salads", image: require("../assets/image/Salads.png"), id: "2" },
    { name: "Hotdog", image: require("../assets/image/Hotdog.png"), id: "3" },
    { name: "Chinese", image: require("../assets/image/Chinese.png"), id: "4" },
    { name: "Mexican", image: require("../assets/image/Mexican.png"), id: "5" },
    { name: "Sea food", image: require("../assets/image/Sea_food.png"), id: "6" },
];

export const filterData2 = [
    { name: "Fast food", image: 'https://png.pngtree.com/element_our/sm/20180515/sm_f7b6c861bd80a6dfd15d04c4919ff73e.jpg', id: "0" },
    { name: "Burgers", image: 'https://e7.pngegg.com/pngimages/125/779/png-clipart-eatsa-fast-food-restaurant-hamburger-choripan-leaf-vegetable-food.png', id: "1" },
    { name: "Salads", image: 'https://toppng.com/uploads/preview/ratos-de-comida-png-food-11563001963setiutefpy.png', id: "2" },
    { name: "Hotdog", image: 'https://www.pngall.com/wp-content/uploads/5/Serving-Food-PNG-Image-HD.png', id: "3" },
    { name: "Chinese", image: 'https://www.freeiconspng.com/thumbs/food-png/food-salad-21.png', id: "4" },
    { name: "Mexican", image: 'https://cdn.imgbin.com/12/10/13/imgbin-panningen-wayos-place-restaurant-hotel-greek-cuisine-hotel-Bk7YcK5s4i0d14PrZjW1PLFaE.jpg', id: "6" },
    { name: "Sea food", image: 'https://www.vhv.rs/dpng/d/587-5876751_plate-of-food-png-transparent-png.png', id: "6" },
    { name: "Chinese Food", image: 'https://toppng.com/uploads/preview/find-restaurant-restaurant-food-plate-image-11562953995qadqvj3uzl.png', id: "7" },
    { name: "Mexican pie", image: 'https://e7.pngegg.com/pngimages/329/271/png-clipart-health-food-healthy-diet-meal-delivery-service-health-leaf-vegetable-food-thumbnail.png', id: "8" },
    { name: "Ocean dish", image: 'https://toppng.com/uploads/preview/food-plate-11528332072nfzlitj3l8.png', id: "9" },
]

export const ResTauRatsData = [
    {
        restaurantName: "Mc Donalds", farAway: "21.2",
        businessAddress: "22 Bessie street, Cape Town", images: 'https://thietbibuffet.vn/wp-content/uploads/2020/01/buffet-hai-san-533x400.jpg',
        averageReview: 4.9, numberOfReview: 272, coordinates: { lat: -26.1888612, lng: 28.246325 }, discount: 10, deliveryTime: 15,
        collectTime: 5, foodType: "Burgers, Wraps,Milkshakes...",
        productData: [
            { name: "Hand cut chips", price: 29.30, image: "https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg" },
            { name: "Big Mac", price: 50.80, image: "https://trungdan.com/wp-content/uploads/2017/10/3-mon-an-ngon-nhat-the-gioi-2.jpg" },
            { name: "Chicken", price: 70, image: "https://media-cdn.tripadvisor.com/media/photo-s/11/5e/de/58/photo0jpg.jpg" },
        ],
        id: 0
    },
    {
        restaurantName: "KFC", farAway: "12.7", businessAddress: "22 Bessie street, Cape Town",
        images: 'https://assets.grab.com/wp-content/uploads/sites/11/2019/11/19142939/samlacareview_72488619_745515349298258_676929066594289512_n-e1574145126441.jpg',
        averageReview: 4.3, numberOfReview: 306, coordinates: { lat: -26.1891648, lng: 28.2441808 },
        discount: 20, deliveryTime: 30, collectTime: 10, foodType: "chicken, chicken wings...",
        productData: [
            { name: "Hand cut chips", price: 29.30, image: "https://images.foody.vn/res/g1/1488/prof/s640x400/image-3b2daeee-201123110753.jpeg" },
            { name: "Big Mac", price: 50.80, image: "https://timviec365.vn/pictures/images/KFC-la-gi-1-min.jpg" },
        ],
        id: 1
    },
    {
        restaurantName: "Steers", farAway: "5", businessAddress: "17 Olivia Rd, Johannesburg",
        images: 'https://congthucmonngon.com/wp-content/uploads/2021/09/tuyet-chieu-chup-anh-do-an-ngon-mat-dep-lung-linh-nhu-food-blogger-thuc-thu-chi-bang-di.jpg',
        coordinates: { lat: -26.1886781, lng: 28.244879 }, averageReview: 4.9, numberOfReview: 1272,
        discount: 12, deliveryTime: 25, collectTime: 15, foodType: "flame grilled beef Burgers",
        productData: [
            { name: "Hand cut chips", price: 29.30, image: "https://images.foody.vn/res/g1/1488/prof/s640x400/image-3b2daeee-201123110753.jpeg" },
            { name: "Chicken", price: 70, image: "https://media-cdn.tripadvisor.com/media/photo-s/11/5e/de/58/photo0jpg.jpg" },
        ],
        id: 2
    },
    {
        restaurantName: "Roman Pizza", farAway: "7", businessAddress: "15 Atlas Rd, Kempton Park",
        images: 'https://wecheckin.vn/wp-content/uploads/2019/11/quan-com-ngon-binh-dan-tai-ha-noi-wecheckin-9.jpg',
        averageReview: 4.3, numberOfReview: 700, coordinates: { lat: -26.1845336, lng: 28.2481691 },
        discount: null, deliveryTime: 20, collectTime: 10, foodtype: "Chicken pizza, vegetarian pizza...",
        productData: [
            { name: "Big Mac", price: 50.80, image: "https://images.foody.vn/res/g1/1488/prof/s640x400/image-3b2daeee-201123110753.jpeg" },
            { name: "Chicken Burgers", price: 70, image: "https://timviec365.vn/pictures/images/KFC-la-gi-1-min.jpg" }
        ],
        id: 3
    }
]
export const constproductData = [
    {
        name: "hand cut chips", price: 29.30, image: "",
        details: "Two 100% fresh beef burger pattier that are hot, deliciously", id: 0
    },
    {
        name: "Big Mac", price: 50.80, image: "",
        details: "Mcfeast Features tow 100% fresh beef burger pattier that are hot", id: 1
    },
    {
        name: "Chicken Burger", price: 70, image: "",
        details: "", id: 2
    },
    {
        name: "hand cut chips", price: 29.30, image: "",
        details: "Two 100% fresh beef burger pattier that are hot, deliciously", id: 3
    },
    {
        name: "Big Mac", price: 50.80, image: "",
        details: "Mcfeast Features tow 100% fresh beef burger pattier that are hot", id: 4
    },
    {
        name: "Chicken Burger", price: 70, image: "",
        details: "", id: 5
    },
]

export const menuData = [
    { title: "BEEF", special: false, key: 0 },
    { title: "CHICKEN", special: false, key: 1 },
    { title: "VEGGIE BURGER", special: false, key: 2 },
    { title: "FRIES & CORN", special: false, key: 3 },
    { title: "SALADS", special: false, key: 4 },
    { title: "HAPPY MEALS", special: false, key: 5 },
    { title: "SAHRE BOX", special: false, key: 6 },
    { title: "MILKSHAKES", special: false, key: 7 },
    { title: "COLD DRINKS", special: false, key: 8 },
    { title: "DESSERTS", special: false, key: 9 },
    { title: "HOT DRINKS", special: false, key: 10 },
]

export const specialData = [
    { title: "LIMITED OFFER", key: 0 },
    { title: "GO CHILLI", key: 1 },
    { title: "GO CHEESE", key: 2 },
    { title: "MCCHICKEN DELUXE PROMO", key: 3 },
]

export const menu = [
    { key: 1, title: 'BEEF' },
    { key: 2, title: 'CHICKEN' },
    { key: 3, title: 'VEGGIE BURGER' },
    { key: 4, title: 'SHARE BOX' },
    { key: 5, title: 'HAPPY MEALS' },
    { key: 6, title: 'FRIES' },
    { key: 7, title: 'SIDES' },
    { key: 8, title: 'MILKSHAKES' },
]

export const menuDetailedData = [
        {
            meal:""
        }
]