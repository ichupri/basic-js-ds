// // const { NotImplementedError } = require('../extensions/index.js');

// // // const { Node } = require('../extensions/list-tree.js');

// // /**
// // * Implement simple binary search tree according to task description
// // * using Node from extensions
// // */
// // class BinarySearchTree {

// //   root() {
// //     throw new NotImplementedError('Not implemented');
// //     // remove line with error and write your code here
// //   }

// //   add(/* data */) {
// //     throw new NotImplementedError('Not implemented');
// //     // remove line with error and write your code here
// //   }

// //   has(/* data */) {
// //     throw new NotImplementedError('Not implemented');
// //     // remove line with error and write your code here
// //   }

// //   find(/* data */) {
// //     throw new NotImplementedError('Not implemented');
// //     // remove line with error and write your code here
// //   }

// //   remove(/* data */) {
// //     throw new NotImplementedError('Not implemented');
// //     // remove line with error and write your code here
// //   }

// //   min() {
// //     throw new NotImplementedError('Not implemented');
// //     // remove line with error and write your code here
// //   }

// //   max() {
// //     throw new NotImplementedError('Not implemented');
// //     // remove line with error and write your code here
// //   }
// // }

// // module.exports = {
// //   BinarySearchTree
// // };


// const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

// /**
// * Implement simple binary search tree according to task description
// * using Node from extensions
// */
// class BinarySearchTree {
//   constructor() {
//     this.rootData = null;
//   }

//   root() {
//     return this.rootData;
//   }

//   add(data) {
//     this.rootData = addNode(this.rootData, data)

//     function addNode(node, newNode) {
//       if (node === null || !node ) {
//         return new Node(newNode);
//       } 
//       if (node.data === newNode.data) {
//         return node;
//       } 
//       if (newNode.data > node.data) {
//         node.right = addNode(node.right, newNode);
//       }
//       if (newNode.data < node.data) {
//         node.left = addNode(node.left, newNode);
//       }
//       return node;
//     }
//   }



//   has(data) {
//     return hasData(this.rootData, data);

//     function hasData(node, data) {
//       if (!node) {
//         return false;
//       }
//       if (node.data === data) {
//         return true;
//       }
//       if (node.data > data) {
//         return hasData(node.left, data)
//       } else {
//         return hasData(node.right, data)
//       }
//     }
//   }

//   find(data) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   remove(data) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   min() {
//     throw new NotImplementedError('Not implemented');

//     return searchMin(this.rootData)
//     function searchMin(node) {
//       if (!node) {
//         return null
//       }
//       if (!node.left) {
//         return node.data

//       } else {
//         return searchMin(node.left)
//       }
//     }
    
//     // if (!this.rootData) {
//     //   return;
//     // }

//     // function searchMin (node) {
//     //   if (node.left !== null) {
//     //     node = node.left;
//     //   }
//     // }

//     // let node = this.rootData;
//     // while (node.left) {
//     //   node = node.left;
//     // }
//     // return node.data;
//   }

//   max() {
//     throw new NotImplementedError('Not implemented');

//     return searchMax(this.rootData)
//     function searchMax(node) {
//       if (!node) {
//         return null;
//       }
//       if (!node.right) {
//         return node.data
//       } else {
//         return searchMax(node.right)
//       }
//     }
//   }
//   //   if (!this.rootData) {
//   //     return;
//   //   }

//   //   let node = this.rootData;
//   //   while (node.right) {
//   //     node = node.right;
//   //   }
//   //   return node.data;
//   // }
// }

// module.exports = {
//   BinarySearchTree
// };

const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.rootData = null;
  }

  root() {
    return this.rootData
  }

  add(data) {
    this.rootData = addNode(this.rootData, data)
    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        node.left = addNode(node.left, data)
      } else {
        node.right = addNode(node.right, data)
      }
      return node
    }
  }

  has(data) {
    return hasNode(this.rootData, data)
    function hasNode(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      if (node.data > data) {
        return hasNode(node.left, data)
      } else {
        return hasNode(node.right, data)
      }
    }
  }

  find(data) {
    return findNode(this.rootData, data)
    function findNode(node, data) {
      if (node.data === data) {
        return node;
      }
      console.log(node.left)
      if (data > node.data && !node.right) {
        return null;
      }
      if (data < node.data && !node.left) {
        return null;
      }
      if (node.data > data) {
        return findNode(node.left, data)
      } else {
        return findNode(node.right, data)
      }
    }
  }


  remove(data) {
    this.root = removeNode(this.rootData, data)
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right
        }
        node.data = maxFromLeft.data

        node.left = removeNode(node.left, maxFromLeft.data)
        return node;
      }
    }
  }

  min() {
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
  }

  max() {
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
}

module.exports = {
  BinarySearchTree
};
