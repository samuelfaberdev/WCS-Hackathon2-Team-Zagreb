const express = require("express");

const router = express.Router();

const phoneControllers = require("./controllers/phoneControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);
router.get("/api", function (req, res) {
  res.send("hello world");
});
router.get("/api/phones/", phoneControllers.findAllPhones);
router.get("/api/phones/marques/:os", phoneControllers.findAllMarques);
router.get("/api/phones/models/:marque", phoneControllers.findAllModels);
router.get("/api/phones/couleurs/:model", phoneControllers.findAllCouleurs);
router.get("/api/phones/rams/:model", phoneControllers.findAllRams);
router.get("/api/phones/stockages/:model", phoneControllers.findAllStockages);
router.get("/api/phones/antutu/:model", phoneControllers.findAllAntutu);

module.exports = router;
