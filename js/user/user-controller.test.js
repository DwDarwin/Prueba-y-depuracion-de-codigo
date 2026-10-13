const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test('agregar nuevo usuario a la lista userController', () => {
  let user = new User(1111, "Darwin", "darwin@generation.org");
  expect(userController.getUsers()).not.toContain(user);
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test('eliminar usuario que no esta en la lista userController', () => {
  let user = new User(5555, "David", "david@generation.org");
  userController.remove(user);
  expect(userController.getUsers()).not.toContain(user);
});

test('buscar usuario por email existente', () => {
  let user = new User(123, "Paola", "paola@generation.org");
  userController.add(user);
  expect(userController.findByEmail("paola@generation.org")).toBe(user);
});

test('buscar un usuario por correo que no existe', () => {
  expect(userController.findByEmail("generation@generation.org")).toBeUndefined();
});

test('buscar por id existente', () => {
  let user = new User(1010, "Marcela", "marcela@generation.org");
  userController.add(user);
  expect(userController.findById(1010)).toBe(user);
});

test('buscar por id inexistente', () => {
  expect(userController.findById(1223)).toBeUndefined();
});
