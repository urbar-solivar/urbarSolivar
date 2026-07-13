CMS.registerEditorComponent({
  id: "pdf",
  label: "PDF",
  fields: [
    {name: "id", label: "Google Drive ID", widget: "string"}
  ],
  pattern: /^{% include pdf.html id="(\S+)" type="(\S+)" %}$/,
  fromBlock: function(match) {
    return { id: match[1] };
  },
  toBlock: function(obj) {
    // Toto vygeneruje: {% include pdf.html id="1bA0..." type="embed" %}
    return `{% include pdf.html id="${obj.id}" type="${obj.type}" %}`;
  },
  Preview: function(obj) {
    return `<iframe src="https://drive.google.com/file/d/${obj.id}/preview" width="100%" height="300px"></iframe>`;
  },
});