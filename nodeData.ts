class NodeData {
  id: number
  type: string
  params: {
    content: {
      title: string;
      fontSize: number;
      fontWeight: number;
      fontName: string;
    },
    actions: {

    },
    styles: {
      darkTheme: boolean;
      type: string;
      state: string;
    }
  }
}