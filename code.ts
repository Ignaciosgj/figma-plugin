function runPlugin() {
  console.log(getSelected());
}

function getSelected() {
  let selectedElement: any = figma.currentPage.selection[0];

  let objeto1 = {
    name: selectedElement.name,
    children: selectedElement.children
  }

  let customStyles = objeto1.children.map(node => {
    let styles = {
      darkTheme: node.variantProperties['Dark Theme'],
      state: node.variantProperties.State,
      type: node.variantProperties.Type,
      children: node.children
    }
    return styles;
  })

  let colorStyle = customStyles.map(node => {
    let colores = {
      color: node.children[0].backgrounds[0].color,
      opacity: node.children[0].backgrounds[0].opacity
    }
    return colores;
  })

  let stylesArray = [];

  for (let i = 0; i < objeto1.children.length; i++) {
    let stylesData = {
      name: objeto1.name,
      darkTheme: customStyles[i].darkTheme,
      type: customStyles[i].type,
      state: customStyles[i].state,
      color: colorStyle[i].color,
      opacity: colorStyle[i].opacity
    }
    stylesArray.push(stylesData)
  }

  return selectedElement;
}

runPlugin();