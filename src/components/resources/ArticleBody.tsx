import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ArticleBodyProps = {
  markdown: string;
};

const components: Components = {
  h2: ({ children }) => <h2 className="article-body-heading">{children}</h2>,
  h3: ({ children }) => <h3 className="article-body-heading article-body-heading--sub">{children}</h3>,
  p: ({ children }) => <p className="article-body-paragraph">{children}</p>,
  blockquote: ({ children }) => (
    <blockquote className="article-body-quote">{children}</blockquote>
  ),
  ul: ({ children }) => <ul className="article-body-list">{children}</ul>,
  ol: ({ children }) => <ul className="article-body-list">{children}</ul>,
  li: ({ children }) => <li>{children}</li>,
};

export function ArticleBody({ markdown }: ArticleBodyProps) {
  return (
    <div className="article-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
