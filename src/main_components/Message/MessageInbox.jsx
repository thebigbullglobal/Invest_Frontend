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
  Badge,
  Tooltip,
  useTheme,
  InputAdornment,
  Checkbox,
  Tabs,
  Tab
} from '@mui/material';
import {
  Refresh as RefreshIcon,
  Archive as ArchiveIcon,
  Delete as DeleteIcon,
  MarkAsUnread as MarkAsUnreadIcon,
  WatchLater as WatchLaterIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  Label as LabelIcon,
  Mail as MailIcon,
  Send as SendIcon,
  Drafts as DraftsIcon,
  Report as SpamIcon,
  Error as ErrorIcon,
  Search as SearchIcon,
  MoreVert as MoreIcon
} from '@mui/icons-material';

const MessageInbox = () => {
  const theme = useTheme();
  const [messages, setMessages] = useState([]);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTab, setCurrentTab] = useState('inbox');
  const [anchorEl, setAnchorEl] = useState(null);

  // Sample data
  const sampleMessages = [
    {
      id: 1,
      sender: 'John Doe',
      email: 'john@example.com',
      avatar: 'JD',
      subject: 'Project Update - Q2 Results',
      preview: 'Here are the latest results for our Q2 project...',
      time: '10:30 AM',
      date: 'Today',
      status: 'unread',
      starred: true,
      labels: ['work', 'important'],
      folder: 'inbox'
    },
    {
      id: 2,
      sender: 'Amazon',
      email: 'no-reply@amazon.com',
      avatar: 'AZ',
      subject: 'Your order has shipped',
      preview: 'Your recent order #12345 has been shipped...',
      time: 'Yesterday',
      date: 'May 15',
      status: 'read',
      starred: false,
      labels: ['shopping'],
      folder: 'inbox'
    },
    {
      id: 3,
      sender: 'LinkedIn',
      email: 'notifications@linkedin.com',
      avatar: 'LI',
      subject: 'New connection request',
      preview: 'You have 5 new connection requests waiting...',
      time: 'May 14',
      date: 'May 14',
      status: 'read',
      starred: false,
      labels: ['social'],
      folder: 'inbox'
    },
    {
      id: 4,
      sender: 'GitHub',
      email: 'noreply@github.com',
      avatar: 'GH',
      subject: 'Security alert for your repository',
      preview: 'We detected a potential security vulnerability...',
      time: 'May 13',
      date: 'May 13',
      status: 'unread',
      starred: true,
      labels: ['work', 'urgent'],
      folder: 'inbox'
    },
    {
      id: 5,
      sender: 'Netflix',
      email: 'info@netflix.com',
      avatar: 'NF',
      subject: 'New shows added to your list',
      preview: 'Check out the new shows we just added based on...',
      time: 'May 12',
      date: 'May 12',
      status: 'read',
      starred: false,
      labels: ['entertainment'],
      folder: 'inbox'
    },
    {
      id: 6,
      sender: 'You',
      email: 'me@example.com',
      avatar: 'ME',
      subject: 'Draft: Project proposal',
      preview: 'Here is the draft for the upcoming project...',
      time: 'May 10',
      date: 'May 10',
      status: 'read',
      starred: false,
      labels: ['draft'],
      folder: 'drafts'
    },
    {
      id: 7,
      sender: 'You',
      email: 'me@example.com',
      avatar: 'ME',
      subject: 'Meeting notes',
      preview: 'Attached are the notes from yesterday meeting...',
      time: 'May 8',
      date: 'May 8',
      status: 'read',
      starred: true,
      labels: ['work'],
      folder: 'sent'
    }
  ];

  useEffect(() => {
    setMessages(sampleMessages);
  }, []);

  const handleSelectMessage = (id) => {
    setSelectedMessages(prev =>
      prev.includes(id) 
        ? prev.filter(messageId => messageId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAllMessages = () => {
    if (selectedMessages.length === filteredMessages.length) {
      setSelectedMessages([]);
    } else {
      setSelectedMessages(filteredMessages.map(message => message.id));
    }
  };

  const toggleStarred = (id, e) => {
    e.stopPropagation();
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, starred: !msg.starred } : msg
    ));
  };

  const markAsRead = (ids) => {
    setMessages(messages.map(msg => 
      ids.includes(msg.id) ? { ...msg, status: 'read' } : msg
    ));
    setSelectedMessages([]);
  };

  const deleteMessages = (ids) => {
    setMessages(messages.filter(msg => !ids.includes(msg.id)));
    setSelectedMessages([]);
  };

  const moveToFolder = (ids, folder) => {
    setMessages(messages.map(msg => 
      ids.includes(msg.id) ? { ...msg, folder } : msg
    ));
    setSelectedMessages([]);
  };

  const filteredMessages = messages.filter(msg => 
    msg.folder === currentTab &&
    (msg.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
     msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
     msg.preview.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)' }}>
      {/* Header with tabs */}
      <Paper elevation={3} sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Tabs 
            value={currentTab} 
            onChange={(e, newValue) => setCurrentTab(newValue)}
            sx={{ minHeight: 'auto' }}
          >
            <Tab 
              icon={<MailIcon fontSize="small" />} 
              iconPosition="start" 
              label="Inbox" 
              value="inbox" 
              sx={{ minHeight: 'auto', py: 1 }} 
            />
            <Tab 
              icon={<SendIcon fontSize="small" />} 
              iconPosition="start" 
              label="Sent" 
              value="sent" 
              sx={{ minHeight: 'auto', py: 1 }} 
            />
            <Tab 
              icon={<DraftsIcon fontSize="small" />} 
              iconPosition="start" 
              label="Drafts" 
              value="drafts" 
              sx={{ minHeight: 'auto', py: 1 }} 
            />
            <Tab 
              icon={<SpamIcon fontSize="small" />} 
              iconPosition="start" 
              label="Spam" 
              value="spam" 
              sx={{ minHeight: 'auto', py: 1 }} 
            />
            <Tab 
              icon={<ErrorIcon fontSize="small" />} 
              iconPosition="start" 
              label="Trash" 
              value="trash" 
              sx={{ minHeight: 'auto', py: 1 }} 
            />
          </Tabs>
          
          <Box>
            <Tooltip title="Refresh">
              <IconButton>
                <RefreshIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="More options">
              <IconButton onClick={handleMenuClick}>
                <MoreIcon />
              </IconButton>
            </Tooltip>
            {/* <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => { markAsRead(filteredMessages.map(m => m.id)); handleMenuClose(); }}>
                <MarkAsUnreadIcon sx={{ mr: 1 }} /> Mark all as read
              </MenuItem>
              <MenuItem onClick={() => { moveToFolder(filteredMessages.map(m => m.id), 'trash'); handleMenuClose(); }}>
                <DeleteIcon sx={{ mr: 1 }} /> Empty folder
              </MenuItem>
            </Menu> */} 
          </Box>
        </Box>
        
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
      </Paper>

      {/* Toolbar */}
      <Paper elevation={1} sx={{ p: 1, display: 'flex', alignItems: 'center' }}>
        <Checkbox
          indeterminate={selectedMessages.length > 0 && selectedMessages.length < filteredMessages.length}
          checked={filteredMessages.length > 0 && selectedMessages.length === filteredMessages.length}
          onChange={handleSelectAllMessages}
        />
        
        {selectedMessages.length > 0 ? (
          <>
            <Tooltip title="Mark as read">
              <IconButton onClick={() => markAsRead(selectedMessages)}>
                <MarkAsUnreadIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Archive">
              <IconButton onClick={() => moveToFolder(selectedMessages, 'archive')}>
                <ArchiveIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton onClick={() => moveToFolder(selectedMessages, 'trash')}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Mark as unread">
              <IconButton onClick={() => markAsRead(selectedMessages)}>
                <WatchLaterIcon />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <>
            <Tooltip title="Refresh">
              <IconButton>
                <RefreshIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="More options">
              <IconButton>
                <MoreIcon />
              </IconButton>
            </Tooltip>
          </>
        )}
      </Paper>

      {/* Message list */}
      <Paper elevation={0} sx={{ flex: 1, overflow: 'auto' }}>
        <List sx={{ p: 0 }}>
          {filteredMessages.map((message) => (
            <React.Fragment key={message.id}>
              <ListItem 
                button 
                selected={selectedMessages.includes(message.id)}
                sx={{
                  '&:hover': { backgroundColor: theme.palette.action.hover },
                  backgroundColor: message.status === 'unread' ? theme.palette.action.selected : 'inherit',
                  borderLeft: message.labels?.includes('important') ? `4px solid ₹{theme.palette.error.main}` : 'none'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                    <Checkbox
                      checked={selectedMessages.includes(message.id)}
                      onChange={() => handleSelectMessage(message.id)}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <IconButton onClick={(e) => toggleStarred(message.id, e)}>
                      {message.starred ? (
                        <StarIcon color="warning" />
                      ) : (
                        <StarBorderIcon />
                      )}
                    </IconButton>
                  </Box>
                  
                  <ListItemAvatar sx={{ minWidth: 'auto', mr: 2 }}>
                    <Avatar sx={{ 
                      bgcolor: theme.palette.primary.main,
                      width: 32,
                      height: 32,
                      fontSize: '0.875rem'
                    }}>
                      {message.avatar}
                    </Avatar>
                  </ListItemAvatar>
                  
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography 
                          variant="subtitle2" 
                          noWrap 
                          sx={{ 
                            fontWeight: message.status === 'unread' ? 'bold' : 'normal',
                            mr: 2
                          }}
                        >
                          {message.sender}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          {message.time}
                        </Typography>
                      </Box>
                    }
                    secondary={
                      <>
                        <Typography 
                          variant="body2" 
                          noWrap 
                          sx={{ 
                            fontWeight: message.status === 'unread' ? 'bold' : 'normal'
                          }}
                        >
                          {message.subject}
                        </Typography>
                        <Typography variant="body2" noWrap color="textSecondary">
                          {message.preview}
                        </Typography>
                      </>
                    }
                    sx={{ my: 0 }}
                  />
                  
                  <Box sx={{ display: 'flex', ml: 2 }}>
                    {message.labels?.map(label => (
                      <Chip
                        key={label}
                        label={label}
                        size="small"
                        sx={{ ml: 0.5 }}
                        icon={<LabelIcon fontSize="small" />}
                      />
                    ))}
                    {message.status === 'unread' && (
                      <Badge color="primary" variant="dot" sx={{ ml: 1 }} />
                    )}
                  </Box>
                </Box>
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </Paper>

      {/* Status bar */}
      <Paper elevation={1} sx={{ p: 1 }}>
        <Typography variant="caption" color="textSecondary">
          {filteredMessages.length} messages
        </Typography>
      </Paper>
    </Box>
  );
};

export default MessageInbox;