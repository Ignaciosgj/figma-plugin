function runPlugin() {
  console.log(getSelected());
}

function getSelected() {
  let selectedElements: any = figma.currentPage.selection;

  return selectedElements.map((node, index) => {
    let nodeData: NodeData = {
      id: (index + 1),
      type: node.children[0]?.name || '',
      params: {
        content: {
          title: node.children[0]?.children[0]?.characters || '',
          fontSize: node.children[0]?.children[0]?.fontSize || '',
          fontWeight: node.children[0]?.children[0]?.fontWeight || '',
          fontName: node.children[0]?.children[0]?.fontName || ''
        },
        actions: {
          send: ''
        },
        styles: {
          darkTheme: node.variantProperties['Dark Theme'],
          type: node.variantProperties.Type,
          state: node.variantProperties.State,
        }
      }
    }
    // test();
    return nodeData;
  })
}
runPlugin();
