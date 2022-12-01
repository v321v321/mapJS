import { expect, test } from 'vitest';
import {

} from '../examples/use-map';
import { usersData } from './users-data';

// Get users with uppercase names
function MINEgetUsersMap1(users) {
  return users.map(function (user) { return user.name.toUpperCase(), user.experience })
}

//Get users with more 3 year experience
function MINEgetUsersMap2(users) {
  return users.map(function (user) { return user.name, user.experience + 3 })
}

//Add users age field
function MINEgetUsersMap3(users) {
  return users.map(function (user) { return user.name, user.experience, user.age = user.name.length + user.experience })
}

test('Get users with uppercase names', () => {
  expect(
    MINEgetUsersMap1(usersData)
  ).toMatchSnapshot();
});

test('Get users with more 3 year experience', () => {
  expect(
    MINEgetUsersMap2(usersData)
  ).toMatchSnapshot();
});

test('Add users age field', () => {
  expect(
    MINEgetUsersMap3(usersData)
  ).toMatchSnapshot();
});
