class Node {
    public:
    int val;
    Node* next;
    Node(int val) : val(val), next(nullptr) {}
    Node(int val, Node* next) : val(val), next(next) {}
};
class LinkedList {
private:
    Node* head;
    Node* tail;
public:
    LinkedList() {
        head = new Node(-1);
        tail = head;
    }

    int get(int index) {
        Node* temp = head->next;
        int i = 0;
        while(temp != nullptr) {
            if(i == index){
                return temp->val;
            }
            i++;
            temp = temp->next;
        }
        return -1;
    }

    void insertHead(int val) {
        Node* newNode = new Node(val);
        newNode->next = head->next;
        head->next = newNode;
        if(newNode->next == nullptr) tail = newNode;
    }
    
    void insertTail(int val) {
        Node* newNode = new Node(val);
        tail->next = newNode;
        tail = tail->next;
    }

    bool remove(int index) {
        int i=0;
        Node* temp = head;
        while(i < index and temp != nullptr){
            i++;
            temp = temp->next;
        }
        if(temp != nullptr and temp->next != nullptr){
            if(temp->next == tail) tail = temp;
            Node* toDelete = temp->next;
            temp->next = temp->next->next;
            delete toDelete;
            return true;
        }
        return false;
    }

    vector<int> getValues() {
        vector<int> linkedVals;
        Node* temp = head->next;
        while(temp != nullptr){
            linkedVals.push_back(temp->val);
            temp = temp->next;
        }
        return linkedVals;
    }
};
