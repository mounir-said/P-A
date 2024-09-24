function rainTerraces(heights) {
  if (!heights || heights.length < 3) return 0; // Less than 3 terraces cannot trap any water

  const n = heights.length;
  let leftMax = new Array(n).fill(0);
  let rightMax = new Array(n).fill(0);
  let waterTrapped = 0;

  // Fill leftMax array with maximum heights from the left
  leftMax[0] = heights[0];
  for (let i = 1; i < n; i++) {
      leftMax[i] = Math.max(leftMax[i - 1], heights[i]);
  }

  // Fill rightMax array with maximum heights from the right
  rightMax[n - 1] = heights[n - 1];
  for (let i = n - 2; i >= 0; i--) {
      rightMax[i] = Math.max(rightMax[i + 1], heights[i]);
  }

  // Calculate the water trapped above each terrace
  for (let i = 0; i < n; i++) {
      // Water trapped on the current terrace is the minimum of max heights minus its own height
      waterTrapped += Math.min(leftMax[i], rightMax[i]) - heights[i];
  }

  return waterTrapped;
}

// Example usage
const terraceHeights = [3, 1, 1, 4, 2];
console.log(rainTerraces(terraceHeights)); // Output: 4
