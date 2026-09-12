class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        // maxqueue =  6 4 3 2 2
        // int leftover = 6 - 4 = 2
        // maxqueue.pop() ; 4 3 2 2
        // maxqueue.pop() ; 3 2 2
        // maxqueue.push(leftover) ; 3 2 2 2
        // leftover = 3 - 2 = 1;
        // maxqueue.pop() ; 3 2 2 2
        // maxqueue.pop() ; 3 2 2 2
        // maxqueue.push(leftover) ; 2 2 1
        // leftover = 2 - 2 = 0
        // if leftover < 1 , dont push
        // if queue.size() == 1; return queue[0]
        priority_queue<int> max_pq(stones.begin(), stones.end());

        while(max_pq.size() > 1){
            int stone1 = max_pq.top();
            max_pq.pop();
            int stone2 = max_pq.top();
            max_pq.pop();
            if(stone1 != stone2) {
                max_pq.push(abs(stone1 - stone2));
            }
        }

        return max_pq.empty() ? 0 : max_pq.top();
    }
};
