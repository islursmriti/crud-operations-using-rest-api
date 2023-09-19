const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, released_year 
    FROM top_search_engines LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(searchengine) {
  const result = await db.query(
    `INSERT INTO top_search_engines 
    (id, name, released_year) 
    VALUES 
    (${searchengine.id}, "${searchengine.name}", ${searchengine.released_year})`
  );

  let message = "Error in creating search engine";

  if (result.affectedRows) {
    message = "search engine info created successfully";
  }

  return { message };
}

async function update(id, searchengine) {
  const result = await db.query(
    `UPDATE top_search_engines 
    SET name="${searchengine.name}", released_year=${searchengine.released_year} 
    WHERE id=${id}`
  );

  let message = "Error in updating search engine";

  if (result.affectedRows) {
    message = "search engine info updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM top_search_engines WHERE id=${id}`
  );

  let message = "Error in deleting search engine";

  if (result.affectedRows) {
    message = "search engine info deleted successfully";
  }

  return { message };
}
async function search(id){
  const rows = await db.callSpSearch(id);
  const data = helper.emptyOrRows(rows);
  return {
    data
  }
}
module.exports = {
  getMultiple,
  create,
  update,
  remove,
  search
};
