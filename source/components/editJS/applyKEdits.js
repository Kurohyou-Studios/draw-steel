const applyKEdits = ({attributes,sections,casc,trigger}) => {
  const row = attributes[`k_edit_prefix_${trigger.editName.replace(/\s+|-/g,'_')}`];
  const [,section,rowID] = row.match(/(repeating_[^_]+)_([^_]+)/) || [];
  if(!sections[section].includes(rowID.toLowerCase())){
    sections[section].push(rowID);
  }
  const rowAttributes = Object.keys(k.cascades)
    .filter(a => a.startsWith(`attr_${section}`));
  rowAttributes.forEach(a => {
    const attrName = a.replace(/attr_repeating_.+?_.+?_/,'');
    attributes[`${row}_${attrName}`] = attributes[`${trigger.editName}_edit_${attrName}`];
  });
  closeKOverlay(trigger.editName,attributes);
  k.setActionCalls({attributes,sections});
};
k.registerFuncs({applyKEdits});
