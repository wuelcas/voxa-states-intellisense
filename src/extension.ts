import { languages, ExtensionContext } from "vscode";
import VoxaStatesCompletionItemProvider from "./VoxaStatesCompletionItemProvider";

export function activate(context: ExtensionContext) {
  const completionItemProvider = languages.registerCompletionItemProvider(
    { scheme: "file", pattern: "**/src/app/states/**/*.{ts,js}" },
    new VoxaStatesCompletionItemProvider(),
    ...['"', "'"], // 👈Trigger characters are quotation marks
  );
  context.subscriptions.push(completionItemProvider);
}

export function deactivate() {}
