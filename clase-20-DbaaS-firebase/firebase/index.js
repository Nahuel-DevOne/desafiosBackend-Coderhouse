const admin = require("firebase-admin");

const serviceAccount = require("./db/ecommerce-backend-f9b20-firebase-adminsdk-jh3ia-9c5d4601b4.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ecommerce-backend-f9b20.firebaseio.com"
})

console.log("conexion a la base de datos Firebase realizada");

const db = admin.firestore();

const query = db.collection("users");

const saveUser = async(user) => {
    let doc = query.doc(`${Math.ramdom()}`);
    await doc.create({name: "Nahuel", age: 35})
}


