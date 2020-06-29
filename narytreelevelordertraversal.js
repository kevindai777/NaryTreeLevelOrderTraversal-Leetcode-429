//Objective is the same as 'Binary Tree Level Order Traversal', but this time with
//an N-ary tree.

class Node {
    constructor(val) {
        this.val = val
        this.children = []
    }
}

class nTree {
    constructor(root) {
        this.root = root 
    }
}

let root = new Node(1)
root.children = [new Node(2), new Node(3), new Node(4), new Node(5)]
root.children[1].children = [new Node(6), new Node(7)]
root.children[1].children[1].children = [new Node(11)]
root.children[1].children[1].children[0].children = [new Node(14)]
root.children[2].children = [new Node(8)]
root.children[2].children[0].children = [new Node(12)]
root.children[3].children = [new Node(9), new Node(10)]
root.children[3].children[0].children = [new Node(13)]


//O(n) solution that performs a bfs traversal to add the nodes in each level.

let result = []

//Similar solution to 'Binary Tree Level Order Traversal'
function dfs(node, level) {
    if (!node) {
        return null
    }

    let arr = result[level]
    if (!arr) {
        arr = []
        result[level] = arr
    }
    arr.push(node.val)

    for (let child of node.children) {
        dfs(child, level + 1)
    }
}
dfs(root, 0)

return result