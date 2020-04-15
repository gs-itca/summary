/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-04-14 11:45:03
 */
/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-04-14 11:45:03
 */
function Node (data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show
}

function show () {
    console.log('this.data:', this.data);
    return this.data
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder
}


/**
 * @description: 插入节点
 * @param {data: Number}
 * @return:
 */
function insert (data) {
    var n = new Node(data, null, null)
    if (this.root == null) {
        this.root = n
    } else {
        var current = this.root
        var parent
        while (true) {
            parent = current
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n
                    break;
                }
            }
        }
    }
}

/**
 * @description: 中序遍历
 * @param {type}
 * @return:
 */
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        node.show()
        inOrder(node.right);
    }
}

/**
 * @description: 先序遍历
 * @param {type}
 * @return:
 */
function preOrder(node) {
    if(!(nide == null)){
        node.show()
        preOrder(node.left)
        preOrder(node.right)
    }
}
var bst = new BST()
bst.insert(5)
bst.insert(3)
bst.insert(4)
bst.inOrder(bst.root)


