class Node {
    //Variables
    data;
    next;
    // Constructor
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    // Variables
    head;
    size;
    //Constructors
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // Functions
    /**
     * Inserts to Head
     * @param {*number} data 
     */
    insertToHead(data){
        // No ES6 -- Regular Insertion
        let newNode = new Node(data,null);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    /**
     * Inserts To Tail
     */
    insertToTail(data){
        // New node
        let newNode = new Node(data,null);
        // Edge Case -- No node found
        if(!this.head){
            this.head = newNode;
        }
        else{
            let curr = this.head;
            // If the node does not have a next value
            // It is the last
            while(curr.next){
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.size++;
    }

    /**
     * Inserts at Index
     */
    insertatIndex(data,index){
        // If index === 0
        if(index === 0){
            this.insertToHead(data);
        }
        // Else if Index is out of bounds
        else if(index > this.size || index < 0){
            return;
        }
        // Else 
        else {
            let newNode = new Node(data);
            let prev = null;
            let curr = this.head;
            let count = 0;
            while(count < index){
                prev = curr;
                count++;
                curr = curr.next;
            }
            prev.next = newNode;
            newNode.next = curr;
            this.size++
        }
    }

    /**
     * Get The Data of an Index
     */
    getIndexData(index){
        // Edge Case -- Index Out of Range
        if(index < 0 || index > this.size){
            return;
        }
        let curr = this.head;
        let count = 0;
        while(count < index){
            curr = curr.next;
            count++;
        }
        return curr.data;
    }
    /**
     * Remove at Index
     * Hold a Prev & Next Values 
     */
    removeFromIndex(index){
        // Edge Case -- Out of Bounds
        if(index < 0 || index > this.size){
            return;
        }
        // If it is the first element
        if(index === 0){
            this.head = this.head.next;
            this.size--;
        }
        else{
            let prev = null;
            let curr = this.head;
            let count = 0;
            while(count < index){
                prev = curr;
                count++;
                curr = curr.next;
            }
            // Adjust
            prev.next = curr.next;
            this.size--;
        }

    }

    /**
     * Reverse A Linked List
     */
    reverse(){
        //Edge Cases
        let prev = null;
        let curr = this.head;
        while(curr){
            let tmp = curr.next; // Assign the Next
            curr.next = prev; // Swap
            // Iterate Prev and Curr
            prev = curr;
            curr = tmp;
        }
        this.head = prev;
    }

    /**
     * Print List
     */
    printList(){
        let tmp = this.head;
        while(tmp){
            console.log(tmp.data);
            tmp = tmp.next;
        }
    }
    /**
     * Gets Size
     */
    getSize(){
        return this.size;
    }
}

// Base Functions 
const ll = new LinkedList();
ll.insertToHead(5);
ll.printList();
console.log("**********");
ll.insertToHead(10);
ll.printList();
console.log("**********");
ll.insertToTail(20);
ll.insertToTail(30);
ll.printList();
console.log("---------")
console.log(ll.getSize())
console.log("---------")
ll.insertatIndex(15,3);
ll.printList();
console.log("---------")
console.log(ll.getIndexData(0))
console.log("---------")
ll.removeFromIndex(0);
ll.printList();
console.log("---------")
ll.removeFromIndex(1);
ll.printList();
console.log("**********")
ll.reverse();
ll.printList();
