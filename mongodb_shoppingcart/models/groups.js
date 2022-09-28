'use strict';
module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    name: {
      type: String
    },
    description: {
      type: String
    },
    isactive: {
      type: Boolean
    }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
  const groups = mongoose.model('groups', newSchema);
  return groups;
};