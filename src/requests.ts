/* Autogenerated by generate-requests.ts on 10/12/2021
 * Do not edit directly! Instead run 'npm run generate-requests'
 */

import {
    ContentsOfDirectoryRequest,
    ContentsOfDirectoryResponse,
    GetSettingsPropertyRequest,
    GetSettingsPropertyResponse,
    InsertTextRequest,
    PositionWindowRequest,
    PositionWindowResponse,
    PseudoterminalExecuteRequest,
    PseudoterminalExecuteResponse,
    PseudoterminalWriteRequest,
    ReadFileRequest,
    ReadFileResponse,
    UpdateApplicationPropertiesRequest,
    UpdateSettingsPropertyRequest,
    WriteFileRequest
} from "./fig";
import { sendMessage } from "./core"

export const sendPositionWindowRequest = async (
    request: PositionWindowRequest
): Promise<PositionWindowResponse> =>
    new Promise((resolve, reject) => {
        sendMessage(
            { $case: "positionWindowRequest", positionWindowRequest: request },
            (response) => {
                switch (response?.$case) {
                    case "positionWindowResponse":
                        resolve(response.positionWindowResponse);
                        break;
                    case "error":
                        reject(Error(response.error));
                        break;
                    default:
                        reject(
                            Error(
                                "Invalid response '" + response?.$case + "' for 'PositionWindowRequest'"
                            )
                        );
                }
            }
        );
    });

export const sendPseudoterminalExecuteRequest = async (
    request: PseudoterminalExecuteRequest
): Promise<PseudoterminalExecuteResponse> =>
    new Promise((resolve, reject) => {
        sendMessage(
            { $case: "pseudoterminalExecuteRequest", pseudoterminalExecuteRequest: request },
            (response) => {
                switch (response?.$case) {
                    case "pseudoterminalExecuteResponse":
                        resolve(response.pseudoterminalExecuteResponse);
                        break;
                    case "error":
                        reject(Error(response.error));
                        break;
                    default:
                        reject(
                            Error(
                                "Invalid response '" + response?.$case + "' for 'PseudoterminalExecuteRequest'"
                            )
                        );
                }
            }
        );
    });

export const sendReadFileRequest = async (
    request: ReadFileRequest
): Promise<ReadFileResponse> =>
    new Promise((resolve, reject) => {
        sendMessage(
            { $case: "readFileRequest", readFileRequest: request },
            (response) => {
                switch (response?.$case) {
                    case "readFileResponse":
                        resolve(response.readFileResponse);
                        break;
                    case "error":
                        reject(Error(response.error));
                        break;
                    default:
                        reject(
                            Error(
                                "Invalid response '" + response?.$case + "' for 'ReadFileRequest'"
                            )
                        );
                }
            }
        );
    });

export const sendContentsOfDirectoryRequest = async (
    request: ContentsOfDirectoryRequest
): Promise<ContentsOfDirectoryResponse> =>
    new Promise((resolve, reject) => {
        sendMessage(
            { $case: "contentsOfDirectoryRequest", contentsOfDirectoryRequest: request },
            (response) => {
                switch (response?.$case) {
                    case "contentsOfDirectoryResponse":
                        resolve(response.contentsOfDirectoryResponse);
                        break;
                    case "error":
                        reject(Error(response.error));
                        break;
                    default:
                        reject(
                            Error(
                                "Invalid response '" + response?.$case + "' for 'ContentsOfDirectoryRequest'"
                            )
                        );
                }
            }
        );
    });

export const sendGetSettingsPropertyRequest = async (
    request: GetSettingsPropertyRequest
): Promise<GetSettingsPropertyResponse> =>
    new Promise((resolve, reject) => {
        sendMessage(
            { $case: "getSettingsPropertyRequest", getSettingsPropertyRequest: request },
            (response) => {
                switch (response?.$case) {
                    case "getSettingsPropertyResponse":
                        resolve(response.getSettingsPropertyResponse);
                        break;
                    case "error":
                        reject(Error(response.error));
                        break;
                    default:
                        reject(
                            Error(
                                "Invalid response '" + response?.$case + "' for 'GetSettingsPropertyRequest'"
                            )
                        );
                }
            }
        );
    });

export const sendPseudoterminalWriteRequest = async (
    request: PseudoterminalWriteRequest
): Promise<void> =>
    new Promise((resolve, reject) => {
        sendMessage(
            { $case: "pseudoterminalWriteRequest", pseudoterminalWriteRequest: request },
            (response) => {
                switch (response?.$case) {
                    case "success":
                        resolve();
                        break;
                    case "error":
                        reject(Error(response.error));
                        break;
                    default:
                        reject(
                            Error(
                                "Invalid response '" + response?.$case + "' for 'PseudoterminalWriteRequest'"
                            )
                        );
                }
            }
        );
    });


export const sendWriteFileRequest = async (
    request: WriteFileRequest
): Promise<void> =>
    new Promise((resolve, reject) => {
        sendMessage(
            { $case: "writeFileRequest", writeFileRequest: request },
            (response) => {
                switch (response?.$case) {
                    case "success":
                        resolve();
                        break;
                    case "error":
                        reject(Error(response.error));
                        break;
                    default:
                        reject(
                            Error(
                                "Invalid response '" + response?.$case + "' for 'WriteFileRequest'"
                            )
                        );
                }
            }
        );
    });


export const sendUpdateSettingsPropertyRequest = async (
    request: UpdateSettingsPropertyRequest
): Promise<void> =>
    new Promise((resolve, reject) => {
        sendMessage(
            { $case: "updateSettingsPropertyRequest", updateSettingsPropertyRequest: request },
            (response) => {
                switch (response?.$case) {
                    case "success":
                        resolve();
                        break;
                    case "error":
                        reject(Error(response.error));
                        break;
                    default:
                        reject(
                            Error(
                                "Invalid response '" + response?.$case + "' for 'UpdateSettingsPropertyRequest'"
                            )
                        );
                }
            }
        );
    });


export const sendInsertTextRequest = async (
    request: InsertTextRequest
): Promise<void> =>
    new Promise((resolve, reject) => {
        sendMessage(
            { $case: "insertTextRequest", insertTextRequest: request },
            (response) => {
                switch (response?.$case) {
                    case "success":
                        resolve();
                        break;
                    case "error":
                        reject(Error(response.error));
                        break;
                    default:
                        reject(
                            Error(
                                "Invalid response '" + response?.$case + "' for 'InsertTextRequest'"
                            )
                        );
                }
            }
        );
    });


export const sendUpdateApplicationPropertiesRequest = async (
    request: UpdateApplicationPropertiesRequest
): Promise<void> =>
    new Promise((resolve, reject) => {
        sendMessage(
            { $case: "updateApplicationPropertiesRequest", updateApplicationPropertiesRequest: request },
            (response) => {
                switch (response?.$case) {
                    case "success":
                        resolve();
                        break;
                    case "error":
                        reject(Error(response.error));
                        break;
                    default:
                        reject(
                            Error(
                                "Invalid response '" + response?.$case + "' for 'UpdateApplicationPropertiesRequest'"
                            )
                        );
                }
            }
        );
    });


