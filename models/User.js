class User {
  constructor(id, name, gender, birth, country, email, password, photo, admin) {
    this._id = id;
    this._name = name;
    this._gender = gender;
    this._birth = birth;
    this._country = country;
    this._email = email;
    this._password = password;
    this._photo = photo;
    this._admin = admin;
    this._register = new Date();
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get gender() {
    return this._gender;
  }

  get birth() {
    return this._birth;
  }

  set birth(value) {
    return (this._birth = value);
  }

  get country() {
    return this._country;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  get photo() {
    return this._photo;
  }

  set photo(value) {
    return (this._photo = value);
  }

  get admin() {
    return this._admin;
  }

  get register() {
    return this._register;
  }

  set register(value) {
    return (this._register = value);
  }

  incrementID() {
    let lastId = ~~localStorage.getItem("lastId");
    let id = lastId + 1;

    localStorage.setItem("lastId", id);

    this._id = id;
  }

  static selectAllBySessionStorage() {
    let users = localStorage.getItem("users");

    return users ? JSON.parse(users) : [];
  }

  save() {
    let isNewUser = true;

    let users = User.selectAllBySessionStorage().map((user) => {
      if (user._id === this._id) {
        isNewUser = false;
        return this;
      }

      return user;
    });

    if (isNewUser) {
      this.incrementID();
      users.push(this);
    }

    localStorage.setItem("users", JSON.stringify(users));
  }

  delete() {
    let users = User.selectAllBySessionStorage();

    users.forEach((value, index) => {
      if (value._id === this.id) {
        users.splice(index, 1);
      }
    });

    localStorage.setItem("users", JSON.stringify(users));
  }

  loadFromJSON(user) {
    let parsedUser = JSON.parse(user);

    for (let index in parsedUser) {
      this[index] = parsedUser[index];
    }

    return this;
  }
}
