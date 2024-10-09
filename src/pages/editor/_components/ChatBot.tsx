import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BotMessageSquare, Send, X } from "lucide-react";

export default function ChatBot() {
  return (
    <Tabs defaultValue="explain">
      <div className=" flex justify-between items-center">
        <h2 className="text-base font-bold">Chat with AI</h2>
        <Button variant="ghost" size="icon">
          <X className="h-4 w-4" />
        </Button>
      </div>
      <TabsList className="flex flex-row space-x-2">
        <TabsTrigger className="w-full rounded-sm" value="explain">
          Explain
        </TabsTrigger>
        <TabsTrigger className="w-full" value="edit">
          Edit
        </TabsTrigger>
      </TabsList>
      <TabsContent value="explain">
        <ScrollArea className="h-[33.5rem]">
          <div className="p-3 flex-1">
            <div className="flex items-start space-x-3">
              <div className="size-8  flex items-center justify-center">
                <BotMessageSquare />
              </div>
              <div className="bg-white p-3 rounded-lg shadow">
                <p className="text-sm">
                  Hello explain! I'm the AI chatbot. Please select the node you
                  want to explain then click on the Send button.
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
        <div className="flex space-x-2">
          <Input placeholder="Select node to explain then click on the Send button" />
          <Button className="bg-blue-500 text-white">
            <Send className="size-4" />
          </Button>
        </div>
      </TabsContent>
      <TabsContent value="edit">
        <ScrollArea className="h-[33.5rem]">
          <div className="p-3 flex-1">
            <div className="flex items-start space-x-3">
              <div className="size-8  flex items-center justify-center">
                <BotMessageSquare />
              </div>
              <div className="bg-white p-3 rounded-lg shadow">
                <p className="text-sm">
                  Hello edit! I'm the AI chatbot. Please select the node you
                  want to explain then click on the Send button.
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
        <div className="flex space-x-2">
          <Input placeholder="Select node to explain then click on the Send button" />
          <Button className="bg-blue-500 text-white">
            <Send className="size-4" />
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}
