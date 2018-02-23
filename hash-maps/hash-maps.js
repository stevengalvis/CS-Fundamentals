class HashMap {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._slots = [];
    this._capacity = initialCapacity;
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }

  set(key, value) {
    const loadRatio = (this.length + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap._SIZE_RATIO);
    }

    const index = this._findSlot(key);
    this._slots[index] = {
      key,
      value
    };
    this.length++;
  }

  // find slot will start with where it should be
  // this should be the key we are looking for based
  // on the hash
  // if not found it will add an index that is undefined
  // and continue to check other slots for the value
  // which wont be undefined or match the key
  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;

    for (let i = start; i < start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._slots[index];
      if (slot === undefined || slot.key == key) {
        return index;
      }
    }
  }

  _resize(size) {
    const oldSlots = this._slots;
    this._capacity - size;
    this.length = 0;
    this._slots = [];

    for (const slot of oldSlots) {
      if (slot !== undefined) {
        this.set(slot.key, slot.value);
      }
    }
  }
}

HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;
