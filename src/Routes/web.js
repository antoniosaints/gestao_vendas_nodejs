import express from "express";
const router = express.Router();

// Rotas estaticas (files)
router.get("/", (_, res) => res.render("index"));
router.get("/sobre", (_, res) => res.render("sobre", { content: "Essa é a página de sobre" }));

export default router;
