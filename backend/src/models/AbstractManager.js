class AbstractManager {
  constructor({ table }) {
    this.table = table;
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  findMarque(os) {
    return this.database.query(
      `select distinct marque from  ${this.table} where os = ?`,
      [os]
    );
  }

  findModel(marque) {
    return this.database.query(
      `select distinct model from  ${this.table} where marque = ?`,
      [marque]
    );
  }

  findCouleur(model) {
    return this.database.query(
      `select distinct couleur from  ${this.table} where model = ?`,
      [model]
    );
  }

  findRAM(model) {
    return this.database.query(
      `select distinct ram from  ${this.table} where model = ?`,
      [model]
    );
  }

  findStockage(model) {
    return this.database.query(
      `select distinct stockage from  ${this.table} where model = ?`,
      [model]
    );
  }

  findAntutu(model) {
    return this.database.query(
      `select distinct antutu from ${this.table} where model = ?`, 
      [model]
    );
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = AbstractManager;
