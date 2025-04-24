// TODO: MOVE ACCORDINGLY

// init object
export interface LineData {
    machines: Array<Machine>
};

// status update object
export interface StatusData {
    [k: string]: Status // machine: status
}

export enum Machine {
    Scale = "SCALE",
    Attacher = "ATTACHER",
    Packer = "PACKER",
    Closer = "CLOSER"
}

export enum Status {
    Running = "RUNNING",
    Alarm = "ALARM",
    Warn = "WARNING"
}