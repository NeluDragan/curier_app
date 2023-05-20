export class User {
  constructor(username, email, fullname, disabled, access_level) {
    this.id = username
    this.username = username
    this.email = email
    this.fullname = fullname
    this.disabled = disabled
    this.access_level = access_level
  }

  static fromJSON(object) {
    return new User(
      object['username'],
      object['email'],
      object['fullname'],
      object['disabled'],
      object['access_level'],
    )
  }
}
