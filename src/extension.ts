import { languages, ExtensionContext, workspace, RelativePattern } from "vscode";
import VoxaStatesCompletionItemProvider from "./VoxaStatesCompletionItemProvider";

export function activate(context: ExtensionContext) {
  if (workspace.workspaceFolders) {
    const pattern = new RelativePattern(workspace.workspaceFolders[0], "src/app/states/**/*.{ts,js}");

    const completionItemProvider = languages.registerCompletionItemProvider(
      { scheme: "file", pattern },
      new VoxaStatesCompletionItemProvider(),
      ...['"', "'"], // 👈Trigger characters are quotation marks
    );
    context.subscriptions.push(completionItemProvider);
  }
}

export function deactivate() {}
