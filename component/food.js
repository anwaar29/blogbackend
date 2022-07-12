const food=(req,res)=>{
    res.send([{
    "Title": " Baby food for your six-month-old: Things to keep in mind ",
    "CategoryName": "FOOD",
    "PublishedDate": "  January  / 15    2020",
    "ImageAsset": " https://images.indianexpress.com/2021/08/GettyImages-baby-food-toddlers-1200.jpg?resize=450,250",
    "BlogContent": " A six-month-old baby is primarily breastfed or formula-fed. However, solid food can be introduced for breakfast or lunch",
  },
  {
    "Title": "Christmas 2019 recipes: Make plum pudding and mince pie for your child ",
    "CategoryName": "FOOD",
    "PublishedDate": "  January  / 15   2019",
    "ImageAsset": "https://images.indianexpress.com/2019/12/Traditional-Plum-Pudding-at-Novotel-ibis-Bengaluru-Outer-Ring-Road.jpg?resize=450,250 ",
    "BlogContent": " Christmas 2019: No festival is complete without gorging on delicious treats. Make these dishes at home and enjoy with your family",
  },
  {
    "Title": "   Try these yummy wraps!",
    "CategoryName": "FOOD",
    "PublishedDate": " Januaury 13 2021",
    "ImageAsset": " https://images.indianexpress.com/2018/07/wrap1.jpg?resize=450,338",
    "BlogContent": " Multigrain whole wheat contains fibres for digestion, lowers cholesterol, cancer risk and blood pressure, regulates blood sugar, redistributes fat and reduces asthma risk. ",
  }
    ])
 
 }
 module.exports.food=food;