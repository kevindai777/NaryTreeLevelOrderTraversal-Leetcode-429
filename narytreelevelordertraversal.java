//Java Solution

class Solution {
    
    List<List<Integer>> result = new ArrayList<>();
    
    public List<List<Integer>> levelOrder(Node root) {
        dfs(root, 0);
        return result;
    }
    
    private void dfs(Node node, int depth) {
        if (node == null) {
            return;
        }
        
        if (result.size() <= depth) {
            result.add(new ArrayList<>());
        }
        result.get(depth).add(node.val);
        
        for (Node child : node.children) {
            dfs(child, depth + 1);
        }
    }
}