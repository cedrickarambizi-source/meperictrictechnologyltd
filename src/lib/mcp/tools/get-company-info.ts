import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Returns overview information about MEP Erictric Technology Ltd — a Rwanda-based MEP (mechanical, electrical, plumbing) and elevator contractor.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "MEP Erictric Technology Ltd",
      country: "Rwanda",
      website: "https://meperictrictech.com",
      focus:
        "MEP (mechanical, electrical, plumbing) contracting, elevator supply & installation, fire safety, CCTV & security, and building maintenance.",
      projects_completed: "26+",
      years_experience: "10+",
      clients: "100+ satisfied clients",
      government_institutions_served: [
        "MININTER",
        "MINAFFET Procurement Office",
        "NISR",
      ],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});