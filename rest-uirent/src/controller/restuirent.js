//import mongoose from "mongoose";
import { Router } from "express";
import Restaurant from "../model/restaurant";

export default ({ config, db }) => {
    let api = Router();
    
    // [POST] Route: http://localhost:3000/restuirent/add
    api.post("/add", (req, res) => {
        let newRest = new Restaurant();
        newRest.name = req.body.name;

        newRest.save(err => {
            if(err){
                res.send(err);
            }
            res.json({ message: "Restaurant saved successfully!" });
        });
    });

    // [GET] Route: http://localhost:3000/restuirent/restuirent
    api.get("/", (req, res) => {
        Restaurant.find({}, (err, restaurants) => {
            if(err){
                res.send(err);
            }
            res.json(restaurants);
        });
    });

    // [GET] Route: http://localhost:3000/restuirent/:id
    api.get("/:id", (req, res) => {
        Restaurant.findById(req.params.id, (err, restaurant) => {
            if(err){
                res.send(err);
            }
            res.json(restaurant);
        });
    });
    
    // [PUT] Route: http://localhost:3000/restuirent/:id
    api.put("/:id", (req, res) => {
        Restaurant.findById(req.params.id, (err, restaurant) => {
            if(err){
                res.send(err);
            }
            restaurant.name = req.body.name;
            restaurant.save(err => {
                if(err){
                    res.send(err);
                }
                res.json({ message: "Restaurant updated successfully!" });
            });
        });
    });

    // [DELETE] http://localhost:3000/restuirent/:id
    api.delete("/:id", (req, res) => {
        Restaurant.deleteOne({
            _id: req.params.id
        }, (err) => {
            if(err){
                res.send(err);
            }
            res.json({ message: "Restaurant deleted successfully!" });
        });
    });

    return api;
};