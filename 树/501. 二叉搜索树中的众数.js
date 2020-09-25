/**
 *
 * @param {*} root
 */
function findMode(root) {
  let res = [];
  let maxNum = 0;
  let current = 0;
  let count = 0;
  if (!root) {
    return res;
  }
  inOrderTraversal(root);
  return res;

  function inOrderTraversal(root) {
    if (!root) {
      return root;
    }
    inOrderTraversal(root.left);
    handle_node(root);
    inOrderTraversal(root.right);
  }
  function handle_node(node) {
    let nodeVal = node.val;
    if (nodeVal === current) {
      count++;
    } else {
      current = nodeVal;
      count = 1;
    }
    if (count === maxNum) {
      res.push(nodeVal);
    } else if (count > maxNum) {
      maxNum = count;
      res = [nodeVal];
    }
  }
}
