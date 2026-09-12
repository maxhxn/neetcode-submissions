class KthLargest {
private:
    vector<int> heap;
    int k;
    int parent(int i) {
        return (i - 1)/2;
    }
    int left(int i){
        return 2 * i + 1;
    }
    int right(int i){
        return 2 * i + 2;
    }
public:
    KthLargest(int k, vector<int>& nums) {
        //constructor
        this->heap = {};
        this->k = k;

        for(int n : nums){
            add(n);
        }
    }
    
    int add(int val) {
        //insert into heap
        /*
        - append element to heap
        - implement heapify:
            - start from the end
            - compare the each element to it's parent and swap
        - return the 0 index in heap
        */
        heap.push_back(val);

        int i = heap.size() - 1;
        while(i > 0){
            if(heap[i] < heap[parent(i)]){
                int temp = heap[i];
                heap[i] = heap[parent(i)];
                heap[parent(i)] = temp;
                i = parent(i);
            } else {
                break;
            }
        }

        int j = 0;
        if(heap.size() > k){
            heap[0] = heap.back();
            heap.pop_back();
            while(left(j) < heap.size()){
                int sm = left(j);
                int r = right(j);
                if(r < heap.size() and heap[r] < heap[sm]){
                    sm = r;
                }
                if(heap[j] > heap[sm]){
                    int temp = heap[j];
                    heap[j] = heap[sm];
                    heap[sm] = temp;
                    j = sm;
                } else {
                    break;
                }
            }
        }
        // 1 2 3 3 3 5 6 7 8
        // 8 7 6 5 3 3 3 2 1
        return heap[0];
    }
};
