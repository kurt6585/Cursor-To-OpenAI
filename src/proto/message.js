syntax = "proto3";

message ChatMessage {
  message UserMessage {
    string content = 1;
    int32 role = 2;
    string messageId = 13;
  }

  message Instructions {
    string instruction = 1;
  }

  message Model {
    string name = 1;
    bytes empty = 4;
  }

  repeated UserMessage userMessages = 2;
  Instructions instructions = 4;
  Model model = 7;
  int32 unknown13 = 13;
  string conversationId = 15;
  int32 unknown16 = 16;
  int32 unknown29 = 29;
  int32 unknown31 = 31;
}

message ResMessage {
  string content = 1;
  bytes empty = 4;
  string prompt = 5;
}

message AvailableModelsResponse { 
  message AvailableModel {
    string name = 1;
    bool default_on = 2;
    optional bool is_long_context_only = 3;
    optional bool is_chat_only = 4;
  }
  repeated AvailableModel models = 2;
  repeated string model_names = 1;
}

message MessageSummary {
  string content = 1;
  string summaryId1 = 2; 
  string summaryId2 = 3; // uuid, equal to summaryId1
  string previousSummaryId = 4; 
}

message StreamUnifiedChatWithToolsRequest {
  message Request {
    message Message {
      message Image {
        message Metadata {
          int32 width = 1;
          int32 height = 2;
        }
        bytes data = 1;
        Metadata metadata = 2;
      }
      string content = 1;
      int32 role = 2;
      Image image = 10;
      string messageId = 13;
      string summaryId = 32;
      MessageSummary summary = 39;
    }
    message Instruction {
      string instruction = 1;
    }
    message Model {
      string name = 1;
      bytes empty = 4;
    }

    message CursorSetting {
      message Unknown6 {
        bytes unknown1 = 1;
        bytes unknown2 = 2;
      }
      string name = 1;
      bytes unknown3 = 3;
      Unknown6 unknown6 = 6;
      int32 unknown8 = 8;
      int32 unknown9 = 9;
    }
    message Metadata {
      string os = 1; // win32
      string arch = 2; // x64
      string version = 3; // 10.0.22631
      string path = 4; // C:\Program Files\PowerShell\7\pwsh.exe
      string timestamp = 5; // 2025-03-03T13:10:08.590Z
    }
    message MessageId {
      string messageId = 1;
      string summaryId = 2;
      int32 role = 3;
    }

    repeated Message messages = 1;
    int32 unknown2 = 2; // 1
    Instruction instruction = 3;
    int32 unknown4 = 4; // 1
    Model model = 5;
    int32 unknown13 = 13;
    CursorSetting cursorSetting = 15;
    int32 unknown19 = 19; // 1
    int32 unknown22 = 22; // 1
    string conversationId = 23; // uuid
    Metadata metadata = 26;
    string unknown29 = 29;
    repeated MessageId messageIds = 30;
    int32 unknown35 = 35; // 1
    int32 unknown38 = 38; // 0
    int32 unknown46 = 46; // 1
    string unknown47 = 47; 
    int32 unknown48 = 48; // 1
  }
  
  Request request = 1;
}

message StreamUnifiedChatWithToolsResponse {
  message Message {
    string content = 1;
    string unknown22 = 22; // uuid
  }
  message Summary {
    string content = 1;
    string unknown2 = 2; // uuid
    string unknown3 = 3; // uuid, equal to unknown2
    string summaryId = 4; 
  }

  Message message = 2;
  Summary summary = 3;
}
