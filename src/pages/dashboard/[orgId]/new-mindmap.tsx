"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Upload, WandSparkles } from "lucide-react"
import SparklesText from "@/components/ui/sparkles-text"
import { Link } from "react-router-dom"

export default function NewMindmapPage() {
    const [thoughts, setThoughts] = useState("")
    const [file, setFile] = useState<File | null>(null)
    const [link, setLink] = useState("")

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6 flex items-center justify-center flex-col h-full">
            <h1 className="text-5xl font-bold text-center">
                Turn everything into a <SparklesText text="Mindmap" />
            </h1>

            <Textarea
                placeholder="Write your thoughts here to generate a mindmap"
                value={thoughts}
                onChange={(e) => setThoughts(e.target.value)}
                className="min-h-[200px] text-lg p-4"
            />

            <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-100 rounded-lg">
                    <span className="text-lg font-semibold">
                        Additional documents
                    </span>
                    <ChevronDown className="h-5 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-gray-50 rounded-lg mt-2">
                    <Tabs defaultValue="upload" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="upload">
                                Upload file
                            </TabsTrigger>
                            <TabsTrigger value="link">Paste link</TabsTrigger>
                        </TabsList>
                        <TabsContent value="upload" className="mt-4">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="flex-grow"
                                />
                                <Button size="icon">
                                    <Upload className="h-4 w-4" />
                                </Button>
                            </div>
                            {file && (
                                <p className="mt-2 text-sm text-gray-500">
                                    {file.name}
                                </p>
                            )}
                        </TabsContent>
                        <TabsContent value="link" className="mt-4">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="url"
                                    placeholder="Paste your link here"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    className="flex-grow"
                                />
                                <Button>Add</Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CollapsibleContent>
            </Collapsible>

            <p className="text-sm text-gray-500 text-center">
                Any information generated from AI may not be absolutely
                accurate, please verify before use
            </p>

            <div className="flex justify-end space-x-4">
                <Button variant="outline" asChild>
                    <Link to={"/dashboard/abc"}>Cancel</Link>
                </Button>
                <Button asChild>
                    <Link to={"/editor/abc"}>
                        <WandSparkles className="size-4 mr-2" />
                        Generate
                    </Link>
                </Button>
            </div>
        </div>
    )
}
