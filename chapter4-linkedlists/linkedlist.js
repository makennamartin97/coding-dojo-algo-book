class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    //methods
    print(){
        console.log("Printing list...")
        let current = this.head;
        while(current){
            console.log(current.val)
            current = current.next
        }
        return current
    }
    //Given a pointer to the first node in a list, and a value, create a new node, connect it to the head of the list, and return a pointer to the list’s new head node.
    pushFront(val){
        let newnode = new Node(val)
        newnode.next = this.head
        this.head = newnode
        return this.head
    }
    //Given a pointer to the first node in a list, remove the head node and return the new list. If list is empty, return null.
    removeFront(){
        if(!this.head){
            return null
        }
        else{
            this.head = this.head.next
            return this.head
        }
        
    }
    //Return the ​value​ (not the node) at the head of the list. If list is empty, return null.
    getFront(){
        if(!this.head){
            console.log("There is no head")
            return null
        }else{
            console.log("Head:"+this.head.val)
            return this.head.val
        }
    }
    //Create a function that accepts a pointer to first list node, and returns number of nodes in sList.
    size(){
        let count = 0;
        if(!this.head){
            console.log("Length:"+count);
            return count
        }else{
            let current = this.head;
            while(current){
                count++;
                current = current.next;
            }
            console.log("Length:"+count);
            return count
        }
    }
    // Create a standalone function ​average(node)​ that returns (...wait for it ... ) the ​average​ of all values contained in that list.
    average(){
        let sum = 0;
        let length = 0;
        let curr = this.head
        while(curr){
            sum+=curr.val;
            length++
            curr = curr.next
        }
        let avg = sum/length
        console.log("Average:"+avg)
        return avg
    }

}

// create a list
let list = new LinkedList()
//create nodes
let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
//link them
list.head = node1
node1.next = node2
node2.next = node3
//print list
list.pushFront(5)
//list.removeFront()
list.getFront()
list.print()
list.size()
list.average()
