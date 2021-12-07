import {
  sendPseudoterminalExecuteRequest,
  sendPseudoterminalWriteRequest,
} from './requests';

export const execute = async (
  command: string,
  options:
    | {
        env: Record<string, string> | undefined;
        directory: string | undefined;
        isPipelined: boolean | undefined;
        backgroundJob: boolean | undefined;
      }
    | undefined
) =>
  sendPseudoterminalExecuteRequest({
    command: command,
    isPipelined: options?.isPipelined ?? false,
    backgroundJob: options?.backgroundJob ?? true,
    workingDirectory: options?.directory,
    env: [],
  });

export const write = async (text: string): Promise<void> =>
  sendPseudoterminalWriteRequest({
    input: {
      $case: 'text',
      text: text,
    },
  });
