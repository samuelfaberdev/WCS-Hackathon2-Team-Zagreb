const express = require("express");

const router = express.Router();

const phoneControllers = require("./controllers/phoneControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.get("/phones/", phoneControllers.findAllPhones);
router.get("/phones/os/:os", phoneControllers.os);
router.get("/phones/marque/:marque", phoneControllers.marque);
router.get("/phones/model/:model", phoneControllers.model);
router.get("/phones/couleur/:couleur", phoneControllers.couleur);

module.exports = router;
