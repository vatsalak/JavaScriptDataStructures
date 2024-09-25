class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex (node) to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge (connection) between two vertices (undirected graph)
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);  // Since it's undirected, connect both ways
        }
    }

    // Remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                v => v !== vertex2
            );
        }

        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                v => v !== vertex1
            );
        }
    }

    // Remove a vertex from the graph
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    // Depth-First Search (DFS) - Recursive
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);

        return result;
    }

    // Depth-First Search (DFS) - Iterative
    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }

        return result;
    }

    // Breadth-First Search (BFS)
    breadthFirstSearch(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}
// Create a new graph
const g = new Graph();

// Add vertices
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

// Add edges (connections)
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log("Adjacency List:");
console.log(g.adjacencyList);

// DFS Traversal (Recursive)
console.log("DFS Recursive:", g.depthFirstRecursive("A"));  // Output: ['A', 'B', 'D', 'E', 'C', 'F']

// DFS Traversal (Iterative)
console.log("DFS Iterative:", g.depthFirstIterative("A"));  // Output: ['A', 'C', 'E', 'F', 'D', 'B']

// BFS Traversal
console.log("BFS:", g.breadthFirstSearch("A"));  // Output: ['A', 'B', 'C', 'D', 'E', 'F']

// Remove edge between 'D' and 'E'
g.removeEdge("D", "E");
console.log("After removing edge between D and E:", g.adjacencyList);

// Remove vertex 'E'
g.removeVertex("E");
console.log("After removing vertex E:", g.adjacencyList);
