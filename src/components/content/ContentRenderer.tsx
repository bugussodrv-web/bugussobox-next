import { ContentBlock } from "@/types";

interface ContentRendererProps {
  blocks: ContentBlock[];
}

export default function ContentRenderer({ blocks }: ContentRendererProps) {
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            if (block.level === 3) {
              return <h3 key={i}>{block.text}</h3>;
            }
            return <h2 key={i}>{block.text}</h2>;

          case "paragraph":
            return (
              <p key={i} className="paragraph">
                {block.text.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < block.text.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
            );

          case "list":
            return block.ordered ? (
              <ol key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );

          case "table":
            return (
              <div key={i} className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      {block.head.map((h, j) => (
                        <th key={j}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "note":
            return (
              <div key={i} className="note">
                {block.text}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}