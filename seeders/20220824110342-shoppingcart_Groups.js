'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Groups',[
    {
      name: "women" , description: "handbags", isactive: true,createdAt:new Date(),updatedAt:new Date(),

   },
   {
     name:"girls", description:"hair accessories", isactive:true,createdAt:new Date(),updatedAt:new Date(),
   }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Groups',{},null)
  }
};
