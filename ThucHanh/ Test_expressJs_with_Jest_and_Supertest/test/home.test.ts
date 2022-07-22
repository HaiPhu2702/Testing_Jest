import request from "supertest";
import app from "../index"



describe("test app running", () => {

    test("app Method GET", async() => {

        const response=await request(app).get("/");

        expect(response.statusCode).toBe(200)
    })
})





