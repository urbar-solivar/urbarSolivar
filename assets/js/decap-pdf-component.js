CMS.registerEditorComponent({
  id: "pdf",
  label: "PDF",
  fields: [
    {name: "id", label: "Google Drive ID", widget: "string"}
  ],
  pattern: /^{% pdf "(\S+)" %}$/,
  fromBlock: function(match) {
    return { id: match[1] };
  },
  toBlock: function(obj) {
    return `{% pdf "${obj.id}" %}`;
  },
  toPreview: function(obj) {
    return `<iframe src="https://drive.google.com/file/d/${obj.id}/preview" width="100%" height="300px"></iframe>`;
  },
});