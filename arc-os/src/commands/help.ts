export function showHelp(): void {
  console.log(`
ARC OS

Usage:
  arc <command>

Core commands:
  help                         Show available commands
  version                      Show ARC OS version
  doctor                       Check the ARC environment

Platform commands:
  module new <module name>     Scaffold a HOLY ARC module

Client commands:
  client new <client name>     Create a private client workspace

Report commands:
  report help                  Show report commands
  report new                   Create a report
  report list                  List reports
  report open                  Open a report
  report review                Move a report into review
  report approve               Approve a reviewed report
  report export                Export an approved report
  report sent                  Mark a report as sent
  report archive               Archive a completed report

Future command groups:
  docs
  git
  product
  knowledge
  studio
`);
}