class TreeNode {
    constructor(data,left=null,right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}


class BinarySearchTree {
    constructor(root){
        this.root = root;
        this.size = 0;
    }

    // Methods
    insert(val){
        this.root = this.insertToBST(this.root,val);
    }
    /**
     * Deletion outside Access
     * @param {*} val 
     */
    delete(val){
        this.root = this.deleteTreeNode(this.root,val);
        this.size--;
    }
    /**
     * Insert method
     * @param {*} root 
     * @param {*} val 
     * @returns 
     */
    insertToBST(root,val){
        if(!root){
            return new TreeNode(val);
        }
        else if(val < root.data){
            root.left = this.insertToBST(root.left,val);
        }
        else if(val > root.data){
            root.right = this.insertToBST(root.right,val);
        }
        return root;
    }
    /**
     * Deletion from Tree
     * @param {*} root 
     * @param {*} val 
     * @returns 
     */
    deleteTreeNode(root,val){
        if(!root){
            return null;
        }
        else if(val > root.data){
            root.right = this.deleteTreeNode(root.right,val);
        }
        else if(val < root.data){
            root.left = this.deleteTreeNode(root.left,val);
        }
        else {
            // found the node to be deleted
            if(!root.left){
                return root.right;
            }
            else if(!root.right){
                return root.left;
            }
            else{
                let lm = root.right;
                while(lm.left){
                    lm = lm.left;
                }
                root.data = lm.data;
                root.right = this.deleteTreeNode(root.right,root.data);
            }
        }
        return root;
    }


    traverse(string){
        if(string === "preorder"){
            this.preorder(this.root);
        }
        else if(string === "inorder"){
            this.inorder(this.root);
        }
    }
    /**
     * 
     * @param {*} root 
     * @returns 
     */
    preorder(root){
        if(!root){
            return;
        }
        console.log(root.data);
        this.preorder(root.left);
        this.preorder(root.right);
    }

    inorder(root){
        if(!root){
            return;
        }
        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);
    }

}
const readlineSync = require('readline-sync');

function main(){
    let x = new BinarySearchTree();
    let userInput = 0;
    console.log("Binary Search Tree Implementation -- Commands are as below")
    while(userInput !== "5"){
        console.log("1 --> Insert");
        console.log("2 --> Delete");
        console.log("3 --> Preorder");
        console.log("4 --> Inorder");
        console.log("5 --> Exit");
        userInput = readlineSync.question('Enter command: ');
        if(userInput === "1"){
            let data = readlineSync.question('Enter data to insert: ');
            x.insert(parseInt(data));
        }
        else if(userInput === "2"){
            let data = readlineSync.question('Enter data to delete: ');
            x.delete(parseInt(data));
        }
        else if(userInput === "3"){
            console.log("----------");
            x.traverse("preorder")
            console.log("----------");
        }
        else if(userInput === "4"){
            console.log("----------");
            x.traverse("inorder")
            console.log("----------");
        }
    }   
}

main();

