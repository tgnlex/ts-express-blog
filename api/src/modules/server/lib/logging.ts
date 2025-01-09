import Logger from "@/modules/logger/constructor";
import { tags } from "@/library/templates";

const log = {
  server: new Logger({level: 'signal', tag: tags.server}),
  proc: new Logger({level: 'signal', tag: tags.proc}),
  main: new Logger({level: 'info', tag: tags.main})
};



export default log;