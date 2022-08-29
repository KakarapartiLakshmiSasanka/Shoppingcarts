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
   return queryInterface.bulkInsert('Categories',[{
    id:1,
    name:'women',
    description:'Deepavali sale',
    groupId:1,
    isactive:true,
    createdAt:new Date(),
    updatedAt:new Date()
   },
   {
    id:2,
    name:'Men',
    description:'Deepavali sale',
    groupId:2,
    isactive:true,
    createdAt:new Date(),
    updatedAt:new Date()

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
    return queryInterface.bulkDelete('Categories',null,{});
  }
};
