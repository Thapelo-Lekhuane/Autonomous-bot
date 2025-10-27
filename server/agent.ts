import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai" // For creating vector embeddings from text using Gemini
import { ChatGoogleGenerativeAI } from "@langchain/google-genai" // Google's Gemini AI model
import { AIMessage, BaseMessage, HumanMessage } from "@langchain/core/messages" // Message types for conversations
import {
  ChatPromptTemplate,      // For creating structured prompts with placeholders
  MessagesPlaceholder,     // Placeholder for dynamic message history
} from "@langchain/core/prompts"
import { StateGraph } from "@langchain/langgraph"              // State-based workflow orchestration
import { Annotation } from "@langchain/langgraph"              // Type annotations for state management
import { tool } from "@langchain/core/tools"                   // For creating custom tools/functions
import { ToolNode } from "@langchain/langgraph/prebuilt"       // Pre-built node for executing tools
import { MongoDBSaver } from "@langchain/langgraph-checkpoint-mongodb" // For saving conversation state
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb"   // Vector search integration with MongoDB
import { MongoClient } from "mongodb"                          // MongoDB database client
import { z } from "zod"                                        // Schema validation library
import "dotenv/config"                                         // Load environment variables from .env file
