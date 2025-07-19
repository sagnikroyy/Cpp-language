/*Q. The n-queens puzzle is the problem of placing n queens on a (n × n) chessboard such that no two queens can attack each other. Note that two queens attack each other if they are placed on the same row, the same column, or the same diagonal.

Given an integer n, find all distinct solutions to the n-queens puzzle.
You can return your answer in any order but each solution should represent a distinct board configuration of the queen placements, where the solutions are represented as permutations of [1, 2, 3, ..., n]. In this representation, the number in the ith position denotes the row in which the queen is placed in the ith column.
For eg. below figure represents a chessboard [3 1 4 2].

*/

#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    vector<vector<int>> ans;

    bool isvalid(int row, int col, vector<vector<int>> &board) {
        int size = board.size();

        // Check column above
        for (int i = 0; i < row; i++) {
            if (board[i][col] == 1)
                return false;
        }

        // Check upper-left diagonal
        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 1)
                return false;
        }

        // Check upper-right diagonal
        for (int i = row - 1, j = col + 1; i >= 0 && j < size; i--, j++) {
            if (board[i][j] == 1)
                return false;
        }

        return true;
    }

    void solve(vector<vector<int>> &board, int row, vector<int> &curr) {
        int size = board.size();

        if (row >= size) {
            ans.push_back(curr);
            return;
        }

        for (int col = 0; col < size; col++) {
            if (isvalid(row, col, board)) {
                board[row][col] = 1;
                curr.push_back(col + 1);  // Using 1-based indexing
                solve(board, row + 1, curr);
                curr.pop_back();          // backtrack
                board[row][col] = 0;      // backtrack
            }
        }
    }

    vector<vector<int>> nQueen(int n) {
        ans.clear(); // Clear previous results if re-used
        vector<vector<int>> board(n, vector<int>(n, 0));
        vector<int> curr;
        solve(board, 0, curr);
        return ans;
    }
};
int main(){
    int n;
    cout << "Enter the value of N (for N-Queens): ";
    cin >> n;

    Solution sol;
    vector<vector<int>> results = sol.nQueen(n);

    cout << "Total solutions: " << results.size() << "\n\n";

    for (int i = 0; i < results.size(); ++i) {
        cout << "Solution " << i + 1 << ": ";
        for (int col : results[i]) {
            cout << col << " ";
        }
        cout << endl;
    }
    return 0;
}