'use strict';

const { query } = require("express");
const { RowDescriptionMessage } = require("pg-protocol/dist/messages");

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
   return queryInterface.bulkInsert('Products',[{
    name:'laptops',
    description:'Lenovo', 
    categoryId:'1',
    image_url:'hiiii',
    price:100000,
    size:123,
    isactive:true,
    createdAt:new Date(),
    updatedAt:new Date()

   },{
   name:'mobiles',
    description:'realme', 
    categoryId:'2',
    image_url:'mobile',
    price:25000,
    size:1456,
    isactive:true,
    createdAt:new Date(),
    updatedAt:new Date()
   },{
    name:'EarPhones',
    description:'Realme', 
    categoryId:'3',
    image_url:'earbudss',
    price:1500,
    size:143,
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
    return queryInterface.bulkDelete('Products',null,{});
  }
};
