const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

class BinarySearchTree {
  
    constructor (){
      this.data = null;

    }
  root() {
    return this.data
  }

  add(value) {
     this.data = addNode(this.data, value);
     function addNode (node, value){
       if(!node){
         return new Node (value)
       }
       if(node.data === value){
         return node;
      }
      if(value<node.value){
        node.left = addNode(node.left, value);
      } else{
        node.right = (node.right, value)
      }
      return node
   }
  }

  has(value) {
    return searchData(this.data, value);
    function searchData(node, value){
    if(!node){
      return false;
    }
    if(value == node.data){
      return true;  
    }
    if(value < node.data) {
      return searchData(node.left, value);
    }
    else {
    return searchData(node.right, value)
    }
  }
}
  find(value) {
    return findData(this.data, value);
    function findData(node, value){
      if(!node) return null;
      if(node.data == value) return node.data;
      if (node.data<value) return findData(node.left);
      if (node.data>value) return findData(node.right);


    }
  
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
   if (!this.data){
     return;
   }
   let node = this.data;
   while(node.right){
     node = node.right;
   }
   return node.data
  }
}



module.exports = {
  BinarySearchTree
};