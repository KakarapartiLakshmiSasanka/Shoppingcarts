module.exports = {
  async up(db, client) {
    return await db.collection('categories').insertMany([
      {
        name: 'Perty wear',
        Description: 'Designer',
        isactive: 'True',
      }
      //  name: string , description: string, groupId: integer foreign key(association to groups table) , isactive: boolean 
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
