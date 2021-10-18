const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null; 
  }
}

module.exports = class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  };

  root() {
    return this.treeRoot;
  };


  add(data) {

    function addData(currentNode, data) {

      if (currentNode === null) {
        return new Node(data);

      }else if (currentNode.data === data) {
        return currentNode;

      }else if (data < currentNode.data) {
        currentNode.left = addData(currentNode.left, data);

      } else {
        currentNode.right = addData(currentNode.right, data);
      }
      return currentNode;
    }

    this.treeRoot = addData(this.treeRoot, data);
  }

  has(data) {
   
    function isHasData(currentNode, data) {
      
      if (currentNode === null) {
        return false;

      }else if (currentNode.data === data) {
        return true;

      }else if (data < currentNode.data) {
        return isHasData(currentNode.left, data)

      }else{
        return isHasData(currentNode.right, data);
      }
    }

    return isHasData(this.treeRoot, data);
  }

  find(data) {
    
    function findData(currentNode, data) {

      if (currentNode === null) {
        return null;

      }else if (currentNode.data === data) {
        return currentNode;

      }else  if (data < currentNode.data) {
        return findData(currentNode.left, data);

      } else {
        return findData(currentNode.right, data);
      }
    }

    return findData(this.treeRoot, data);
  }

  remove( data ) {
    
    function removeData(currentNode, data) {
      if (currentNode === null) {
        return null;
      }

      if (data < currentNode.data) {
        currentNode.left = removeData(currentNode.left, data);
        return currentNode;
      } else if (currentNode.data < data) {
        currentNode.right = removeData(currentNode.right, data);
        return currentNode;
      } else {
        if ((currentNode.left === null) && (currentNode.right === null)) {
          return null;
        }

        if (currentNode.left === null) {
          currentNode = currentNode.right;
          return currentNode;
        }

        if (currentNode.right === null) {
          currentNode = currentNode.left;
          return currentNode;
        }

        let nodeMinRight = currentNode.right;

        while (nodeMinRight.left) {
          nodeMinRight = nodeMinRight.left;
        }
        currentNode.data = nodeMinRight.data;
        
        currentNode.right = removeData(currentNode.right, nodeMinRight.data);

        return currentNode;
      }
    }

    this.treeRoot = removeData(this.treeRoot, data);
  }

  min() {
    let nodeMin = this.treeRoot;

    while (nodeMin.left) {
      nodeMin = nodeMin.left;
    }
    return nodeMin.data;
  }
  

  max() {

    let nodeMax = this.treeRoot;

    while (nodeMax.right) {
      nodeMax = nodeMax.right;
    }
    return nodeMax.data;
  }
};