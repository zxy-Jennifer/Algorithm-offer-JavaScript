<<<<<<< HEAD
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
=======
/**
 * 
 * @param {*} root 
 */
function findMode(root) {
    let res = []
    if (!root) {
        return res
    }

    function backTrack(node, num) {
        if (!node) {

        }
    }
}
>>>>>>> 259f696d6c2c78bfc3f96aa9d579f538eef1beef
