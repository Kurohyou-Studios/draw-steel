const updateKOverlay = ({attributes,sections,casc,trigger}) => {
  const [section,id] = k.parseTriggerName(trigger.name);
  const row = `${section}_${id}`;
  openKOverlay(trigger.editName,trigger.prefix,attributes,casc);
  attributes[`k_edit_prefix_${trigger.editName.replace(/\s+|-/g,'_')}`] = row;
  const attrFilter = n => n.startsWith(row) && !n.endsWith('edit_row');
  const rowAttributes = [...new Set([...Object.keys(attributes.attributes).filter(attrFilter),...Object.keys(attributes.updates).filter(attrFilter)])];
  rowAttributes.forEach(attr =>{
    const attrName = attr.replace(`${row}_`,'');
    attributes[`${trigger.editName.replace(/\s+|-/g,'_')}_edit_${attrName}`] = attributes[attr];
  });
};
k.registerFuncs({updateKOverlay});
