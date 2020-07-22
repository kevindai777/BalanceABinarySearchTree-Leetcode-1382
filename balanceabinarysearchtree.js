//Objective is to balance a binary search tree

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(11)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 36)
tree.addLeftNode(tree.root.right, 15)


//O(n) solution that does an inorder traversal of the tree then 
//builds it recursively

let arr = []
    
//It should be noted that doing an inorder traversal of a BST
//will return the elements in sorted order
function dfs(node) {
    if (!node) {
        return
    }
    
    dfs(node.left)
    arr.push(node.val)
    dfs(node.right)
}
dfs(tree.root)

let start = 0
let end = arr.length - 1

function buildTree(start, end) {
    if (start > end) {
        return null
    }
    
    let mid = Math.floor((start + end) / 2)
    let root = new Node(arr[mid])
    root.left = buildTree(start, mid - 1)
    root.right = buildTree(mid + 1, end)
    
    return root
}
return buildTree(start, end)