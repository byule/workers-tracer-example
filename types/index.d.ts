declare abstract class TraceEvent extends Event {
    readonly traces: TraceItem[];
    waitUntil(promise: Promise<any>): void;
  }
  
  interface TraceException {
    readonly timestamp: number;
    readonly message: string;
    readonly name: string;
  }
  
  interface TraceItem {
    readonly event: TraceItemFetchEventInfo | TraceItemScheduledEventInfo | null;
    readonly eventTimestamp: number | null;
    readonly logs: TraceLog[];
    readonly exceptions: TraceException[];
    readonly scriptName: string | null;
    readonly outcome: string;
  }
  
  interface TraceItemFetchEventInfo {
    readonly request: TraceItemFetchEventInfoRequest;
  }
  
  interface TraceItemFetchEventInfoRequest {
    readonly cf?: Record<string, unknown>;
    readonly headers: Record<string, string>;
    readonly method: string;
    readonly url: string;
    getUnredacted(): TraceItemFetchEventInfoRequest;
  }
  
  interface TraceItemScheduledEventInfo {
    readonly scheduledTime: number;
    readonly cron: string;
  }
  
  interface TraceLog {
    readonly timestamp: number;
    readonly level: string;
    readonly message: Object;
  }