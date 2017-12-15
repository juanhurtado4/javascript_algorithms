class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        if (this.head === null) {
            return true
        }else {
            return false
        }
    }

    append(data) {
        const node = new Node(data)

        if (this.isEmpty() === true) {
            this.head = node
        }else {
            this.tail.next = node
        }
        this.tail = node
    }
}

let ll = new LinkedList()

ll.append('A')

console.log(ll)
ll.append('B')
console.log(ll)
// console.log(ll.head)
// console.log(ll.tail)
// console.log(ll.head.next)