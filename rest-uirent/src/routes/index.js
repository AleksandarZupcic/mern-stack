import express from 'express';
import config from '../config';
import initializeDb from '../db';
import middleware from '../middleware';
import restuirent from "../controller/restuirent";

let router = express();
initializeDb(db => {
  router.use(middleware({ config, db }));
  router.use("/restuirent", restuirent({ config, db }));
});

export default router;