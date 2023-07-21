const { v4: uuidv4 } = require("uuid");

const Watch1 = {
  name: "Breguet 3137 Classique",
  description:
    "Classique wristwatch in 18-carat yellow gold. Self-winding movement with date, power-reserve indicator and phases and age of the moon. Balance spring and lever in silicon. Silvered gold dial, hand-engraved on a rose engine. Sapphire caseback. Water-resistant to 3 bar ( 30 m ). Diameter : 35.50 mm. Also in white gold.",
  mainImage:"https://www.breguet.com/sites/default/files/gardetemps/variante/soldat/3137ba_11_986_face_0.jpg",
  
    images: [
    "https://images.grayandsons.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/5/w524196.jpg?d=20230619152530.jpg",
    "https://images.grayandsons.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/5/w524196_c.jpg?d=20230619152530.jpg",
  ],
  price: 21645,
};
const Watch2 = {
  name: "Seiko Spirit Rising Sun - SCVE003",
  description:
    "The watch which resembles the Japanese flag features a beautiful white linen textured dial and a red sunburst subdial that pops.",
  mainImage:"",
    images: [
    "https://i.redd.it/ewcws8y6u7n91.jpg",
    "https://i.redd.it/7k6j4nzyvy0b1.jpg",
  ],
  price: 1800,
};
const Watch3 = {
  name: "Credor Eichi II",
  description:
    "An elegant expression of Japanese aesthetics. Eichi means wisdom in Japanese. The name reflects the fusion of Seiko Watch Corporation's decades of Japanese watchmaking skills with the highest and most technically advanced Spring Drive movement.",
  mainImage:"https://monochrome-watches.com/wp-content/uploads/2020/11/Seiko-credor-Eichi-II.jpg",
    images: [
    "https://monochrome-watches.com/wp-content/uploads/2020/11/Credor-Eichi-II-Blue-Dial-GBLT997-2.jpg",
    "https://monochrome-watches.com/wp-content/uploads/2020/11/Credor-Eichi-II-Blue-Dial-GBLT997-5.jpg",
  ],
  price: 49782,
};
const Watch4 = {
  name: "Seiko Kosuke Kawamura SRPJ41",
  description:
    "The Seiko 5 Sports Kosuke Kawamura Limited Edition SRPJ41 is a limited edition watch created in collaboration with collage artist Kosuke Kawamura. The watch is 42.5mm in diameter, 13.4mm thick, and has a 46mm lug-to-lug measurement. It has a stainless steel case, a Hardlex crystal, and a screwed caseback. The watch is water-resistant to 100m.",
  mainImage:"https://www.seikowatches.com/us-en/-/media/Images/GlobalEn/Seiko/Home/products/5sports/Productpage/Productpage_kosukekawamura/soldier_kskkwmr0727sdrtyh.jpg?mh=630&mw=1120&hash=0276022ABAB91759DA30F72D07A2220D",
    images: [
    
    "https://www.seikowatches.com/us-en/-/media/Images/GlobalEn/Seiko/Home/products/5sports/Productpage/Productpage_kosukekawamura/beauty_kskkwmr0727sdrtyh.jpg?mh=630&mw=1120&hash=1A9EE227DFC62CA99B99DB0AD57B8DFF",
    "https://www.seikowatches.com/us-en/-/media/Images/GlobalEn/Seiko/Home/products/5sports/Productpage/Productpage_kosukekawamura/caseback_r_kskkwmr0727sdrtyh.jpg?mh=630&mw=1120&hash=A151277EB08FB19087F795EF1082CD4C",
  ],
  price: 440,
};
const Watch5 = {
  name: "Kurano GRAND HAGANE",
  description:
    "The dark amber hue of Grand:Hagane reveals a subtle yet visually stunning urushi design. The unique urushi dial pattern was designed to resemble the rare and distinctive tobiyaki spots commonly seen in the hitatsura style of hamon.",
  mainImage:"https://cdn.shopify.com/s/files/1/0096/0597/2030/files/Kurono__GrandHagane__01_SPF_GrandHagane_2ab83aad-ef08-4fe3-833f-8bf1247dc6d3_1000x.jpg?v=1668153845",
    images: [
    "https://cdn.shopify.com/s/files/1/0096/0597/2030/files/Kurono__GrandHagane__04_SPF_GrandHagane_e94a5fc3-9122-4ee7-ac85-76cfdaa29427_1000x.jpg?v=1668153844",
    "https://cdn.shopify.com/s/files/1/0096/0597/2030/files/Kurono__GrandHagane__03_SPF_GrandHagane_f437ea82-8789-4667-81ab-4d364f15c66f_1000x.jpg?v=1668411489",
  ],
  price: 3171,
};
const Watch6 = {
  name: "Farer Mansfield",
  description:
    "The Farer Mansfield is a watch with a 38.5mm wide case and short, curved lugs. It has a fully polished case that sits well on the wrist. The Mansfield is one of three new designs for 2022 from the cushion case collection. It's finished in fresh metallic tones of tea green.",
  mainImage:"https://preview.redd.it/js1a921x91s91.jpg?width=960&crop=smart&auto=webp&v=enabled&s=4f004f5022aa62eb5d8a3e61c57165f0353e7db1",
    images: [
    "https://preview.redd.it/expvr01x91s91.jpg?width=863&format=pjpg&auto=webp&v=enabled&s=9152f8be45067a8d03278e4cc5e4a09d0ed93338",
    "https://preview.redd.it/rktxl11x91s91.jpg?width=960&crop=smart&auto=webp&v=enabled&s=b58e6c82227ecbd0b5cd5a905268cce3bda77309",
  ],
  price: 995,
};
const Watch7 = {
  name: "Kurono Chronograph-II",
  description:
    "The Kurono Chronograph is a watch with a 38mm column-wheel and a monochromatic art-deco design. It has a 311-part movement that includes a column wheel, vertical clutch, and magic lever winding system. The movement also has a unique three-pointed hammer system that starts, stops, and resets all three wheels simultaneously.",
  mainImage:"https://cdn.shopify.com/s/files/1/0096/0597/2030/files/Kurono__Chronograph-II__01_SPF_Chronograph-II_2219fada-67e1-4db1-b176-12ce3265d8bb_800x.jpg?v=1668414917",
    images: [
    "https://www.acquiremag.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1720/MTc4ODMzOTQ0MTAyMzE1NTE5/kuronochrono2a.webp",
    "https://i.redd.it/7v4g495fpboa1.jpg",
  ],
  price: 4150,
};
const Watch8 = {
  name: "Dornblüth & Sohn 99.1",
  description: "99.1 with a waterblue ceramic dial and a bronze case.",
  mainImage:"https://scontent-sea1-1.cdninstagram.com/v/t39.30808-6/331039891_3505619386380362_8215450418324058378_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=9PWicQpaUcUAX-tRYMN&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzA0MDkxMzkwNTUyMTY5ODY0MA%3D%3D.2-ccb7-5&oh=00_AfDLp3DZy3p9S13_bAKl9lOv96oUjLkeWvBFdpiKgKiSUA&oe=64BC37E3&_nc_sid=b41fef",
  images: [
    "https://scontent-sea1-1.cdninstagram.com/v/t39.30808-6/354599514_3125202111119587_316524631025260552_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=qlO1aHuip_gAX8lsXr6&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzEyNzEzMjAzNDYxODExMjc2Mg%3D%3D.2-ccb7-5&oh=00_AfB7aQggh6zQPGZEhknjKnXs8cWHpB9u3J4MJiHV0m78Vw&oe=64BB85B0&_nc_sid=ee9879",
    "https://scontent-sea1-1.cdninstagram.com/v/t39.30808-6/347422765_3129275770712221_3616221944864703474_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=APs5JAGZlXMAX9nMHKx&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzEzMjIwNTQ0OTAwODA5NTQxOQ%3D%3D.2-ccb7-5&oh=00_AfD6-BTnn0EfGfqL88Qt_9Cptgu28QUBVXh_kjICMV-BYA&oe=64BD01A5&_nc_sid=ee9879",
  ],
  price: 10000,
};
const Watch9 = {
  name: "Omega Chronoscope",
  description: "Omega Chronoscope with Bronze and Gold strap",
  mainImage:"https://hodinkee.imgix.net/shop/images/08e31258-dbc1-4878-a59c-e445b91b4a47/329.92.43.51.10.001_SQ_ISA.jpg?auto=format&ixlib=react-9.7.0&w=1446",
  images: [
    "https://shop.hodinkee.com/cdn/shop/files/Omega_Chronoscope-Bronze-Gold_OME-V9B-DUE_Lifestyle_129_SQ_JG_1600x1600.jpg?v=1689176078",
    "https://shop.hodinkee.com/cdn/shop/files/Omega_Chronoscope-Bronze-Gold_OME-V9B-DUE_Back_060_Clipped_SQ_JG_1600x1600.jpg?v=1689176078",
  ],
  price: 16200,
};
const Watch10 = {
  name: "TRILOBE Les Matinaux Sunray",
  description: "Les Matinaux 40mm Sunray Silver Dial In Steel",
  mainImage:"https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/files/Trilobe_Les-Matinaux-Sunray-Silver-Steel_Front_030_Clipped_SQ_JG.jpg?v=1687985942&auto=format&ixlib=react-9.7.0&w=3038",
  images: [
    "https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/files/Trilobe_Les-Matinaux-Sunray-Silver-Steel_Lifestyle_055_SQ_AP.jpg?v=1687985942&auto=format&ixlib=react-9.7.0&w=3038",
    "https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/files/Trilobe_Les-Matinaux-Sunray-Silver-Steel_Side_060_Clipped_SQ_JG.jpg?v=1687985942&auto=format&ixlib=react-9.7.0&w=3038",
  ],
  price: 10600,
};
const Watch11 = {
  name: "Blancpain Villeret Quantième Complet Red Gold",
  description: `The Blancpain QUANTIÈME COMPLET, or Complete Calendar, or just QC, is what many also call a "triple calendar moonphase," one of the classic complications in all of horology. A QC features the time, the day of the week, the date, the month, and in this piece, the phases of the moon.`,
  mainImage:"https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/6654-3642-55B_front.jpg?v=1669659999&auto=format&ixlib=react-9.7.0&w=3038",
  images: [
    "https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/Blancpain_Quantien-Complet_6654-3642-55B_Lifestyle_019.jpg?v=1669659999&auto=format&ixlib=react-9.7.0&w=3038",
    "https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/Blancpain_Quantien-Complet_6654-3642-55B_Wrist_042.jpg?v=1669659999&auto=format&ixlib=react-9.7.0&w=3038",
  ],
  price: 26900,
};
const Watch12 = {
  name: "Grand Seiko Soko 'Frost' SBGA471",
  description: `This special edition for the U.S. market commemorates the micro-season in which the first frost (Soko) hits during Autumn. Specifically, this vertically-patterned dial looks to the bamboo forests of Arashiyama, or Storm Mountain, in Kyoto, Japan during Soko. Complimenting the dial's icy color are the blue hands used for seconds and on the "fan" power reserve gauge, which is beautifully engraved and inset with a darker blue treatment.`,
  mainImage:"https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/SBGA471G_1.jpg?v=1645543607&auto=format&ixlib=react-9.7.0&w=3038",
  images: [
    "https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/120921_GrandSeiko_4_macro_1.jpg?v=1645543607&auto=format&ixlib=react-9.7.0&w=3038",
    "https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/120921_GrandSeiko_2_1.jpg?v=1645543607&auto=format&ixlib=react-9.7.0&w=3038",
  ],
  price: 6000,
};
const Watch13 = {
  name: "Breitling Heritage Premier B09 Chronograph 40 Silver Dial In 18k Red Gold",
  description:
    "In solid 18k red gold and a subtle cream dial, this Breitling has a relaxed aesthetic that can carry you from summer wedding season to meetings on Madison Avenue.",
  mainImage:"https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/Breitling4-A_1a994524-7d72-4faa-9855-9a8f0c0238d0.jpg?v=1619198658&auto=format&ixlib=react-9.7.0&w=3038",
    images: [
    "https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/Breitling4-B_5e9189e5-ff38-490f-9bf5-b143e8cf04ff.jpg?v=1619198658&auto=format&ixlib=react-9.7.0&w=3038",
  ],
  price: 20200,
};
module.exports = {
  Watch1,
  Watch2,
  Watch3,
  Watch4,
  Watch5,
  Watch6,
  Watch7,
  Watch8,
  Watch9,
  Watch10,
  Watch11,
  Watch12,
  Watch13,
};
