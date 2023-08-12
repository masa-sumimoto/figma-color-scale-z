export function hasAllAvailableNodes(section: SceneNode[]) {
  if (section.length === 0) return false;

  return section.every((node) => {
    return node.type === "RECTANGLE" || node.type === "ELLIPSE";
  });
}
