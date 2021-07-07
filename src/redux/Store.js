class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.action = false;
    this.state = reducer(initialState, this.action)
    this.subscribers = [];
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    if (action.type) {
      this.state = this.reducer(this.state, action)
      this.subscribers.forEach((subscribe) => subscribe(this.state));
    } else {
      throw new Error("Actions should have a type")
    }
  }

  subscribe(listener) {
    this.subscribers.push(listener)
    return () => {
      this.subscribers = this.subscribers.filter((sub) => sub !== listener);
    }
  }
}

export default Store;