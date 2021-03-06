var Node = require('./Node').NodeSingly;

module.exports = LList;

function LList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrev = findPrev;
  this.remove = remove;
  this.advance = advance;
}


function find(elem) {
  var currentNode = this.head;
  while (currentNode.name != elem) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

function insert(node, after) {
  var newNode = new Node(node),
    currentNode = this.find(after);

  // Node not found
  if (!currentNode) {
    return false;
  }

  newNode.next = currentNode.next;
  currentNode.next = newNode;
}

function display () {
  var currentNode = this.head;
  while (currentNode.next != null) {
    console.log(currentNode.next.name);
    currentNode = currentNode.next;
  }
}

function findPrev (node) {
  var currentNode = this.head;
  while (currentNode.next != null) {
    if (currentNode.next.name === node) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }
}

function remove (name) {
  var prevNode = this.findPrev('cheese');
  prevNode.next = prevNode.next.next;
}


function advance (n) {
  var currentNode = this.head.next,
      i;
  for (i = 0; i < n; i++) {
    if (currentNode.next == null) return null;
    currentNode = currentNode.next;
  }

  return currentNode;
}

function back (n) {

}

