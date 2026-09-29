impl Solution {
    pub fn has_duplicate(nums: Vec<i32>) -> bool {
        let mut temp = HashSet::new();
        for &num  in &nums {
            if !temp.insert(num) {
                return true;
            }
        }
        false
    }
}
