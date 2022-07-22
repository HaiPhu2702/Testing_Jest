import {UserModel} from '../src/model/user.model';

import {UserController} from "../src/controller/user.controller"

const createUser = UserController.createUser;

import {NextFunction} from "express";

import app from "../index";

import request from 'supertest';


//TEST CREATE USER

// describe("Test create user", () => {
//
//     it("test done", async () => {
//
//         //vi dang test tao 1 create user nen can  lam gia 1 req,1 res,1 next va 1 CSDL de fake chua du lieu
//
//         //b1: Fake CSDL
//         jest.spyOn(UserModel.prototype, 'save').mockImplementationOnce(() => Promise.resolve());
//
//         //b2:gia request
//         const mockRequest: any = {
//
//             body: {
//                 username: "test",
//                 password: "123456"
//             }
//
//         };
//
//         //b3:gia response
//         const mockResponse: any = {
//
//             status: jest.fn(),
//             json: jest.fn(),
//
//         };
//
//         //b4: gia next
//                 const mockNext: NextFunction = jest.fn();
//
//         //b5:tien hanh goi ham tu controller
//                 await createUser(mockRequest, mockResponse, mockNext);
//
//         //B6: THUC THI VA TOBE cái gì
//                 expect(mockResponse.status).toHaveBeenCalledWith(200);
//
//     })
// })


//TEST TẠO HTTP REQUEST ĐẾN ROUTER (JEST TEST)

// describe("User Endpoint",()=>{
//     test("new user",async ()=>{
//
//         const res=await request(app)
//             .post('/api/v1/register')
//             .send({
//                 username:"phu",
//                 password:"123"
//             })
//         expect(res.statusCode).toEqual(200)
//         expect(res.body).toHaveProperty('username')
//     })
// })


//TEST TẠO HTTP REQUEST ĐẾN ROUTER (JEST TEST) part 2

describe('create book',()=> {
    test("new user", async () => {
        const res = await request(app)
            .post('/api/v1/createBook')
            .send({
                name: "hihi",
                type: "hai huoc"
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('name')
    })
})