class Solution {
private:
    vector<vector<int>> grid;
    vector<vector<bool>> visited;
    int rows, cols;

    int dfs(int r, int c){
        if(r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] == 0) {
            return 1;
        }

        if(visited[r][c]) return 0;

        visited[r][c] = true;

        return dfs(r, c+1) + dfs(r+1, c) + dfs(r, c-1) + dfs(r-1, c);
    }
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        // only one island is there
        // grid[i][j] = 1 means land
        // grid[i][j] = 0 means water
        this->grid = grid;
        rows = grid.size();
        cols = grid[0].size();
        visited = vector<vector<bool>>(rows, vector<bool>(cols, false));

        for(int i=0; i<rows; ++i){
            for(int j=0; j<cols; ++j){
                if(grid[i][j] == 1){
                    return dfs(i, j);
                }
            }
        }

        return 0;
    }
};