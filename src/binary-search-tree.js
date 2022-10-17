// const { NotImplementedError } = require('../extensions/index.js');

// // const { Node } = require('../extensions/list-tree.js');

// /**
// * Implement simple binary search tree according to task description
// * using Node from extensions
// */
// class BinarySearchTree {

//   root() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   add(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   has(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   find(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   remove(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   min() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   max() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

// module.exports = {
//   BinarySearchTree
// };


const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootData = null;
  }

  root() {
    return this.rootData;
  }

  add(data) {
    this.rootData = addNode(this.rootData, data)

    function addNode(node, newNode) {
      if (node === null || !node ) {
        return new Node(newNode);
      } 
      if (node.data === newNode.data) {
        return node;
      } 
      if (newNode.data > node.data) {
        node.right = addNode(node.right, newNode);
      }
      if (newNode.data < node.data) {
        node.left = addNode(node.left, newNode);
      }
      return node;
    }
  }



  has(data) {
    return hasData(this.rootData, data);

    function hasData(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (node.data > data) {
        return hasData(node.left, data)
      } else {
        return hasData(node.right, data)
      }
    }
  }

  find(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');

    return searchMin(this.rootData)
    function searchMin(node) {
      if (!node) {
        return null
      }
      if (!node.left) {
        return node.data

      } else {
        return searchMin(node.left)
      }
    }
    
    // if (!this.rootData) {
    //   return;
    // }

    // function searchMin (node) {
    //   if (node.left !== null) {
    //     node = node.left;
    //   }
    // }

    // let node = this.rootData;
    // while (node.left) {
    //   node = node.left;
    // }
    // return node.data;
  }

  max() {
    throw new NotImplementedError('Not implemented');

    return searchMax(this.rootData)
    function searchMax(node) {
      if (!node) {
        return null;
      }
      if (!node.right) {
        return node.data
      } else {
        return searchMax(node.right)
      }
    }
  }
  //   if (!this.rootData) {
  //     return;
  //   }

  //   let node = this.rootData;
  //   while (node.right) {
  //     node = node.right;
  //   }
  //   return node.data;
  // }
}

module.exports = {
  BinarySearchTree
};


