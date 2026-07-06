import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfo from "./tools/get-company-info";
import listServices from "./tools/list-services";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "mep-erictric-mcp",
  title: "MEP Erictric Technology",
  version: "0.1.0",
  instructions:
    "Public information tools for MEP Erictric Technology Ltd — a Rwanda-based MEP and elevator contractor. Use get_company_info for an overview, list_services for the services catalog, and get_contact_info for website and contact links.",
  tools: [getCompanyInfo, listServices, getContact],
});