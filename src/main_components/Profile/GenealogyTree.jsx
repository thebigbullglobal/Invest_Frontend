

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { 
//   Box, 
//   Typography, 
//   TextField, 
//   Button,
//   Paper,
//   Avatar,
//   IconButton,
//   CircularProgress,
//   InputAdornment,
//   useTheme,
//   Alert
// } from '@mui/material';
// import { 
//   Search as SearchIcon,
//   Refresh as RefreshIcon,
//   AccountTree as TreeIcon,
//   ExpandMore as ExpandMoreIcon,
//   ChevronRight as ChevronRightIcon,
//   LocalGasStationRounded
// } from '@mui/icons-material';

// const GenericTree = ({
//   data = [],
//   rootId = 1,
//   idKey = 'user_id',
//   parentKey = 'parent_id',
//   displayKey = 'username',
//   searchEnabled = true,
//   onNodeClick,
//   renderNodeContent,
//   loading,
//   error
// }) => {
//   const theme = useTheme();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [treeData, setTreeData] = useState(null);
//   const [expandedNodes, setExpandedNodes] = useState(new Set([rootId]));

//   // Build generic tree structure
//   // const buildTree = (items, parentId = rootId) => {
//   //   return items
//   //     .filter(item => item[parentKey] === parentId)
//   //     .map(item => ({
//   //       ...item,
//   //       children: buildTree(items, item[idKey])
//   //     }));
//   // };

//   const buildTree = (items, parentId = rootId) => {
//     // If parentId doesn't exist in data, find the highest available parent
//     if (!items.some(item => item[parentKey] === parentId) && items.length > 0) {
//       // Find minimal parent_id that exists in our data
//       const minParent = Math.min(...items.map(item => item[parentKey]));
//       parentId = minParent;
//     }
  
//     return items
//       .filter(item => item[parentKey] === parentId)
//       .map(item => ({
//         ...item,
//         children: buildTree(items, item[idKey])
//       }));
//   };

//   useEffect(() => {
//     if (data && data.length > 0) {
//       setTreeData(buildTree(data));
//     }
//   }, [data]);

//   const toggleNode = (nodeId) => {
//     const newExpanded = new Set(expandedNodes);
//     newExpanded.has(nodeId) ? newExpanded.delete(nodeId) : newExpanded.add(nodeId);
//     setExpandedNodes(newExpanded);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Implement search functionality as needed
//   };

//   const handleReset = () => {
//     setSearchTerm('');
//     setExpandedNodes(new Set([rootId]));
//   };

//   const expandAll = () => {
//     const allNodeIds = data.map(item => item[idKey]);
//     setExpandedNodes(new Set(allNodeIds));
//   };

//   const collapseAll = () => {
//     setExpandedNodes(new Set([rootId]));
//   };

//   const defaultRenderNode = (node, { isRoot, hasChildren, isExpanded, level }) => (
//     <Box sx={{
//       display: 'flex',
//       alignItems: 'center',
//       p: 1.5,
//       bgcolor: isRoot ? theme.palette.primary.light : theme.palette.grey[100],
//       borderRadius: 2,
//       border: `1px solid ₹{isRoot ? theme.palette.primary.main : theme.palette.grey[300]}`,
//       boxShadow: theme.shadows[1],
//       width: 'fit-content',
//       minWidth: 200,
//       cursor: 'pointer',
//       '&:hover': {
//         backgroundColor: theme.palette.action.hover
//       }
//     }}>
//       {hasChildren ? (
//         <IconButton 
//           size="small" 
//           onClick={(e) => {
//             e.stopPropagation();
//             toggleNode(node[idKey]);
//           }}
//           sx={{ mr: 1 }}
//         >
//           {isExpanded ? (
//             <ExpandMoreIcon color="primary" />
//           ) : (
//             <ChevronRightIcon color="primary" />
//           )}
//         </IconButton>
//       ) : (
//         <Box sx={{ width: 40 }} />
//       )}

//       <Avatar sx={{ 
//         width: 32, 
//         height: 32, 
//         bgcolor: isRoot ? theme.palette.primary.main : theme.palette.secondary.main,
//         mr: 2,
//         fontSize: '0.875rem'
//       }}>
//         {node[displayKey]?.charAt(0) || '?'}
//       </Avatar>

//       <Box>
//         <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
//           {node[displayKey] || `Node ₹{node[idKey]}`}
//         </Typography>
//         <Typography variant="caption" color="textSecondary">
//           ID: {node[idKey]}
//         </Typography>
//       </Box>
//     </Box>
//   );

//   const renderNode = (node, level = 0) => {
//     const hasChildren = node.children && node.children.length > 0;
//     const isExpanded = expandedNodes.has(node[idKey]);
//     const isRoot = node[idKey] === rootId;

//     return (
//       <Box 
//         key={node[idKey]} 
//         sx={{ 
//           position: 'relative',
//           pl: level === 0 ? 0 : 4,
//           mb: 1
//         }}
//         onClick={() => onNodeClick && onNodeClick(node)}
//       >
//         {/* Horizontal connector */}
//         {level > 0 && (
//           <Box sx={{
//             position: 'absolute',
//             left: 20,
//             top: 24,
//             width: 16,
//             height: 2,
//             bgcolor: theme.palette.grey[300]
//           }} />
//         )}

//         {/* Node content */}
//         {renderNodeContent 
//           ? renderNodeContent(node, { isRoot, hasChildren, isExpanded, level })
//           : defaultRenderNode(node, { isRoot, hasChildren, isExpanded, level })}

//         {/* Children */}
//         {hasChildren && isExpanded && (
//           <Box sx={{ 
//             position: 'relative',
//             pl: 4,
//             borderLeft: `2px dashed ₹{theme.palette.grey[300]}`,
//             ml: 2
//           }}>
//             {node.children.map(child => renderNode(child, level + 1))}
//           </Box>
//         )}
//       </Box>
//     );
//   };

//   return (
//     <Box sx={{ 
//       maxWidth: '100%', 
//       mx: 'auto', 
//       my: 4,
//       p: 3
//     }}>
//       <Typography variant="h4" sx={{ 
//         mb: 3, 
//         fontWeight: 'bold', 
//         display: 'flex',
//         alignItems: 'center',
//         gap: 2
//       }}>
//         <TreeIcon fontSize="large" />
//         Network Genealogy Tree
//       </Typography>

//       {searchEnabled && (
//         <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
//           <Box component="form" onSubmit={handleSearch} sx={{ 
//             display: 'flex', 
//             gap: 2,
//             alignItems: 'center',
//             flexWrap: 'wrap'
//           }}>
//             <TextField
//               size="small"
//               label="Search nodes"
//               variant="outlined"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               sx={{ flexGrow: 1, maxWidth: 300 }}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <SearchIcon color="action" />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <Button 
//               type="submit" 
//               variant="contained" 
//               color="primary"
//               startIcon={<SearchIcon />}
//               disabled={loading}
//             >
//               Search
//             </Button>
//             <Button 
//               variant="outlined" 
//               color="secondary"
//               startIcon={<RefreshIcon />}
//               onClick={handleReset}
//               disabled={loading}
//             >
//               Reset
//             </Button>
//             <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
//               <Button 
//                 variant="text" 
//                 size="small"
//                 onClick={expandAll}
//                 disabled={loading || error}
//               >
//                 Expand All
//               </Button>
//               <Button 
//                 variant="text" 
//                 size="small"
//                 onClick={collapseAll}
//                 disabled={loading || error}
//               >
//                 Collapse All
//               </Button>
//             </Box>
//           </Box>
//         </Paper>
//       )}

//       <Paper elevation={3} sx={{ p: 3, borderRadius: 2, minHeight: 400 }}>
//         {loading ? (
//           <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
//             <CircularProgress />
//           </Box>
//         ) : error ? (
//           <Alert severity="error" sx={{ m: 2 }}>
//             Error loading tree data: {error.message}
//           </Alert>
//         ) : treeData && treeData.length > 0 ? (
//           <Box sx={{ overflowX: 'auto', py: 2 }}>
//             {treeData.map(node => renderNode(node))}
//           </Box>
//         ) : (
//           <Typography sx={{ p: 4, textAlign: 'center' }}>
//             No data available
//           </Typography>
//         )}
//       </Paper>
//     </Box>
//   );
// };

// const GenealogyTree = () => {
//   const [treeData, setTreeData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const fetchTreeData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/users/getuser',{
//           headers: {
//             'Authorization': `Bearer ${token}`,  
//             'Content-Type': 'application/json'
//         }
//         });
        
//         if (response.data && response.data.data) {
//           console.log("response data is ",response.data.data);
//           setTreeData(response.data.data);
//         } else {
//           throw new Error('Invalid data format received from server');
//         }
//       } catch (error) {
//         console.error("Error fetching tree data:", error);
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTreeData();
//   }, []);

//   return (
//     <GenericTree
//       data={treeData}
//       rootId={1}
//       idKey="user_id"
//       parentKey="parent_id"
//       displayKey="username"
//       loading={loading}
//       error={error}
//       onNodeClick={(node) => console.log('Node clicked:', node)}
//     />
//   );
// };

// export default GenealogyTree;






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Box, 
  Typography, 
  TextField, 
  Button,
  Paper,
  Avatar,
  IconButton,
  CircularProgress,
  InputAdornment,
  useTheme,
  Alert
} from '@mui/material';
import { 
  Search as SearchIcon,
  Refresh as RefreshIcon,
  AccountTree as TreeIcon,
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';

const GenericTree = ({
  data = [],
  rootId = 1,
  idKey = 'user_id',
  parentKey = 'parent_id',
  displayKey = 'username',
  searchEnabled = true,
  onNodeClick,
  renderNodeContent,
  loading,
  error
}) => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [treeData, setTreeData] = useState(null);
  const [expandedNodes, setExpandedNodes] = useState(new Set());

  // Modified buildTree to handle incomplete hierarchies
  const buildTree = (items, parentId = rootId) => {
    // If we don't have the requested parent in our data,
    // find the earliest ancestor we do have
    if (!items.some(item => item[idKey] === parentId) && items.length > 0) {
      // Find all parent_ids that exist in our items
      const existingParents = new Set(items.map(item => item[parentKey]));
      // Find the minimal parent_id that exists in our data
      const availableParents = items.filter(item => existingParents.has(item[parentKey]));
      if (availableParents.length > 0) {
        parentId = Math.min(...availableParents.map(item => item[parentKey]));
      } else {
        // If no parents exist in our data, use the minimal parent_id
        parentId = Math.min(...items.map(item => item[parentKey]));
      }
    }

    const children = items
      .filter(item => item[parentKey] === parentId)
      .map(item => ({
        ...item,
        children: buildTree(items, item[idKey])
      }));

    // Auto-expand nodes that have children
    if (children.length > 0) {
      setExpandedNodes(prev => new Set(prev).add(parentId));
    }

    return children;
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const builtTree = buildTree(data);
      setTreeData(builtTree);
      
      // If no nodes are expanded (because we have no root), expand the top level
      if (builtTree.length > 0 && expandedNodes.size === 0) {
        setExpandedNodes(new Set([builtTree[0][parentKey]]));
      }
    }
  }, [data]);

  // ... rest of your component code remains the same ...
  const toggleNode = (nodeId) => {
    const newExpanded = new Set(expandedNodes);
    newExpanded.has(nodeId) ? newExpanded.delete(nodeId) : newExpanded.add(nodeId);
    setExpandedNodes(newExpanded);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter tree data based on search term
    if (searchTerm.trim() === '') {
      setTreeData(buildTree(data));
      return;
    }
    
    const filtered = data.filter(item => 
      item[displayKey].toLowerCase().includes(searchTerm.toLowerCase()) ||
      item[idKey].toString().includes(searchTerm)
    );
    
    setTreeData(buildTree(filtered));
  };

  const handleReset = () => {
    setSearchTerm('');
    setTreeData(buildTree(data));
  };

  const expandAll = () => {
    if (!treeData) return;
    const allNodeIds = [];
    const collectIds = (nodes) => {
      nodes.forEach(node => {
        allNodeIds.push(node[idKey]);
        if (node.children) collectIds(node.children);
      });
    };
    collectIds(treeData);
    setExpandedNodes(new Set(allNodeIds));
  };

  const collapseAll = () => {
    if (!treeData || treeData.length === 0) return;
    const rootNodes = treeData.map(node => node[parentKey]);
    setExpandedNodes(new Set(rootNodes));
  };

  const defaultRenderNode = (node, { hasChildren, isExpanded, level }) => (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      p: 1.5,
      bgcolor: level === 0 ? theme.palette.primary.light : theme.palette.grey[100],
      borderRadius: 2,
      border: `1px solid ${level === 0 ? theme.palette.primary.main : theme.palette.grey[300]}`,
      boxShadow: theme.shadows[1],
      width: 'fit-content',
      minWidth: 200,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      }
    }}>
      {hasChildren ? (
        <IconButton 
          size="small" 
          onClick={(e) => {
            e.stopPropagation();
            toggleNode(node[idKey]);
          }}
          sx={{ mr: 1 }}
        >
          {isExpanded ? (
            <ExpandMoreIcon color="primary" />
          ) : (
            <ChevronRightIcon color="primary" />
          )}
        </IconButton>
      ) : (
        <Box sx={{ width: 40 }} />
      )}

      <Avatar sx={{ 
        width: 32, 
        height: 32, 
        bgcolor: level === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
        mr: 2,
        fontSize: '0.875rem'
      }}>
        {node[displayKey]?.charAt(0) || '?'}
      </Avatar>

      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
          {node[displayKey] || `Node ${node[idKey]}`}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          ID: {node[idKey]}
        </Typography>
      </Box>
    </Box>
  );

  const renderNode = (node, level = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(node[idKey]);

    return (
      <Box 
        key={node[idKey]} 
        sx={{ 
          position: 'relative',
          pl: level === 0 ? 0 : 4,
          mb: 1
        }}
        onClick={() => onNodeClick && onNodeClick(node)}
      >
        {/* Horizontal connector */}
        {level > 0 && (
          <Box sx={{
            position: 'absolute',
            left: 20,
            top: 24,
            width: 16,
            height: 2,
            bgcolor: theme.palette.grey[300]
          }} />
        )}

        {/* Node content */}
        {renderNodeContent 
          ? renderNodeContent(node, { hasChildren, isExpanded, level })
          : defaultRenderNode(node, { hasChildren, isExpanded, level })}

        {/* Children */}
        {hasChildren && isExpanded && (
          <Box sx={{ 
            position: 'relative',
            pl: 4,
            borderLeft: `2px dashed ${theme.palette.grey[300]}`,
            ml: 2
          }}>
            {node.children.map(child => renderNode(child, level + 1))}
          </Box>
        )}
      </Box>
    );
  };

  return (
    <Box sx={{ 
      maxWidth: '100%', 
      mx: 'auto', 
      my: 4,
      p: 3
    }}>
      <Typography variant="h4" sx={{ 
        mb: 3, 
        fontWeight: 'bold', 
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <TreeIcon fontSize="large" />
        Network Genealogy Tree
      </Typography>

      {searchEnabled && (
        <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
          <Box component="form" onSubmit={handleSearch} sx={{ 
            display: 'flex', 
            gap: 2,
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <TextField
              size="small"
              label="Search nodes"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ flexGrow: 1, maxWidth: 300 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary"
              startIcon={<SearchIcon />}
              disabled={loading}
            >
              Search
            </Button>
            <Button 
              variant="outlined" 
              color="secondary"
              startIcon={<RefreshIcon />}
              onClick={handleReset}
              disabled={loading}
            >
              Reset
            </Button>
            <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
              <Button 
                variant="text" 
                size="small"
                onClick={expandAll}
                disabled={loading || error || !treeData}
              >
                Expand All
              </Button>
              <Button 
                variant="text" 
                size="small"
                onClick={collapseAll}
                disabled={loading || error || !treeData}
              >
                Collapse All
              </Button>
            </Box>
          </Box>
        </Paper>
      )}

      <Paper elevation={3} sx={{ p: 3, borderRadius: 2, minHeight: 400 }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error" sx={{ m: 2 }}>
            Error loading tree data: {error.message}
          </Alert>
        ) : treeData && treeData.length > 0 ? (
          <Box sx={{ overflowX: 'auto', py: 2 }}>
            {treeData.map(node => renderNode(node))}
          </Box>
        ) : (
          <Typography sx={{ p: 4, textAlign: 'center' }}>
            No data available
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

const GenealogyTree = () => {
  const [treeData, setTreeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchTreeData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/users/getuser', {
          headers: {
            'Authorization': `Bearer ${token}`,  
            'Content-Type': 'application/json'
          }
        });
        
       
        console.log("response for getuser data",response.data);

        if (response.data && response.data.data) {
          console.log("response data is ", response.data.data);
          // Ensure we have at least one node with parent_id === 1 (root)
          // If not, we'll let the GenericTree handle it
          setTreeData(response.data.data);
        } else {
          throw new Error('Invalid data format received from server');
        }
      } catch (error) {
        console.error("Error fetching tree data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTreeData();
  }, []);

  return (
    <GenericTree
      data={treeData}
      rootId={1}
      idKey="user_id"
      parentKey="parent_id"
      displayKey="username"
      loading={loading}
      error={error}
      onNodeClick={(node) => console.log('Node clicked:', node)}
    />
  );
};

export default GenealogyTree;