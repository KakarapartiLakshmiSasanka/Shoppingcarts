module.exports = {
  async up(db, client) {
    return await db.collection('groups').insertMany([
      {
        name: 'clothes',
        Description: 'Women paty wear',
        isactive: 'True',
        //added this line
        createdAt:new Date(),
        updatedAt:new Date(),
      }
    ], {})
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
