class ListNode {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    _length = 0;
    _head = null;

    get size() {
        return this._length;
    }

    get head() {
        return this._head
    }

    getTail() {
        if (!this._head) {
            return null;
        }

        let tail = this._head;
        while (tail.next) {
            tail = tail.next;
        }

        return tail;
    }

    add(element) {
        const node = new ListNode(element);
        const tail = this.getTail();
        if (!tail) {
            this._head = node;
        } else {
            tail.next = node;
        }

        this._length++;
    }

    remove(element) {
        let currentNode = this._head;
        let previousNode = null;

        while (currentNode) {
            if(currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            } else {
                (previousNode)
                    ? previousNode.next = currentNode.next
                    : this._head = currentNode.next;


                this._length--;
                return true;
            }
        }

        return false;
    };
}

const list = new LinkedList();

console.log('Add 10 elements from 1 to 10');

for(let i = 1; i <= 10; i++) {
    list.add(i);
}

console.log(`Current size - ${list.size}`);

const existedElements = [3,4];
const notExistedElements = [-1, 30];

for(const element of [...existedElements, ...notExistedElements]) {
    const removed = list.remove(element);
    console.log(`Element ${element} ${(removed) ? `was` : 'was not'} removed. Current size - ${list.size}`)
}
