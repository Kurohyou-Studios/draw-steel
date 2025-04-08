const applyKEdits = ({attributes,sections,casc,trigger}) => {
  const row = attributes[`k_edit_prefix_${trigger.editName.replace(/\s+|-/g,'_')}`];
  const [,section,rowID] = row.match(/(repeating_[^_]+)_([^_]+)/) || [];
  if(!sections[section].includes(rowID.toLowerCase())){
    sections[section].push(rowID);
  }
  kEditDisplays[trigger.editName][section]?.forEach(baseName => {
    const attrName = baseName.replace(`${trigger.editName}_edit_`,'');
    if(casc[`attr_${baseName}`]){
      attributes[`${row}_${attrName}`] = attributes[baseName];
    }
  });
  closeKOverlay(trigger.editName,attributes);
  k.setActionCalls({attributes,sections});
};
k.registerFuncs({applyKEdits});
