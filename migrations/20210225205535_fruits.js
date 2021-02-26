
exports.up = async function(knex) {
  await knex.schema.createTable("fruits", (table)=>{
    //   table.interger("id").notNull().unique().primary().autoincrements()
    // longway 
    table.increments("id")
    // shortway
    table.text("name").notNull().unique()
    table.float("avgWeightOz").notNull()
    table.boolean("delicious").defaultTo(true)
    table.text("color")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("fruits")
};
