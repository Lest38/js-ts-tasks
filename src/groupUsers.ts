/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */
module.exports.groupUsers = function (users: Array<unknown>): Record<'employees' | 'contractors', Array<unknown>> {
  if (!Array.isArray(users)) {
    throw new TypeError('The input should be an array of users.');
  }

  const groupedUsers: Record<'employees' | 'contractors', unknown[]> = {
    employees: [],
    contractors: [],
  };

  users.forEach(user => {
    if (typeof user === 'object' && user !== null && 'type' in user && (user.type === 'EMPLOYEE' || user.type === 'CONTRACTOR')) {
      if (user.type === 'EMPLOYEE') {
        groupedUsers.employees.push(user);
      } else {
        groupedUsers.contractors.push(user);
      }
    } else {
      console.warn(`Invalid user or unknown user type:`, user);
    }
  });

  return groupedUsers;
};
