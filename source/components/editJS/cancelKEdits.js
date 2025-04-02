const cancelKEdits = ({attributes,sections,casc,trigger}) => {
  closeKOverlay(trigger.editName,attributes);
};
k.registerFuncs({cancelKEdits});
