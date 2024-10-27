import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSelectedNode } from "@/context/selected-node-context";
import { instance } from "@/utils/axios";
import { BotMessageSquare, Send, X, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ChatBot() {
  const [prompt, setPrompt] = useState("");
  const [conversation, setConvesation] = useState([]);
  const { selectedNode } = useSelectedNode();
  const { orgId, mindmapId } = useParams();

  const fakeSelectedNode = [
    {
      "id": "A",
      "data": {"label":"📄 Đào Xuân Quý - Resume"}
    },
    {
      "id": "E",
      "data": {"label":"🌟 Giải thưởng | Thành tích"}
    }
  ]

  useEffect(() => {
    const fetchConversation = async () => {
      try {
        const response = await instance.get(`/conversation/${orgId}/${mindmapId}`);
        console.log('Fetch conversation:', response);
        setConvesation(response.data.data);
      } catch (error) {
        console.error('Error fetching conversation:', error);
      }
    }

    fetchConversation();
  }, []); // TODO: Add condition after send a prompt

  const handlePost = async () => {
    // try {
    //   console.log("OrgId: ", orgId, " MindmapId: ", mindmapId);
    //   const data = {
    //     prompt: prompt,
    //     selectedNode: fakeSelectedNode?.map((node) => ({
    //       id: node.id,
    //       name: node.data.label
    //     }))
    //   }
    //   console.log("data sending: ", data);
      
    //   if (!prompt) {
    //     return;
    //   }
    //   const response = await instance.post(`/conversation/${orgId}/${mindmapId}`, {
    //     prompt: prompt,
    //     selectedNode: fakeSelectedNode?.map((node) => ({
    //       id: node.id,
    //       name: node.data.label
    //     }))
    //   });
    //   console.log('Post success:', response.data);
    // } catch (error) {
    //   console.error('Error posting data:', error);
    // }
  };

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
          {conversation?.map((conversation) => (
            <div
              key={conversation._id}
              className={`flex items-start space-x-3 mb-2 p-3 rounded-lg shadow ${
                conversation.role === 'ai' ? 'bg-secondary text-black' : 'bg-primary text-white'
              }`}
            >
              <div className="size-8 flex items-center justify-center">
                {conversation.role === 'ai' ? <BotMessageSquare /> : <UserRound/>}
              </div>
              <div className="flex-1">
                <p className="text-sm">{conversation.content}</p>
                <small className="text-xs text-black-300 date-message">{new Date(conversation.created_at).toLocaleString()}</small>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
        <div className="flex space-x-2">
          <Input placeholder="Select node to explain then click on the Send button" onChange={(e) => setPrompt(e.target.value)} />
          <Button className="bg-blue-500 text-white" onClick={handlePost}>
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
