import express from "express";

import {
    addKid,
    getKidsOf,
    callKid,
    getAllKids,
    confirmKid
} from "./kids.js";

import {
    validateAddingKid,
    validateGetKidsOf,
    validateCallKid,
    validateConfirmKid
} from "./validators.js";

export const router = express.Router();

router.post("/", validateAddingKid, addKid);

router.post("/:id/call", validateCallKid, callKid);

router.patch("/:id/confirm", validateConfirmKid, confirmKid);

router.get("/admin/all", getAllKids);

router.get("/:id", validateGetKidsOf, getKidsOf);