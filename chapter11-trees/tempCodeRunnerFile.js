class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
        this.count = 1
    }
}
class BST{
    constructor(){
        this.root = null
    }
    //Create an add(val) method on the bst object to add a new value to the 
    //tree. This entails creating a btNode with this value and connecting 
    //it at the appropriate place in the tree. Note: BSTs can contain duplicate 
    //values.
    add(val){
        //chack if there is a root
        if(!this.root){
            
            this.root = new Node(val)
        }else{
            //compare val to each node and move accordingly
            let runner = this.root
            while(runner){
                //if the vals the same as the runner, add to the count
                if(val === runner.val){
                    runner.count++
                    break
                //if the values less..
                }else if(val < runner.val){
                    //if there is no left node, create the new node in its spot
                    if(!runner.left){
                        runner.left = new Node(val)
                        break
                    // if there is a node there, move the runner
                    }else{
                        runner = runner.left
                    }
                }else{
                    //check if theres a right node
                    if(!runner.right){
                        //if not, add new one there
                        runner.right = new Node(val)
                        break
                    }else{
                        //if there is a node there, move the runner
                        runner = runner.right
                    }
                }

            }
        }
    }
    //Create a contains(val) bst method that returns whether the tree contains 
    //a given value. Take advantage of the BST’s structure to make this a much
    //more rapid operation than sList.contains() would be.
    contains(val){
        if(!this.root){
            console.log("false")
            return false
        }else{
            let runner = this.root
            while(runner){
                if(runner.val === val){
                    console.log("true")
                    return true
                }else if(val < runner.val){
                    runner = runner.left
                }else{
                    runner = runner.right
                }
            }
            console.log("false")
            return false
        }
    }
    //Write a size() method that returns the number of nodes (values) contained 
    //in the tree.
    size(){
        //check if there is a root node
        if(!this.root){
            return 0
        }
        //creating a function to recursively count each node
        function check(node){
            if(node === null){
                return 0
            }
            return 1 + check(node.left) + check(node.right)
        }
        return check(this.root)
    }

}
let tree1 = new BST()
let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
tree1.root = node2
node2.left = node1
node2.right = node3
tree1.add(4)
tree1.add(1)
console.log(tree1)
tree1.contains(4)
tree1.contains(5)
console.log(tree1.size())