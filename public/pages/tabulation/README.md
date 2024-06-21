### What is Tabulation?

Tabulation is a dynamic programming technique that involves solving problems by breaking them down into smaller subproblems and storing the results of these subproblems in a table (usually an array). This avoids redundant calculations and improves efficiency. The process is usually done in a bottom-up manner, meaning you solve the smallest subproblems first and use their results to build up solutions to larger subproblems.

### Tabulation vs. Memoization

-   **Tabulation**: Solves problems iteratively and stores results in a table (array) in a bottom-up approach.
-   **Memoization**: Solves problems recursively and stores results in a cache (usually a hash map or dictionary) to avoid redundant calculations in a top-down approach.

### Fibonacci Sequence with Tabulation

The Fibonacci sequence is a classic example of a problem that can be efficiently solved using tabulation. The Fibonacci sequence is defined as:

-   `F(0) = 0`
-   `F(1) = 1`
-   `F(n) = F(n-1) + F(n-2)` for `n >= 2`

Using tabulation, we can iteratively fill an array with the Fibonacci numbers up to `F(n)`.

### Steps in Tabulation for Fibonacci Sequence

1.  **Initialization**: Create an array `table` of size `n+1` and initialize the first two Fibonacci numbers: `table[0] = 0` and `table[1] = 1`.
2.  **Iteration**: Use a loop to fill the array with Fibonacci numbers from `2` to `n`, using the relation `table[i] = table[i-1] + table[i-2]`.
3.  **Result**: The value of `table[n]` will be the nth Fibonacci number.