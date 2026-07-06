import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "Lists the MEP and building technology services offered by MEP Erictric Technology Ltd.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const services = [
      { name: "Elevator supply & installation", detail: "Passenger and freight elevators for residential, commercial, hospital, and government buildings." },
      { name: "Electrical installation", detail: "Building electrical works, switchgear, transformers, MV/LV cabling, and generators." },
      { name: "Fire safety systems", detail: "Fire alarm and firefighting system design and installation." },
      { name: "CCTV & security", detail: "CCTV cameras, access control, and IP telephony networks." },
      { name: "Plumbing", detail: "Building plumbing and water systems." },
      { name: "Transmission & street lighting", detail: "Power transmission line and public lighting projects." },
      { name: "Maintenance", detail: "Ongoing maintenance of MEP and elevator systems." },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
      structuredContent: { services },
    };
  },
});