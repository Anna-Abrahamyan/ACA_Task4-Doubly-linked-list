"use strict";

function Node(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
}

function List() {
  let head = null;
  let tail = null;
  let count = 0;

  this.push = function (value) {
    const node = new Node(value);
    if (tail === null) {
      tail = node;
      head = node;
    } else {
      tail.next = node;
      node.previous = tail;
      tail = node;
    }
    count += 1;
  };

  this.unshift = function (value) {
    const node = new Node(value);
    if (head === null) {
      head = node;
      tail = node;
    } else {
      head.previous = node;
      node.next = tail;
      head = node;
    }
    count += 1;
  };

  this.pop = function () {
    if (tail === null) {
      return null;
    } else {
      count -= 1;
      let deleteTail = tail;
      if (tail.previous) {
        tail = tail.previous;
        tail.next = null;
      } else {
        head = null;
        tail = null;
      }
      return deleteTail;
    }
  };
  this.shift = function () {
    if (head === null) {
      return null;
    } else {
      count -= 1;
      let deleteHead = head;
      if (head.next) {
        head = head.next;
        head.previous = null;
      } else {
        head = null;
        tail = null;
      }
      return deleteHead;
    }
  };
  this.delete = function (value) {
    if (!head) {
      return null;
    } else {
      let currentNode = head;
      if (head.value === value) {
        head = head.next;
        count -= 1;
      } else {
        return "Not that value!!!";
      }
      return currentNode;
    }
  };
  this.count = function () {
    return count;
  };
}

const list1 = new List();
list1.push(8);
list1.push(5);
list1.push(8);
list1.push(18);
list1.unshift(3);
const item2 = list1.pop();
const item3 = list1.shift();
const item1 = list1.delete(9);
console.log("item", item1, item2, item3);
const count1 = list1.count();
console.log(count1);
