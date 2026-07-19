import { createElement } from "react";
import type {
  ArtikelContentNode,
  ArtikelTextNode,
} from "@/data/artikel";

function renderTextNode(node: ArtikelTextNode, key: string) {
  return (
    <span
      key={key}
      className={`${node.bold ? "font-semibold" : ""} ${
        node.italic ? "italic" : ""
      }`.trim()}
    >
      {node.text}
    </span>
  );
}

export function ArtikelContent({
  content,
}: {
  content: ArtikelContentNode[];
}) {
  return (
    <div className="prose prose-lg max-w-none">
      {content.map((node, index) => {
        if (node.type === "paragraph") {
          return (
            <p
              key={index}
              className="mb-6 text-sm leading-relaxed text-[#1c1c1c]/80 sm:text-base"
            >
              {node.children.map((child, childIndex) =>
                renderTextNode(child, `${index}-${childIndex}`)
              )}
            </p>
          );
        }

        if (node.type === "heading") {
          const headingClasses =
            node.level === 2
              ? "font-heading text-xl sm:text-2xl font-semibold mb-4 mt-2 text-[#1c1c1c]"
              : "font-heading text-lg sm:text-xl font-semibold mb-3 mt-2 text-[#1c1c1c]";

          return createElement(
            `h${node.level}`,
            { key: index, className: headingClasses },
            node.children.map((child, childIndex) =>
              renderTextNode(child, `${index}-${childIndex}`)
            )
          );
        }

        if (node.type === "list") {
          const ListTag = node.format === "ordered" ? "ol" : "ul";
          return createElement(
            ListTag,
            {
              key: index,
              className: `${
                node.format === "ordered" ? "list-decimal" : "list-disc"
              } mb-6 space-y-2 pl-6`,
            },
            node.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="text-sm leading-relaxed text-[#1c1c1c]/80 sm:text-base"
              >
                {item.map((child, childIndex) =>
                  renderTextNode(child, `${index}-${itemIndex}-${childIndex}`)
                )}
              </li>
            ))
          );
        }

        return null;
      })}
    </div>
  );
}
