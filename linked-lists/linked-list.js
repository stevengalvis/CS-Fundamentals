class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error("Index Error");
    }

    const newNode = {
      value
    };
    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const node = this._find(index - 1);
      newNode.next = node.next;
      node.next = newNode;
    }
  }
}
