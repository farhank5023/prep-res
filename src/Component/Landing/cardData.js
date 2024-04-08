import {
  collection,
  getDocs,
  query,
  getFirestore,
  orderBy,
} from "firebase/firestore";

import { app } from "../firebase";

const db = getFirestore(app);
let cardData = [[], [], [], [], [], [],[]];

async function fetchBookCollection() {
  var data1 = [];
  var data2 = [];
  var data3 = [];
  const q = query(collection(db, "books"), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data()["trending"] === "true") {
      data1.push({
        title: doc.data()["title"],
        description: doc.data()["description"],
        category: doc.data()["category"],
        img: doc.data()["image"],
        url:
          "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
        link: doc.data()["url"],
        view: doc.data()["view"],
        trending: doc.data()["trending"],
        recommended: doc.data()["recommended"],
        author: doc.data()["author"],
        source: doc.data()["source"],
        buyAvailable: doc.data()["buyAvailable"],
        buyLink: doc.data()["buyLink"],
      });
    } else if (doc.data()["recommended"] === "true") {
      data2.push({
        title: doc.data()["title"],
        description: doc.data()["description"],
        category: doc.data()["category"],
        img: doc.data()["image"],
        url:
          "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
        link: doc.data()["url"],
        view: doc.data()["view"],
        trending: doc.data()["trending"],
        recommended: doc.data()["recommended"],
        author: doc.data()["author"],
        source: doc.data()["source"],
        buyAvailable: doc.data()["buyAvailable"],
        buyLink: doc.data()["buyLink"],
      });
    } else {
      data3.push({
        title: doc.data()["title"],
        description: doc.data()["description"],
        category: doc.data()["category"],
        img: doc.data()["image"],
        url:
          "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
        link: doc.data()["url"],
        view: doc.data()["view"],
        trending: doc.data()["trending"],
        recommended: doc.data()["recommended"],
        author: doc.data()["author"],
        source: doc.data()["source"],
        buyAvailable: doc.data()["buyAvailable"],
        buyLink: doc.data()["buyLink"],
      });
    }
  });
  cardData[0].push(data1.concat(data2).concat(data3));
}

async function fetchRoadmapCollection() {
  var data4 = [];
  var data5 = [];
  var data6 = [];
  const q = query(collection(db, "roadmaps"), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data()["subcategory"] === "Skill-Based") {
      if (doc.data()["trending"] === "true") {
        data4.push({
          title: doc.data()["title"],
          description: doc.data()["description"],
          category: doc.data()["category"],
          img: doc.data()["image"],
          subcategory: doc.data()["subcategory"],
          url:
            "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
          link: doc.data()["url"],
          view: doc.data()["view"],
          trending: doc.data()["trending"],
          recommended: doc.data()["recommended"],
          author: doc.data()["author"],
          source: doc.data()["source"],
          buyAvailable: doc.data()["buyAvailable"],
          buyLink: doc.data()["buyLink"],
        });
      } else if (doc.data()["recommended"] === "true") {
        data5.push({
          title: doc.data()["title"],
          description: doc.data()["description"],
          category: doc.data()["category"],
          img: doc.data()["image"],
          subcategory: doc.data()["subcategory"],
          url:
            "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
          link: doc.data()["url"],
          view: doc.data()["view"],
          trending: doc.data()["trending"],
          recommended: doc.data()["recommended"],
          author: doc.data()["author"],
          source: doc.data()["source"],
          buyAvailable: doc.data()["buyAvailable"],
          buyLink: doc.data()["buyLink"],
        });
      } else {
        data6.push({
          title: doc.data()["title"],
          description: doc.data()["description"],
          category: doc.data()["category"],
          subcategory: doc.data()["subcategory"],
          img: doc.data()["image"],
          url:
            "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
          link: doc.data()["url"],
          view: doc.data()["view"],
          trending: doc.data()["trending"],
          recommended: doc.data()["recommended"],
          author: doc.data()["author"],
          source: doc.data()["source"],
          buyAvailable: doc.data()["buyAvailable"],
          buyLink: doc.data()["buyLink"],
        });
      }
    }
  });
  cardData[1].push(data4.concat(data5).concat(data6));
}

async function fetchRoadmapCollection2() {
  var data16 = [];
  var data17 = [];
  var data18 = [];
  const q = query(collection(db, "roadmaps"), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data()["subcategory"] === "Role-Based") {
      if (doc.data()["trending"] === "true") {
        data16.push({
          title: doc.data()["title"],
          description: doc.data()["description"],
          category: doc.data()["category"],
          img: doc.data()["image"],
          subcategory: doc.data()["subcategory"],
          url:
            "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
          link: doc.data()["url"],
          view: doc.data()["view"],
          trending: doc.data()["trending"],
          recommended: doc.data()["recommended"],
          author: doc.data()["author"],
          source: doc.data()["source"],
          buyAvailable: doc.data()["buyAvailable"],
          buyLink: doc.data()["buyLink"],
        });
      } else if (doc.data()["recommended"] === "true") {
        data17.push({
          title: doc.data()["title"],
          description: doc.data()["description"],
          category: doc.data()["category"],
          img: doc.data()["image"],
          subcategory: doc.data()["subcategory"],
          url:
            "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
          link: doc.data()["url"],
          view: doc.data()["view"],
          trending: doc.data()["trending"],
          recommended: doc.data()["recommended"],
          author: doc.data()["author"],
          source: doc.data()["source"],
          buyAvailable: doc.data()["buyAvailable"],
          buyLink: doc.data()["buyLink"],
        });
      } else {
        data18.push({
          title: doc.data()["title"],
          description: doc.data()["description"],
          category: doc.data()["category"],
          subcategory: doc.data()["subcategory"],
          img: doc.data()["image"],
          url:
            "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
          link: doc.data()["url"],
          view: doc.data()["view"],
          trending: doc.data()["trending"],
          recommended: doc.data()["recommended"],
          author: doc.data()["author"],
          source: doc.data()["source"],
          buyAvailable: doc.data()["buyAvailable"],
          buyLink: doc.data()["buyLink"],
        });
      }
    }
  });
  cardData[5].push(data16.concat(data17).concat(data18));
}

// async function fetchPracticesCollection() {
//   var data5 = [];
//   var data6 = [];
//   const q3 = query(collection(db, "practices"));
//   const querySnapshot3 = await getDocs(q3);
//   querySnapshot3.forEach((doc3) => {
//     if (doc3.data()["trending"] === "true") {
//       data5.push({
//         title: doc3.data()["title"],
//         description: doc3.data()["description"],
//         category: doc3.data()["category"],
//         img: doc3.data()["image"],
//         url:
//           "/book?" +
//           doc3.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
//         link: doc3.data()["url"],
//         view: doc3.data()["view"],
//         trending: doc3.data()["trending"],
//         author: doc3.data()["author"],
//       });
//     } else {
//       data6.push({
//         title: doc3.data()["title"],
//         description: doc3.data()["description"],
//         category: doc3.data()["category"],
//         img: doc3.data()["image"],
//         url:
//           "/book?" +
//           doc3.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
//         link: doc3.data()["url"],
//         view: doc3.data()["view"],
//         trending: doc3.data()["trending"],
//         author: doc3.data()["author"],
//       });
//     }
//   });
//   cardData[2].push(data5.concat(data6));
// }

async function fetchMiscellaneousCollection() {
  var data7 = [];
  var data8 = [];
  var data9 = [];
  const q = query(
    collection(db, "miscellaneous"),
    orderBy("timestamp", "desc")
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data()["trending"] === "true") {
      data7.push({
        title: doc.data()["title"],
        description: doc.data()["description"],
        category: doc.data()["category"],
        img: doc.data()["image"],
        url:
          "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
        link: doc.data()["url"],
        view: doc.data()["view"],
        trending: doc.data()["trending"],
        recommended: doc.data()["recommended"],
        author: doc.data()["author"],
        source: doc.data()["source"],
        buyAvailable: doc.data()["buyAvailable"],
        buyLink: doc.data()["buyLink"],
      });
    } else if (doc.data()["recommended"] === "true") {
      data8.push({
        title: doc.data()["title"],
        description: doc.data()["description"],
        category: doc.data()["category"],
        img: doc.data()["image"],
        url:
          "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
        link: doc.data()["url"],
        view: doc.data()["view"],
        trending: doc.data()["trending"],
        recommended: doc.data()["recommended"],
        author: doc.data()["author"],
        source: doc.data()["source"],
        buyAvailable: doc.data()["buyAvailable"],
        buyLink: doc.data()["buyLink"],
      });
    } else {
      data9.push({
        title: doc.data()["title"],
        description: doc.data()["description"],
        category: doc.data()["category"],
        img: doc.data()["image"],
        url:
          "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
        link: doc.data()["url"],
        view: doc.data()["view"],
        trending: doc.data()["trending"],
        recommended: doc.data()["recommended"],
        author: doc.data()["author"],
        source: doc.data()["source"],
        buyAvailable: doc.data()["buyAvailable"],
        buyLink: doc.data()["buyLink"],
      });
    }
  });
  cardData[2].push(data7.concat(data8).concat(data9));
}
async function fetchMaterialCollection() {
  var data10 = [];
  var data11 = [];
  var data12 = [];
  const q = query(collection(db, "material"), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data()["subcategory"] === "Interview Questions") {
      if (doc.data()["trending"] === "true") {
        data10.push({
          title: doc.data()["title"],
          description: doc.data()["description"],
          category: doc.data()["category"],
          img: doc.data()["image"],
          subcategory: doc.data()["subcategory"],
          url:
            "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
          link: doc.data()["url"],
          view: doc.data()["view"],
          trending: doc.data()["trending"],
          recommended: doc.data()["recommended"],
          author: doc.data()["author"],
          source: doc.data()["source"],
          buyAvailable: doc.data()["buyAvailable"],
          buyLink: doc.data()["buyLink"],
        });
      } else if (doc.data()["recommended"] === "true") {
        data11.push({
          title: doc.data()["title"],
          description: doc.data()["description"],
          category: doc.data()["category"],
          img: doc.data()["image"],
          subcategory: doc.data()["subcategory"],
          url:
            "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
          link: doc.data()["url"],
          view: doc.data()["view"],
          trending: doc.data()["trending"],
          recommended: doc.data()["recommended"],
          author: doc.data()["author"],
          source: doc.data()["source"],
          buyAvailable: doc.data()["buyAvailable"],
          buyLink: doc.data()["buyLink"],
        });
      } else {
        data12.push({
          title: doc.data()["title"],
          description: doc.data()["description"],
          category: doc.data()["category"],
          subcategory: doc.data()["subcategory"],
          img: doc.data()["image"],
          url:
            "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
          link: doc.data()["url"],
          view: doc.data()["view"],
          trending: doc.data()["trending"],
          recommended: doc.data()["recommended"],
          author: doc.data()["author"],
          source: doc.data()["source"],
          buyAvailable: doc.data()["buyAvailable"],
          buyLink: doc.data()["buyLink"],
        });
      }
    }
  });
  cardData[3].push(data10.concat(data11).concat(data12));
}
async function fetchMaterialCollection2() {
  var data13 = [];
  var data14 = [];
  var data15 = [];
  const q = query(collection(db, "material"), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data()["subcategory"] === "Practice Questions") {
      if (doc.data()["trending"] === "true") {
        data13.push({
          title: doc.data()["title"],
          description: doc.data()["description"],
          category: doc.data()["category"],
          img: doc.data()["image"],
          subcategory: doc.data()["subcategory"],
          url:
            "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
          link: doc.data()["url"],
          view: doc.data()["view"],
          trending: doc.data()["trending"],
          recommended: doc.data()["recommended"],
          author: doc.data()["author"],
          source: doc.data()["source"],
          buyAvailable: doc.data()["buyAvailable"],
          buyLink: doc.data()["buyLink"],
        });
      } else if (doc.data()["recommended"] === "true") {
        data14.push({
          title: doc.data()["title"],
          description: doc.data()["description"],
          category: doc.data()["category"],
          img: doc.data()["image"],
          subcategory: doc.data()["subcategory"],
          url:
            "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
          link: doc.data()["url"],
          view: doc.data()["view"],
          trending: doc.data()["trending"],
          recommended: doc.data()["recommended"],
          author: doc.data()["author"],
          source: doc.data()["source"],
          buyAvailable: doc.data()["buyAvailable"],
          buyLink: doc.data()["buyLink"],
        });
      } else {
        data15.push({
          title: doc.data()["title"],
          description: doc.data()["description"],
          category: doc.data()["category"],
          subcategory: doc.data()["subcategory"],
          img: doc.data()["image"],
          url:
            "/book?" + doc.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
          link: doc.data()["url"],
          view: doc.data()["view"],
          trending: doc.data()["trending"],
          recommended: doc.data()["recommended"],
          author: doc.data()["author"],
          source: doc.data()["source"],
          buyAvailable: doc.data()["buyAvailable"],
          buyLink: doc.data()["buyLink"],
        });
      }
    }
  });
  cardData[4].push(data13.concat(data14).concat(data15));
}


// Higher Studies Test

async function fetchHigherStudiesCollection () {
  var data31 = [];
  var data32 = [];
  var data33 = [];
  const q = query(collection(db, "higherstudies"), orderBy("timestamp",
  "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
  if (doc.data()["trending"] === "true") {
    data31.push({
  title: doc.data()["title"],
  description: doc.data()["description"],
  category: doc.data()["category"],
  img: doc.data()["image"],
  url:
  "/book?" + doc.data()["title"].replace(/ /g,
  "-").replace(/'/g,""),
  link: doc.data()["url"],
  view: doc.data()["view"],
  trending: doc.data()["trending"],
  recommended: doc.data()["recommended"],
  author: doc.data()["author"],
  source: doc.data()["source"],
  buyAvailable: doc.data()["buyAvailable"],
  buyLink: doc.data()["buyLink"],
  });
  } else if (doc.data()["recommended"] === "true") {
    data32.push({
  title: doc.data()["title"],
  description: doc.data()["description"],
  category: doc.data()["category"],
  img: doc.data()["image"],
  url:
  "/book?" + doc.data()["title"].replace(/ /g,
  "-").replace(/'/g,""),
 link: doc.data()["url"],
  view: doc.data()["view"],
  trending: doc.data()["trending"],
  recommended: doc.data()["recommended"],
  author: doc.data()["author"],
  source: doc.data()["source"],
  buyAvailable: doc.data()["buyAvailable"],
  buyLink: doc.data()["buyLink"],
  });
  } else {
    data33.push({
  title: doc.data()["title"],
  description: doc.data()["description"],
  category: doc.data()["category"],
  img: doc.data()["image"],
  url:
  "/book?" + doc.data()["title"].replace(/ /g,
  "-").replace(/'/g,""),
  link: doc.data()["url"],
  view: doc.data()["view"],
  trending: doc.data()["trending"],
  recommended: doc.data()["recommended"],
  author: doc.data()["author"],
  source: doc.data()["source"],
  buyAvailable: doc.data()["buyAvailable"],
  buyLink: doc.data()["buyLink"],
  });
  }
  });
  cardData[6].push(data31.concat(data32).concat(data33));}














Promise.all([
  fetchBookCollection(),
  fetchRoadmapCollection(),
  fetchRoadmapCollection2(),
  fetchMiscellaneousCollection(),
  fetchMaterialCollection(),
  fetchMaterialCollection2(),
  fetchHigherStudiesCollection(),
  // Add more collections as needed
])
  .then((results) => {
    window.sessionStorage.setItem("cardData", cardData);
  })
  .catch((error) => {
    console.log("Error fetching data:", error);
  });

// const q2 = query(collection(db, "roadmaps"));
// const querySnapshot2 = await getDocs(q2);
// querySnapshot2.forEach((doc2) => {
//   if (doc2.data()["trending"] === "true") {
//     data3.push({
//       title: doc2.data()["title"],
//       description: doc2.data()["description"],
//       category: doc2.data()["category"],
//       img: doc2.data()["image"],
//       url:
//         "/book?" + doc2.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
//       link: doc2.data()["url"],
//       subcategory: doc2.data()["subcategory"],
//       trending: doc2.data()["trending"],
//     });
//   } else {
//     data4.push({
//       title: doc2.data()["title"],
//       description: doc2.data()["description"],
//       category: doc2.data()["category"],
//       img: doc2.data()["image"],
//       url:
//         "/book?" + doc2.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
//       link: doc2.data()["url"],
//       subcategory: doc2.data()["subcategory"],
//       trending: doc2.data()["trending"],
//     });
//   }
// });
// cardData[1].push(data3.concat(data4));

// const q3 = query(collection(db, "practices"));
// const querySnapshot3 = await getDocs(q3);
// querySnapshot3.forEach((doc3) => {
//   if (doc3.data()["trending"] === "true") {
//     data5.push({
//       title: doc3.data()["title"],
//       description: doc3.data()["description"],
//       category: doc3.data()["category"],
//       img: doc3.data()["image"],
//       url:
//         "/book?" + doc3.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
//       link: doc3.data()["url"],
//       trending: doc3.data()["trending"],
//     });
//   } else {
//     data6.push({
//       title: doc3.data()["title"],
//       description: doc3.data()["description"],
//       category: doc3.data()["category"],
//       img: doc3.data()["image"],
//       url:
//         "/book?" + doc3.data()["title"].replace(/ /g, "-").replace(/'/g, ""),
//       link: doc3.data()["url"],
//       trending: doc3.data()["trending"],
//     });
//   }
// });
// cardData[2].push(data5.concat(data6));

export default cardData;
