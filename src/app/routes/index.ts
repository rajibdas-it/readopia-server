import express from "express";

const router = express.Router();

const modulesRoute = [{ pathName: "/book", routeName: null }];

modulesRoute.forEach((route) => router.use(route.pathName, route.routeName!));

export default router;
