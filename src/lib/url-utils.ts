export const workLabelToSegment = (workLabel: string) => {
  return workLabel.toLowerCase().replace(/\s/g, '-');
};

export const segmentToWorkLabel = (segment: string) => {
  return segment.replace(/-/g, ' ');
};
