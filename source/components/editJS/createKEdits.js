const createKEdits = ({attributes,sections,casc,trigger}) => {
  openKOverlay(trigger.editName,attributes,casc);
  const section = trigger.name
    .replace(/create-/,'');
  kOverlaySetup(trigger.editName,attributes,section,trigger.prefix);
  const templateAttrs = Object.keys(k.cascades)
    .filter(a => a.startsWith(`attr_repeating_${section}`));
  templateAttrs.forEach(a => {
    const attrName = a.replace(/attr_repeating_.+?_.+?_/,'');
    const cascObj = k.cascades[`attr_row_${attrName}`];
    if(cascObj){
      attributes[`row_${attrName}`] = cascObj.defaultValue;
    }
  });
};
k.registerFuncs({createKEdits});
