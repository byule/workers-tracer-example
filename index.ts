export default {
    async trace(traces: TraceItem[], _: unknown, ctx: ExecutionContext): Promise<void> {
        // Do something with the log line
        await fetch("https://exmaple.com", {method: "POST", body: JSON.stringify(traces)});
    },

    async fetch(request: Request, _: unknown, ctx: ExecutionContext): Promise<Response> {
        console.log("A log line");
        console.log("Another log line")

        return new Response("Hello Workers!")
    }
}