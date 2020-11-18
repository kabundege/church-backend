import dotenv from 'dotenv';

dotenv.config();

export async function up(queryInterface) {
  return queryInterface.bulkInsert(
    'users',
    [
      {
        phonenumber:'+250788649666',
        amazina:'Jeannette uwimana',
        itorero_ryibanze: "karugira",
        role:'Pastor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        phonenumber:'+250784824295',
        amazina:'kabundege christophe',
        itorero_ryibanze: "karugira",
        role:'Christian',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        phonenumber:'+2507842286836',
        amazina:'Joseph Iratunejeje',
        itorero_ryibanze: 'Kansenege',
        role:'Manager',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  );
}
export function down(queryInterface) {
  return queryInterface.bulkDelete('users', null, {});
}