const updateKOverlay = ({attributes,sections,casc,trigger}) => {
  const [section,id] = k.parseTriggerName(trigger.name);
  const row = `${section}_${id}`;
  openKOverlay(trigger.editName,trigger.prefix,attributes,casc);
  attributes[`k_edit_prefix_${trigger.editName.replace(/\s+|-/g,'_')}`] = row;
  const attrFilter = n => n.startsWith(row) && !n.endsWith('edit_row');
  kEditDisplays[trigger.editName][section]?.forEach(baseName => {
    const attrName = baseName .replace(`${trigger.editName}_edit_`,'');
    attributes[baseName] = attributes[`${row}_${attrName}`];
  })
};
k.registerFuncs({updateKOverlay});
