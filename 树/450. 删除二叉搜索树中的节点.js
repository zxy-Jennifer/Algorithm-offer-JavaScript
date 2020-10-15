/**
 *
 * @param {*} root
 * @param {*} key
 */
function deleteNode(root, key) {
  if (!root) {
    return null;
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    if (!root.left && !root.right) {
      root = null;
    } else if (root.left) {
      root.val = predecessor(root);
      root.left = deleteNode(root.left, root.val);
    } else {
      root.val = successor(root);
      root.right = deleteNode(root.right, root.val);
    }
  }
  return root;

  /**
   * 前缀
   * @param {*} root
   */
  function predecessor(root) {
    root = root.left;
    while (root.right) {
      root = root.right;
    }
    return root.val;
  }
  /**
   * 后缀
   * @param {*} root
   */
  function successor(root) {
    root = root.right;
    while (root.left) {
      root = root.left;
    }
    return root.val;
  }
}
