/*
{
    img: '',
    thumb: '',
    title: '',
    cols: 1
  },
*/
const tileData = [
  {
    img: 'https://live.staticflickr.com/65535/48961070501_0c61d5e5da_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48961070501_b22cd66559_w.jpg',
    title: 'Scarlet Granite',
    cols: 2
  },
  {
    img: 'https://live.staticflickr.com/65535/48961070471_28cdf8a75c_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48961070471_6aa67c7603_w.jpg',
    title: 'Half Dome Moonrise',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48960523408_8ab857d121_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48960523408_72b0d5efdc_w.jpg',
    title: 'Tightrope Training',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48961070611_7e50d30c80_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48961070611_a1abf2bded_w.jpg',
    title: 'Low Angle Tree',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48960523648_91722b2e22_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48960523648_0b51089f3a_w.jpg',
    title: 'Vernal Falls',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48961070831_6b5904f433_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48961070831_b90dcd05a7_w.jpg',
    title: 'Woodpecker',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48960492563_dab05559c2_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48960492563_0d0e5da468_w.jpg',
    title: 'Bonsai Rock',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48960492623_554e37e90b_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48960492623_5f9c14e320_w.jpg',
    title: 'Pepper Goes For a Swim',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48960459143_5168f97b93_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48960459143_560ce0077c_w.jpg',
    title: 'Venice Beach Lifeguard Tower',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48961192532_1281b06988_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48961192532_57911219bd_w.jpg',
    title: 'Venice Beach Skate Park Shadows',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48961039916_00c87f9502_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48961039916_e0b6ddd639_w.jpg',
    title: 'Wayy Milky at Tahoe',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48961192642_157c469634_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48961192642_3427e48bae_w.jpg',
    title: 'Laguna Beach Rock Splash',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48961007231_26f1cd0160_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48961007231_034a467088_w.jpg',
    title: 'Venice Beach Surfers',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48960459268_a179cbcf7f_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48960459268_a44c17f5c3_w.jpg',
    title: 'LA Night Skyline',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48959931261_3121cdef37_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48959931261_9d9eeda6b7_w.jpg',
    title: 'Silhoutte Bikers and Temple',
    cols: 2
  },
  {
    img: 'https://live.staticflickr.com/65535/48959381043_a93071793a_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48959381043_6c0059690f_w.jpg',
    title: 'Ivy Sunset Riding',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48960119042_ef0bca25c4_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48960119042_172636b525_w.jpg',
    title: 'Lily on White Wednesday',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48959381108_1e9bde06df_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48959381108_5dbe4d4ab0_w.jpg',
    title: 'Temple Sunset',
    cols: 2
  },
  {
    img: 'https://live.staticflickr.com/65535/48959931576_946f3bd4a6_w.jpg',
    thumb: 'https://live.staticflickr.com/65535/48959931576_946f3bd4a6_w.jpg',
    title: 'Awful\'s Gas Station',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48960119142_29b4fda599_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48960119142_c8e85ccd5e_w.jpg',
    title: 'Lantern Lighters',
    cols: 2
  },
  {
    img: 'https://live.staticflickr.com/65535/48960119297_e57e43ffb5_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48960119297_2d8f64a459_w.jpg',
    title: 'Stairway to Nowhere',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48959381413_2c27e1d2b0_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48959381413_4c4e27beb1_w.jpg',
    title: 'Zen Head',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48960119427_d126ff8777_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48960119427_6d53da2528_w.jpg',
    title: 'BRC Aerial View',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48959380628_812ce9ac4b_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48959380628_a3903338a9_w.jpg',
    title: 'Pagoda Fire',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48920271946_c4de93344d_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48920271946_af2b1aeb16_w.jpg',
    title: 'Runner Silhouettes',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48959380958_81c888c7fb_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48959380958_38f3283e94_w.jpg',
    title: 'Golden Elephant',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48959380908_9124fe462e_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48959380908_00eb017411_w.jpg',
    title: 'Angelic Gaze',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48959380833_3702bfa362_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48959380833_5c7ded0ffe_w.jpg',
    title: 'EVOL',
    cols: 2
  },
  {
    img: 'https://live.staticflickr.com/65535/48959380713_67ab2381b8_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48959380713_db51bc244c_w.jpg',
    title: 'Man Fireworks Blue',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48959930876_00f18e2bae_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48959930876_17cd9256b6_w.jpg',
    title: 'Man Fireworks Red',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48959937746_4cb525da9d_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48959937746_233ee38c6c_w.jpg',
    title: 'Temple Silhoutte',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48920271631_5423886c56_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48920271631_4a66857810_w.jpg',
    title: 'Twin Peaks Sunrise',
    cols: 2
  },
  {
    img: 'https://live.staticflickr.com/65535/48920271916_5ac25ac08b_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48920271916_f07cd6af4d_w.jpg',
    title: 'Blue Harbor Portrait',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48920477312_c116bb4606_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48920477312_0805e0daf5_w.jpg',
    title: 'Crissy Field Sunrise',
    cols: 2
  },
  {
    img: 'https://live.staticflickr.com/65535/48919737133_30d569d561_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48919737133_30d569d561_o.jpg',
    title: 'Twin Peaks Sunrise Portrait',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48920477442_9a33eefd7d_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48920477442_75c0bef927_w.jpg',
    title: 'The Killer (1989)',
    cols: 2
  },
  {
    img: 'https://live.staticflickr.com/65535/48919737288_9cf0b4eda3_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48919737288_2860fb7174_w.jpg',
    title: 'Zion River',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48920272321_34dfef7489_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48920272321_9ccd03f53c_w.jpg',
    title: 'S4 Zion',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48919737343_bba844d812_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48919737343_f42a9dec64_w.jpg',
    title: 'Zion Peak Sunset',
    cols: 2
  },
  {
    img: 'https://live.staticflickr.com/65535/48920478077_aab12f170c_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48920478077_35e850ae0a_w.jpg',
    title: 'Blue Dunes',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48920272811_8452a6db45_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48920272811_aefeb6eee5_w.jpg',
    title: 'Windswept Sand',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48920272956_ccedbe3efa_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48920272956_978d66fb89_w.jpg',
    title: 'Sand Ridge Glow',
    cols: 1
  },
  {
    img: 'https://live.staticflickr.com/65535/48919738163_535782b80a_o.jpg',
    thumb: 'https://live.staticflickr.com/65535/48919738163_5d13bf9733_w.jpg',
    title: 'Sand Dune Moonrise',
    cols: 2
  }
];

export default tileData;