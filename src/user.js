class User {
  #firstName;
  #secondName;
  #age;
  constructor(firstName, secondName, age) {
    if (typeof firstName !== 'string' || typeof secondName !== 'string' || typeof age !== 'number') {
      throw new Error();
    }
    this.#firstName = firstName;
    this.#secondName = secondName;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (!Number.isInteger(value)) {
      throw new Error('Age must be an integer.');
    }
    this.#age = value;
  }

  set firstName(newFirstName) {
    if (!newFirstName || typeof newFirstName !== 'string') {
      throw new Error();
    }
    this.#firstName = newFirstName;
  }

  set secondName(value) {
    if (typeof value !== 'string') {
      throw new Error('lastName must be a string.');
    }
    this.#secondName = value;
  }

  get name() {
    return `${this.#firstName} ${this.#secondName}`;
  }

  celebrateBirthday() {
    this.#age += 1;
    return this.#age;
  }

  introduce() {
    return `My name is ${this.#firstName} ${this.#secondName}, I'm ${this.#age}`;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  let users = [];
  for (let i = 0; i < data.length; i++) {
    users.push(new User(data[i].firstName, data[i].secondName, data[i].age));
  }
  return users;
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<Users>} users
 * @param {number} age
 * @returns {Array<Users>}
 */
module.exports.findUsersByAge = function (users, age) {
  return users.filter(user => user.age === age);
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function (users) {
    return users.sort(TestUtils.comparator);
  };
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  for (let i = 0; i < users.length; i++) {
    if (i % 2 === 0) {
      users[i].celebrateBirthday();
    }
  }
  return users;
};
