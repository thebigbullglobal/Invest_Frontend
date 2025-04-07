import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  TextField,
  Button,
  IconButton,
  Divider,
  Chip,
  Menu,
  MenuItem,
  Badge,
  Tooltip,
  useTheme,
  InputAdornment
} from '@mui/material';
import {
  Send as SendIcon,
  AttachFile as AttachFileIcon,
  InsertEmoticon as EmojiIcon,
  MoreVert as MoreIcon,
  Search as SearchIcon,
  CheckCircle as ReadIcon,
  Schedule as PendingIcon,
  Error as FailedIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  Delete as DeleteIcon,
  Reply as ReplyIcon,
  Forward as ForwardIcon,
  Archive as ArchiveIcon,
  Label as LabelIcon,
  Add as AddIcon,
  FormatBold as BoldIcon,
  FormatItalic as ItalicIcon,
  FormatUnderlined as UnderlineIcon,
  FormatListBulleted as ListIcon,
  FormatListNumbered as NumberedListIcon,
  InsertLink as LinkIcon,
  InsertPhoto as ImageIcon
} from '@mui/icons-material';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

const SendMessage = () => {
  const theme = useTheme();
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [templateAnchorEl, setTemplateAnchorEl] = useState(null);
  const [attachments, setAttachments] = useState([]);

  // Sample data
  const sampleMessages = [
    {
      id: 1,
      sender: 'John Doe',
      avatar: 'JD',
      content: 'Hi there, just checking in on the project status',
      time: '10:30 AM',
      date: 'Today',
      status: 'read',
      starred: true,
      labels: ['work']
    },
    {
      id: 2,
      sender: 'Jane Smith',
      avatar: 'JS',
      content: 'Meeting reminder at 2 PM tomorrow',
      time: 'Yesterday',
      date: 'May 15',
      status: 'read',
      starred: false,
      labels: ['meeting']
    },
    {
      id: 3,
      sender: 'Team Updates',
      avatar: 'TU',
      content: 'New company policy changes attached',
      time: 'May 14',
      date: 'May 14',
      status: 'unread',
      starred: false,
      labels: ['important']
    }
  ];

  const messageTemplates = [
    { id: 1, title: 'Quick Reply', content: 'Thanks for your message! I\'ll get back to you soon.' },
    { id: 2, title: 'Meeting Confirmation', content: 'I confirm our meeting at [time] on [date].' },
    { id: 3, title: 'Out of Office', content: 'I\'m currently out of office until [date]. For urgent matters, contact [name].' }
  ];

  useEffect(() => {
    setMessages(sampleMessages);
  }, []);

  const handleSendMessage = () => {
    if (!editorState.getCurrentContent().hasText()) return;
    
    const newMessage = {
      id: messages.length + 1,
      sender: 'You',
      avatar: 'ME',
      content: editorState.getCurrentContent().getPlainText(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: 'Just now',
      status: 'sent',
      starred: false
    };
    
    setMessages([newMessage, ...messages]);
    setEditorState(EditorState.createEmpty());
    setAttachments([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleTemplateSelect = (template) => {
    const contentState = editorState.getCurrentContent();
    const newContent = contentState.merge({
      text: template.content,
      selectionBefore: contentState.getSelectionBefore(),
      selectionAfter: contentState.getSelectionAfter()
    });
    setEditorState(EditorState.push(editorState, newContent, 'insert-characters'));
    setTemplateAnchorEl(null);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setAttachments([...attachments, ...files]);
  };

  const toggleStarred = (id) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, starred: !msg.starred } : msg
    ));
  };

  const handleRichCommand = (command) => {
    setEditorState(RichUtils.handleKeyCommand(editorState, command));
  };

  const filteredMessages = messages.filter(msg =>
    msg.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
    msg.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
      {/* Left sidebar - Message list */}
      <Paper elevation={3} sx={{ width: 350, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 2, borderBottom: `1px solid ₹{theme.palette.divider}` }}>
          <TextField
            fullWidth
            placeholder="Search messages..."
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        <List sx={{ flex: 1, overflow: 'auto' }}>
          {filteredMessages.map((message) => (
            <React.Fragment key={message.id}>
              <ListItem 
                button 
                selected={selectedMessage?.id === message.id}
                onClick={() => setSelectedMessage(message)}
                sx={{
                  '&:hover': { backgroundColor: theme.palette.action.hover },
                  backgroundColor: message.status === 'unread' ? theme.palette.action.selected : 'inherit'
                }}
              >
                <ListItemAvatar>
                  <Tooltip title={message.starred ? 'Remove star' : 'Add star'}>
                    <IconButton 
                      edge="start" 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStarred(message.id);
                      }}
                    >
                      {message.starred ? (
                        <StarIcon color="warning" />
                      ) : (
                        <StarBorderIcon />
                      )}
                    </IconButton>
                  </Tooltip>
                  <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                    {message.avatar}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="subtitle2" noWrap>
                        {message.sender}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {message.time}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" noWrap sx={{ maxWidth: '70%' }}>
                        {message.content}
                      </Typography>
                      {message.status === 'read' && (
                        <ReadIcon color="success" fontSize="small" />
                      )}
                      {message.status === 'unread' && (
                        <Badge color="primary" variant="dot" />
                      )}
                      {message.status === 'failed' && (
                        <FailedIcon color="error" fontSize="small" />
                      )}
                    </Box>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </Paper>

      {/* Right side - Message view and compose */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {selectedMessage ? (
          <>
            {/* Message view */}
            <Paper elevation={3} sx={{ p: 3, mb: 2, flex: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6">
                  {selectedMessage.sender}
                  {selectedMessage.labels?.map(label => (
                    <Chip 
                      key={label} 
                      label={label} 
                      size="small" 
                      sx={{ ml: 1 }} 
                      icon={<LabelIcon fontSize="small" />}
                    />
                  ))}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {selectedMessage.date} at {selectedMessage.time}
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                {selectedMessage.content}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                <Button startIcon={<ReplyIcon />} variant="outlined" sx={{ mr: 1 }}>
                  Reply
                </Button>
                <Button startIcon={<ForwardIcon />} variant="outlined" sx={{ mr: 1 }}>
                  Forward
                </Button>
                <IconButton onClick={() => toggleStarred(selectedMessage.id)}>
                  {selectedMessage.starred ? (
                    <StarIcon color="warning" />
                  ) : (
                    <StarBorderIcon />
                  )}
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
                <IconButton>
                  <ArchiveIcon />
                </IconButton>
              </Box>
            </Paper>
          </>
        ) : (
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h6" color="textSecondary">
              Select a message or compose a new one
            </Typography>
          </Box>
        )}

        {/* Message compose */}
        <Paper elevation={3} sx={{ p: 2 }}>
          <Box sx={{ mb: 2 }}>
            {attachments.length > 0 && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {attachments.map((file, index) => (
                  <Chip
                    key={index}
                    label={file.name}
                    onDelete={() => setAttachments(attachments.filter((_, i) => i !== index))}
                    variant="outlined"
                    size="small"
                  />
                ))}
              </Box>
            )}
            
            <Box sx={{ 
              border: `1px solid ₹{theme.palette.divider}`,
              borderRadius: 1,
              p: 1,
              minHeight: 150,
              mb: 1
            }}>
              <Editor
                editorState={editorState}
                onChange={setEditorState}
                handleKeyCommand={handleRichCommand}
                placeholder="Type your message here..."
              />
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
         
              
              <Button 
                variant="contained" 
                endIcon={<SendIcon />}
                onClick={handleSendMessage}
                disabled={!editorState.getCurrentContent().hasText()}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default SendMessage;