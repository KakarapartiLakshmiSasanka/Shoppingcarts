const moment=require('moment');


module.exports = {
  async up(db,client) {
    console.log(client);
    const Groups = await db.collection('GroupDB').find({}).toArray();
    const operations = Groups.map((Groups) => {
        return db.collection('GroupDB').insert({ _id: Groups._id }, {
                $set: {
                    weekDay: moment(Groups.date).day()
                }
        })          
    })
    return Promise.all(operations);
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },

  async down(db, client) {
    return db.collection('GroupDB').updateMany({}, { $unset: { weekDay: null } });
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
