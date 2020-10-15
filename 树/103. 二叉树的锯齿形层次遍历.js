/**
 *
 * @param {*} root
 */
function zigzagLevelOrder(root) {
  let res = [];
  if (!root) {
    return res;
  }
  let q1 = [root];
  let q2 = [];
  while (q1.length || q2.length) {
    let path = [];
    if (q1.length) {
      while (q1.length) {
        let node = q1.pop();
        path.push(node.val);
        if (node.left) {
          q2.push(node.left);
        }
        if (node.right) {
          q2.push(node.right);
        }
      }
    } else {
      while (q2.length) {
        let node = q2.pop();
        path.push(node.val);
        if (node.right) {
          q1.push(node.right);
        }
        if (node.left) {
          q1.push(node.left);
        }
      }
    }

    res.push(path);
  }
  return res;
}
