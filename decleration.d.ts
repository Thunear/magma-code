declare module "*.css";

declare global {
  /**
   * We define all IPC APIs here to give devs auto-complete
   * use window.electron anywhere in app
   * Also note the capital "Window" here
   */
  interface Window {
    electron: {
      blenderVersion: (blenderFile: string) => Promise<string>;
    };
  }
}
