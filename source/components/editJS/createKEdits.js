const createKEdits = ({attributes,sections,casc,trigger}) => {
  openKOverlay(trigger.editName,trigger.prefix,attributes,casc);
  const section = trigger.name
    .replace(/create-/,'');
  kOverlaySetup(trigger.editName,attributes,section,trigger.prefix);
  kEditDisplays[trigger.editName][trigger.prefix]?.forEach(baseName => {
    const attrName = baseName.replace(`${trigger.editName}_edit_`,'');
    const cascObj = k.cascades[`attr_${baseName}`];
    if(cascObj){
      attributes[baseName] = cascObj.defaultValue;
    }
  });
};
k.registerFuncs({createKEdits});
