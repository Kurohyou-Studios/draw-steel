const updateKOverlay = ({attributes,sections,casc,trigger}) => {
  const [section,id] = k.parseTriggerName(trigger.name);
  const row = `${section}_${id}`;
  openKOverlay(trigger.editName,attributes,casc);
  kOverlaySetup(trigger.editName,attributes,section,trigger.prefix);
  const attrFilter = n => n.startsWith(row) && !n.endsWith('edit_row');
  const rowAttributes = [...new Set([...Object.keys(attributes.attributes).filter(attrFilter),...Object.keys(attributes.updates).filter(attrFilter)])];
  rowAttributes.forEach(attr =>{
    const attrName = attr.replace(`${row}_`,'');
    attributes[`row_${attrName}`] = attributes[attr];
  });
};
k.registerFuncs({updateKOverlay});
