# JS-StructuresAndAlgorithms
This Collection contains multiple JavaScript files.

### References:
https://leetcode.com/

### Mapping:
| Leetcode Name | Filename      |
| ------------- | ------------- |
| 1. TwoSum  | TwoSum.js  |
| 9. Palindrome Number  | Palindrom.js  |
| 14. Longest Common Prefix  | LongestCommonPrefix.js |
| 20. Valid Parentheses  | ValidParentheses.js  |
| 21. Merge Two Sorted Lists  | MergeTwoSortedLists.js |
| 26. Remove Duplicates from Sorted Array  | RemoveDuplicatesFromSortedArray.js  |
| 27. Remove Element  | RemoveElement.js  |
| 28. Find the Index of the First Occurrence in a String  | FirstOccurrenceInAString.js  |
| 35. Search Insert Position  | SearchInsertPosition.js  |
| 58. Length of Last Word  | LengthOfLastWord.js  |
| 66. Plus One  | PlusOne.js  |
| 67. Plus One  | AddBinary.js  |
| 67. Sqit(x) (square root)  | Sqrt.js  |
| 70. Climbin Stairs  | ClimbinStaris.js  |
| 83. Remove Duplicates From Sorted List  | RemoveDuplicatesFromSortedList.js  |
| 88. Merge A Sorted Array  | MergeSortedArray.js  |
| 121. Best Time to Buy and Sell Stock  | BestTimeToBuyAndSellStock.js  |
| 125. Valid Palindrome  | ValidPalindrome.js  |
| 126. Single Number  | SingleNumber.js  |
| 168. Excel Sheet Column Title  | ExcelSheetColumnTitle.js  |
| 205. Isomorphic Strings | IsomorphicStrings.js  |
| 228. Summary Ranges | SummaryRanges.js  |
| 242. Valid Anagram | ValidAnagram.js  |
| 258. Add Digit | AddDigit.js  |
| 268. Missing Number | MissingNumber.js  |
| 268. First Bad Version | FirstBadVersion.js  |
| 283. Move Zeros | MoveZeros.js  |
| 283. Move Zeros | MoveZeros.js  |
| 292. Nim Game | NimGame.js  |
| 303. Range Sum Query - Imutable | RageSumQuery-Imutable.js  |
| 326. Power Of Three | PowerOfThree.js  |
| 342. Power Of Four | PowerOfFour.js  |
| 344. Reverse String | ReverseString.js  |
| 344. Reverse Vocals of A String | ReverseVocalsOfAString.js  |
| 349. Intersection of Two Arrays | IntersectionOfTwoArrays.js  |
| 350. Intersection of Two Arrays II | IntersectionOfTwoArrays_II.js  |
| 367. Valid Perfect Square | ValidPerfectSquare.js  |
| 374. Guess Number Higher Or Lower | GuessNumber.js  |
| 389. Find The Difference | FindTheDifference.js  |
| 392. Is Subsquence | IsSubsequence.js  |
| 405. Convert a Number to Hexadecimal | ConvertANumberToHex.js  |
| 409. Longest Palindrome | LongestPalindrome.js  |
| 412. FizzBuzz | FizzBuzz.js  |
| 414. Third Maximum of Number | ThirdMaximumOfNumber.js |
| 415. Add Strings | AddStrings.js |
| 434. Number of Segments in a String | NumberOfSegmentsInString.js |
| 441. Arranging Coins | ArrangingCoins.js |
| 448. Find All Numbers Disappeared in an Array | FindAllNumbersDisappearedInArray.js |
| 445. Assign Cookies | AssignCookies.js |
| 459. Repeated Substring Pattern | RepeatedSubstringPattern.js |


---
# Binary Tree`s (How To):
<img width="779" alt="Screenshot 2024-02-07 at 21 49 07" src="https://github.com/weristdominik/JS-StructuresAndAlgorithms/assets/47948163/8193d9ec-8bf9-444c-a493-df25fbdd4e9e">



### Code of ALL Traversel(s) of Binary Tree above:
```
class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

 

// Root of Binary Tree
var root = null;

function printInorder(node) {

    if (node == null) {
        return;
    }

    printInorder(node.left);
    console.log(node.key + " ");
    printInorder(node.right);

}

 

function printPreorder(node) {
    if(node == null) {
        return;
    }

    console.log(node.key + " ");
    printPreorder(node.left);
    printPreorder(node.right);
}

 

function printPostorder(node) {

    if(node == null) {
        return;
    }

    printPostorder(node.left);
    printPostorder(node.right);
    console.log(node.key + " ");
}

 

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

 

console.log("Inorder traversal of binary tree is ");
console.log(printInorder(root)); //Printing Inorder Traversal
console.log("------------------------------------");
console.log(printPreorder(root)); //Printing PreOrder Traversal
console.log("------------------------------------");
console.log(printPostorder(root)); //Printing PostOrder Traversal

```


### Invert A Binary Tree:
```
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var invertTree = function(root) {
    if(!root) return root;

    let tmp = root.left;
    root.left = root.right;
    root.right = tmp

    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};

let root = null;
root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
console.log(invertTree(root));
```

### Get Height Binary Tree:
```
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var diameterOfBinaryTree = function (root) {
    if (!root.left && !root.right) return 0;
    let lheight = height(root.left);
    let rheight = height(root.right);

    function height(node) {
        if(!node) return 0;
        return 1 + Math.max(height(node.left), height(node.right));
    }

    return [lheight, rheight]; //WITHOUT the Root!
};

let root = null;
root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);
console.log(diameterOfBinaryTree(root));
```


### Get Diameter of Binary Tree:
```
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var diameterOfBinaryTree = function (root) {
    if(!root) return 0;
    let max = 0;

    var dfs = function(node) {
        if(!node) return 0;
    
        let left = dfs(node.left);
        let right = dfs(node.right);
    
        max = Math.max(left+right, max);
        return Math.max(left, right) +1;
    };

    dfs(root);
    return max;
};

let root = null;
root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);
console.log(diameterOfBinaryTree(root));
```

## ./BinaryTree
| Leetcode Name | Filename      |
| ------------- | ------------- |
| 94. Binary Tree Inorder Traversal  | BinaryTreeInorderTraversal.js  |
| 100. Same Tree  | SameTree.js  |
| 101. Symmetric Tree  | SymmetricTree.js  |
| 104. Maximum Depth of Binary Tree  | MaxDepthOfBinaryTree.js  |
| 108. Convert Sorted Array to Binary Search Tree  | ConvertSortedArrayToBinarySearchTree.js  |
| 110. Balanced Binary Tree | BalancedBinaryTree.js |
| 110. BMinimum Depth of Binary Tree | MinimumDepthOfBinaryTree.js |
| 112. Path Sum | PathSum.js |
| 144. Binary Tree Preorder Traversal | BinaryTreePreorderTraversal.js |
| 145. Binary Tree Postorder Traversal | BinaryTreePostorderTraversal.js |
| 222. Count Complete Tree Nodes | CountcompleteNodes.js |
| 226. Invert Binary Tree | InvertBinaryTree.js |
| 257. Binary Tree Paths | BinaryTreePaths.js |
| 404. Sum of Left Leaves | SumOfLeftLeaves.js |


---
# Pascal`s Triangle:
![image](https://github.com/weristdominik/JS-StructuresAndAlgorithms/assets/47948163/a5541cce-0657-46f7-b091-b52e25bb06e7)

```
/**
 * @param {number} numRows
 * @return {number[][]}
 * 
 * 
 * (x+y)^n
 */
var generate = function(numRows) {
    let triangle = [[1]];

    if(numRows == 1) return triangle;
    
    for (i = 1; i < numRows; i++) {
        let prevRow = triangle[i - 1];
        let row = [];
        
        row.push(1);
        for (j = 1; j < prevRow.length; j++) {
            row[j] = prevRow[j] + prevRow[j - 1];
        }
        row.push(1);

        triangle.push(row);
    }

    return triangle;
};

const numRows = 5;
console.log(generate(numRows));
```

## ./PascalsTriangle
| Leetcode Name | Filename      |
| ------------- | ------------- |
| 118. Pascal`s Triangle  | PascalsTriangle.js  |
| 119. Pascal`s Triangle II | PascalsTriangle_II.js  |

---
# Linked Lists:
![image](https://github.com/weristdominik/JS-StructuresAndAlgorithms/assets/47948163/439f3687-352b-4157-9e48-6633ea09116d)

### Interate through Linked List:
```
while (list && list.next) {
    console.log(list.val);
    list = list.next;
}
```

### Delete from Linked List (./LinkedList/RemoveLinkedList.js)
```
function ListNode(val) {
    this.val = val;
    this.next = null;
}


var removeElements = function (head, val) {

    if (!head) {
        return head;
    }

    let list = head;

    while (list && list.next) {
        if (list.next.val == val) {
            list.next = list.next.next;
        } else {
            list = list.next;
        }
    }

    return head.val === val ? head.next : head;
};

const headA = new ListNode(6);
headA.next = new ListNode(2);
headA.next.next = new ListNode(6);
headA.next.next.next = new ListNode(3);
headA.next.next.next.next = new ListNode(4);
headA.next.next.next.next.next = new ListNode(5);
headA.next.next.next.next.next.next = new ListNode(6);
const val = 6;
console.log(removeElements(headA, val));
```

### Reverse Linked List (./LinkedList/ReverseLinkedList.js):
```
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reverseLinkedList = function (head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    return head;
}

const headA = new ListNode(1);
headA.next = new ListNode(2);
headA.next.next = new ListNode(3);
headA.next.next.next = new ListNode(4);
headA.next.next.next.next = new ListNode(5);
console.log(reverseLinkedList(headA));
```

## ./LinkedList
| Leetcode Name | Filename      |
| ------------- | ------------- |
| 141. Linked List Cycle | LinkedListCycle.js  |
| 206. Reverse Linked List | ReverseLinkedList.js |
| 234. Palindrome Linked List | PalindromeLinkedList.js  |


---

# HashMap:
![image](https://github.com/weristdominik/JS-StructuresAndAlgorithms/assets/47948163/d384198b-1d9e-414d-afc1-3230391b82d2)


### Display HashMap
```
const showHashMap = (nums) => {

    let hashMap = {}; //create new hashMap

    //Loop through Array
    for (i = 0; i < nums.length; i++) {
        //Count each nums[i] if duplicate IF NOT then just add to hashMap with initial 1
        if (hashMap[nums[i]]) { //if nums[i] value is found in hashMap
            hashMap[nums[i]] = hashMap[nums[i]] + 1; //count hashMap[key] + 1;
        } else {
            hashMap[nums[i]] = 1; //Add inital with 1
        }
    }

    console.log(hashMap);

    for (const key in hashMap) {
        console.log("Key: " + key);
        console.log("KeyValue: " + hashMap[key]);
        console.log("-------------");
    }

    const nums = [2, 2, 1, 1, 1, 2, 2, 5, 5, 6, 7, 8, 8, 8];
    console.log(showHashMap(nums));
```

### largest value in HashMap
```
    //Additional find in hashMap biggest KeyValue Pair:
    for (const key in hashMap) {
        if (hashMap[key] > 2) { //KeyValue bigger than 2
            console.log("Key: " + key);
            console.log("KeyValue: " + hashMap[key]);
        }
    }
};
```

## ./HashMap
| Leetcode Name | Filename      |
| ------------- | ------------- |
| 169. Majority Element | MajorityElement.js  |
| 217. Contains Duplicate | ContainsDuplicate.js |
| 219. Contains Duplicate II | ContainsDuplicate_II.js |
| 290. Word Pattern | WordPattern.js  |
| 383. Ransome Node | RansomeNote.js  |
| 387. First Unique Character in String | FirstUniqueCharInString.js  |



---

# Bitwise Operators
The opposite of 'logical Operators'. Bitwise Operators are used to compare Bits (0/ 1)!

![image](https://github.com/weristdominik/JS-StructuresAndAlgorithms/assets/47948163/a5f56afc-f041-453e-b8be-ffd006ab92a0)


## ./BitwiseOperators
| Leetcode Name | Filename      |
| ------------- | ------------- |
| 190. Reverse Bits | ReverseBits.js  |
| 191. Number Of 1 Bits | NumberOf1Bits.js  |
| 338. Counting Bits | CountingBits.js  |

---

# Stacks
Using Array like Data Structore to archive FIFO (First IN First OUT) OR LIFO (Las IN First OUT) Data delivery.

### FIFO_StackOverview:
```
class MyQueue {
    constructor() {
        this.items = []
    }

    push(x) {
        this.items.push(x);
    }

    pop() {
        let r = this.items.shift();
        return r;
    }

    peek() {
        if (this.items.length === 0) return null;
        let r = this.items[0];
        return r;
    }

    empty() {
        return this.items.length === 0;
    }
}
```


### LIFO StackOverview:
```
class Stack {
    constructor() {
        this.items = []
        this.count = 0;
    }

    //Add Into Stack
    push(x) {
        this.items[this.count] = x;
        this.count += 1;
        return this.count - 1;
    }

    //Remove Top Element from Stack
    pop() {
        if (this.count == 0) return;
        let r = this.items[this.count - 1];
        count -= 1;
        return r;
    }

    //Check Top Element in Stack
    peek() {
        return this.items[this.count];
    }

    //Check if Stack is Empty
    isEmpty() {
        return this.items == 0;
    }
}
```

## ./Stacks
| Leetcode Name | Filename      |
| ------------- | ------------- |
| 225. Implement Stacks Using Queues | ImplementStacksUsingQueues.js |
| 232. Implement Queues Using Stacks | ImplementQueuesUsingStacks.js  |

--- 

#### Regex:
| Regex | Explanation      |
| ------------- | ------------- |
| /^[a-z0-9]$/  | a - z AND 0 - 9  |
| /^[a-z]$/  | a - z |
| /^[a-zA-Z0-9]$/  | a - z AND A - Z AND 0 -9 |
| /([^\s]+)/g  | Array of Strings that are not Whitespace |

```
function isLowerCaseOrDigit(char) {
  return /^[a-z0-9]$/.test(char);
}
```

---

### Maths
| Leetcode Name | Filename      | Math       |
| ------------- | ------------- | ------------- |
| 67. Sqit(x) (square root)  | Sqrt.js  | Square Root |
| 231. Power Of Two  | PowerOfTwo.js  | Logarithmus |
| 326. Power Of Three | PowerOfThree.js | Logarithmus |
| 342. Power Of Four | PowerOfFour.js | Logarithmus |
| 263. Ugly Number  | IsUgly.js  | prime factorization |
| 367. Valid Perfect Square | ValidPerfectSquare.js  | Square Root |



---

#### I don`t know how this Works:
| Leetcode Name | Filename      |
| ------------- | ------------- |
| 160. Intersection of Two Linked Lists  | ./LinkedList/IntersectionOfTwoLinkedLists.js  |
