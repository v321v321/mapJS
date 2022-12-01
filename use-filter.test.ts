import { expect, test } from 'vitest';
import {

} from '../use-filter';
import { usersData } from './users-data';

// Get users with bigger then 10 years experience and name starts with "S"
function user10S(user) {
  return user.experience > 10 && user.name.startsWith('S')
}

function MINEgetUsersFilter1(users) {
  return users.filter(user10S)
}

//Get users with experience bigger then 10 years    
function MINEgetUsersFilter2(users) {
  return users.filter(function (user) { return user.experience > 10 })
}

//Get users with experience smaller then 5 years
function MINEgetUsersFilter3(users) {
  return users.filter(function (user) { return user.experience < 5 })
}

test('Get users with bigger then 10 years experience and name starts with "S"', () => {
  expect(
    MINEgetUsersFilter1(usersData)
  ).toMatchSnapshot();
});

test('Get users with experience bigger then 10 years', () => {
  expect(
    MINEgetUsersFilter2(usersData)
  ).toMatchSnapshot();
});

test('Get users with experience smaller then 5 years', () => {
  expect(
    MINEgetUsersFilter3(usersData)
  ).toMatchSnapshot();
});
