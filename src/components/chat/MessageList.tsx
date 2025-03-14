import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Message } from "ai";

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <Card key={message.id}>
          <CardHeader>
            <CardTitle className="text-lg">
              {message.role === "user" ? "Pytanie:" : "Odpowiedź:"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-2 whitespace-pre-wrap text-muted-foreground prose dark:prose-invert max-w-none">
              {message.role === "assistant" ? (
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {message.content}
                </ReactMarkdown>
              ) : (
                message.content
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
