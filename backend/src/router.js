const express = require("express");

const router = express.Router();

const phoneControllers = require("./controllers/phoneControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.get("/phones/", phoneControllers.findAllPhones);
router.get("/phones/marques/:os", phoneControllers.findAllMarques);
router.get("/phones/models/:marque", phoneControllers.findAllModels);
router.get("/phones/couleurs/:model", phoneControllers.findAllCouleurs);
router.get("/phones/rams/:model", phoneControllers.findAllRams);
router.get("/phones/stockages/:model", phoneControllers.findAllStockages);

module.exports = router;
