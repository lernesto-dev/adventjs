/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
    if(!tree1 && !tree2) return [true, undefined]
    if(tree1.value !== tree2.value) return [false, tree1.value]
    return [(isTreesSynchronized(tree1.left, tree2.right)[0] && 
    isTreesSynchronized(tree1.right, tree2.left)[0]), tree1.value]
}
    