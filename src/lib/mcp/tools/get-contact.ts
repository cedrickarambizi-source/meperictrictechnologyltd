import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Returns contact details (website, WhatsApp, MEP calculator) for MEP Erictric Technology Ltd.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const contact = {
      website: "https://meperictrictech.com",
      contact_page: "https://meperictrictech.com/contact",
      mep_calculator: "https://mepestimatecalculator.vercel.app/",
      company_profile:
        "https://drive.google.com/file/d/1rSXmarbXMECfryBugomxR1DQU3jkHUec/view?usp=drive_link",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
      structuredContent: contact,
    };
  },
});