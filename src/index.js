import './index.scss'
import TableField from "./components/TableField.vue"
import TableBlock from "./components/TableBlock.vue"

panel.plugin('bogdancondorachi/table-field', {
  fields: {
    table: TableField
  },
  blocks: {
    table: TableBlock
  },

  icons: {
    'table': '<path d="M3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3H3ZM11 5V8H4V5H11ZM4 14V10H11V14H4ZM4 16H11V19H4V16ZM13 16H20V19H13V16ZM20 14H13V10H20V14ZM20 5V8H13V5H20Z"></path>',
    'eraser': '<path d="M8.58564 8.85449L3.63589 13.8042L8.83021 18.9985L9.99985 18.9978V18.9966H11.1714L14.9496 15.2184L8.58564 8.85449ZM9.99985 7.44027L16.3638 13.8042L19.1922 10.9758L12.8283 4.61185L9.99985 7.44027ZM13.9999 18.9966H20.9999V20.9966H11.9999L8.00229 20.9991L1.51457 14.5113C1.12405 14.1208 1.12405 13.4877 1.51457 13.0971L12.1212 2.49053C12.5117 2.1 13.1449 2.1 13.5354 2.49053L21.3136 10.2687C21.7041 10.6592 21.7041 11.2924 21.3136 11.6829L13.9999 18.9966Z"></path>'
  }
})
