class User {
  #firstName;
  #lastName;
  #age;

  constructor(firstName, lastName, age) {
    if (typeof firstName !== 'string' || typeof lastName !== 'string' || !Number.isInteger(age)) {
      throw new Error('Invalid data type: firstName and lastName should be strings, age should be an integer.');
    }
    this.#firstName = firstName;
    this.#lastName = lastName;
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

  set firstName(value) {
    if (typeof value !== 'string') {
      throw new Error('firstName must be a string.');
    }
    this.#firstName = value;
  }

  set lastName(value) {
    if (typeof value !== 'string') {
      throw new Error('lastName must be a string.');
    }
    this.#lastName = value;
  }

  get name() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  introduce() {
    return `My name is ${this.name}, I'm ${this.#age}`;
  }

  celebrateBirthday() {
    this.#age += 1;
  }
}

// Utility Functions
const createUser = (firstName, secondName, age) => {
  return new User(firstName, secondName, age);
};

const createUsers = data => {
  return data.map(({ firstName, secondName, age }) => createUser(firstName, secondName, age));
};

const findUsersByAge = (users, age) => {
  return users.filter(user => user.age === age);
};

const createUsersSortFn = TestUtils => {
  return users => users.sort(TestUtils.comparator);
};

const celebrate = users => {
  users.forEach((user, index) => {
    if (index % 2 === 1) {
      user.celebrateBirthday();
    }
  });
};

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
  return data.map(({ firstName, secondName, age }) => this.createUser(firstName, secondName, age));
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<User>} users
 * @param {number} age
 * @returns {Array<User>}
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
  users.forEach((user, index) => {
    if (index % 2 !== 0) {
      user.celebrateBirthday();
    }
  });
};
