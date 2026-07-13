CMS.registerEditorComponent({
  id: "pdf",
  label: "PDF",
  fields: [
    { name: "source", label: "URL adresa alebo Google Drive ID", widget: "string" },
    { 
      name: "type", 
      label: "Typ zobrazenia", 
      widget: "select", 
      options: [
        { label: "Vložený dokument (Embed)", value: "embed" },
        { label: "Odkaz (Link)", value: "link" }
      ],
      default: "embed"
    }
  ],
  pattern: /^{% include pdf.html source="([^"]*)" type="([^"]*)" %}$/,
  fromBlock: function(match) {
    return { source: match[1], type: match[2] };
  },
  toBlock: function(obj) {
    return `{% include pdf.html source="${obj.source}" type="${obj.type}" %}`;
  },
  toPreview: function(obj) {
    return `<div style="padding: 10px; background: #eee; border: 1px solid #ccc;">
              <strong>PDF:</strong> ${obj.source} (${obj.type})
            </div>`;
  },
});