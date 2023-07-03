const models = require("../models");

const findAllPhones = (req, res) => {
  models.phone
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const findAllMarques = (req, res) => {
  models.phone
    .findMarque(req.params.os)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const findAllModels = (req, res) => {
  models.phone
    .findModel(req.params.marque)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const findAllCouleurs = (req, res) => {
  models.phone
    .findCouleur(req.params.model)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const findAllRams = (req, res) => {
  models.phone
    .findRAM(req.params.model)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const findAllStockages = (req, res) => {
  models.phone
  .findStockage(req.params.model)
  .then(([rows]) => {
    if (rows[0] == null) {
      res.sendStatus(404);
    } else {res.send(rows);
    }
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  })
}

const findAllAntutu = (req, res) => {
  models.phone
  .findAntutu(req.params.model)
  .then(([rows]) => {
    if (rows[0] == null) {
      res.sendStatus(404);
    } else {res.send(rows);
    }
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  })
}

module.exports = {
  findAllPhones,
  findAllMarques,
  findAllModels,
  findAllCouleurs,
  findAllRams,
  findAllStockages,
  findAllAntutu,
};
