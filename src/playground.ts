import { db } from "./server/db";



await db.user.create({
    data: {
        emailAdress: "test@gmail.com",
        firstName: "example",
        lastName: "name",
    }
})
console.log("done")