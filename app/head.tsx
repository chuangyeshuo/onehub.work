export default function Head() {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://chuangyeshuo.github.io/onehub.work",
    name: "OneHub",
    description:
      "远程一人公司社区，连接独立开发者与企业需求，打造专属你的一人公司。从远程，轻松当老板。",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://chuangyeshuo.github.io/onehub.work/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      {/* canonical is handled by metadataBase in layout.tsx */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
      />
    </>
  );
}
