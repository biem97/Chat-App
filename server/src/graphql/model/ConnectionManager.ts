interface User {
  authToken: "string";
}

class ConnectionManager {
  private connectedUsers: User[];

  constructor() {
    this.connectedUsers = [];
  }

  addUser = (user: User): void => {
    this.connectedUsers.push(user);
  };

  removeUser = (user: User): void => {
    const connectedUserIdex = this.connectedUsers.findIndex(
      (connectedUser) => (connectedUser.authToken = user.authToken)
    );

    this.connectedUsers.splice(connectedUserIdex, 1);
  };

  get totalConnectedUsers(): number {
    return this.connectedUsers.length;
  }
}

export default ConnectionManager;
