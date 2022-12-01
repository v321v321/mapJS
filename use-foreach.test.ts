import { expect, test } from 'vitest';
import {
  getUsersWithMinExperience,
  getUsersWithNameStartWithS,
} from '../examples/use-foreach';
import { usersData } from './users-data';

//Get users with min experience
function MINEgetUsersForeach1(users) {
  return users.forEach(function (user) { return user.min(user.experience) })
}

//Get users count with name starts with "S"
function MINEgetUsersForeach2(users) {
  return users.forEach(function (user, count) {
    return user.name.startsWith('S');
    count = 0;
    count++ 1
  })
}

test('Get users with min experience', () => {
  expect(
    MINEgetUsersForeach1(usersData)
  ).toMatchSnapshot();
});

test('Get users count with name starts with "S"', () => {
  expect(
    MINEgetUsersForeach2(usersData)
  ).toMatchSnapshot();
});
