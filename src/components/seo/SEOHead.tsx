import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
}

const SITE_URL = "https://meperictrictechnologyltd.lovable.app";

const SEOHead = ({ title, description, canonical, type = "website" }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    if (canonical) {
      setMeta("property", "og:url", `${SITE_URL}${canonical}`);
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", `${SITE_URL}${canonical}`);
    }

    return () => {
      document.title = "MEPerictric Technology Ltd | Professional MEP & Elevator Solutions";
    };
  }, [title, description, canonical, type]);

  return null;
};

export default SEOHead;
