# Architecture rules

- Maintain site-wide typography through the shared CSS font tokens and Tailwind type scale; headings use the display stack and interface text uses the body stack so every page follows one system.
- Resolve proprietary Apple fonts from the device, with a bundled Inter fallback; do not distribute SF font files without a supplied licensed asset.