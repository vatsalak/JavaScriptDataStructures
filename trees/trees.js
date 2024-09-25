class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Add a node to the binary tree (iteratively)
    insert(value) {
        const newNode = new BinaryTreeNode(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                // Go to the left
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                // Go to the right
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    // In-order traversal (left, root, right)
    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    // Pre-order traversal (root, left, right)
    preOrderTraversal(node = this.root) {
        if (node !== null) {
            console.log(node.value);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    // Post-order traversal (left, right, root)
    postOrderTraversal(node = this.root) {
        if (node !== null) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.value);
        }
    }

    // Breadth-first search (BFS)
    bfs() {
        const queue = [];
        queue.push(this.root);

        while (queue.length > 0) {
            let node = queue.shift(); // Remove the first element in the queue
            console.log(node.value);

            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
    }
}
let tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(13);
tree.insert(17);

console.log("In-Order Traversal:");
tree.inOrderTraversal();  // Output: 2, 5, 7, 10, 13, 15, 17

console.log("Pre-Order Traversal:");
tree.preOrderTraversal();  // Output: 10, 5, 2, 7, 15, 13, 17

console.log("Post-Order Traversal:");
tree.postOrderTraversal();  // Output: 2, 7, 5, 13, 17, 15, 10

console.log("Breadth-First Search (BFS):");
tree.bfs();  // Output: 10, 5, 15, 2, 7, 13, 17
