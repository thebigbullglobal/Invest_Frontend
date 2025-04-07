// import React, { useState, useEffect } from 'react';
// import { 
//   Box, 
//   Typography, 
//   TextField, 
//   Button,
//   Paper,
//   Avatar,
//   IconButton,
//   Tooltip,
//   CircularProgress,
//   Collapse,
//   InputAdornment 
// } from '@mui/material';
// import { 
//   Search as SearchIcon,
//   Refresh as RefreshIcon,
//   AccountTree as TreeIcon,
//   Person as PersonIcon,
//   ExpandMore as ExpandMoreIcon,
//   ChevronRight as ChevronRightIcon,
//   FiberManualRecord as NodeIcon
// } from '@mui/icons-material';
// import { useTheme } from '@mui/material/styles';

// const GenealogyTree = () => {
//   const theme = useTheme();
//   const [searchId, setSearchId] = useState('');
//   const [treeData, setTreeData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [expandedNodes, setExpandedNodes] = useState(new Set([1])); // Start with root expanded

//   // Mock API call - replace with actual API call
//   const fetchTreeData = async (userId = '') => {
//     setLoading(true);
//     try {
//       // Simulate API delay
//       await new Promise(resolve => setTimeout(resolve, 800));
      
//       // This would be your actual API call in production
//       // const response = await fetch(`/api/genealogy?userId=₹{userId}`);
//       // const data = await response.json();
      
//       // Mock response based on your data
//       const mockData = {
//         message: "✅ Descendants found",
//         data: [
//           { user_id: 2, username: "admin1", parent_id: 1 },
//           { user_id: 4, username: "admin2", parent_id: 1 },
//           { user_id: 7, username: "newchild", parent_id: 2 },
//           { user_id: 8, username: "secondchild", parent_id: 2 },
//           { user_id: 9, username: "ankituser", parent_id: 2 },
//           { user_id: 12, username: "lastnode", parent_id: 9 },
//           { user_id: 13, username: "ankit", parent_id: 12 },
//         ]
//       };
      
//       setTreeData(buildTree(mockData.data));
//     } catch (error) {
//       console.error("Error fetching tree data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Convert flat array to hierarchical tree structure
//   const buildTree = (data, parentId = 1) => {
//     const nodes = data.filter(item => item.parent_id === parentId);
//     if (nodes.length === 0) return null;
    
//     return nodes.map(node => ({
//       ...node,
//       children: buildTree(data, node.user_id)
//     }));
//   };

//   // Toggle node expansion
//   const toggleNode = (userId) => {
//     const newExpanded = new Set(expandedNodes);
//     if (newExpanded.has(userId)) {
//       newExpanded.delete(userId);
//     } else {
//       newExpanded.add(userId);
//     }
//     setExpandedNodes(newExpanded);
//   };

//   // Handle search submit
//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchTreeData(searchId);
//   };

//   // Reset search
//   const handleReset = () => {
//     setSearchId('');
//     fetchTreeData();
//   };

//   // Render a tree node and its children
//   const renderTreeNode = (node, level = 0) => {
//     if (!node) return null;
    
//     const hasChildren = node.children && node.children.length > 0;
//     const isExpanded = expandedNodes.has(node.user_id);
//     const isRoot = level === 0;

//     return (
//       <Box key={node.user_id} sx={{ 
//         position: 'relative',
//         pl: level === 0 ? 0 : 4,
//         mb: 1
//       }}>
//         {/* Horizontal connector for non-root nodes */}
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
//         <Box sx={{
//           display: 'flex',
//           alignItems: 'center',
//           p: 1,
//           bgcolor: isRoot ? theme.palette.primary.light : theme.palette.grey[100],
//           borderRadius: 2,
//           border: `1px solid ₹{theme.palette.grey[300]}`,
//           '&:hover': {
//             boxShadow: theme.shadows[1]
//           }
//         }}>
//           {hasChildren ? (
//             <IconButton 
//               size="small" 
//               onClick={() => toggleNode(node.user_id)}
//               sx={{ mr: 1 }}
//             >
//               {isExpanded ? (
//                 <ExpandMoreIcon color="primary" />
//               ) : (
//                 <ChevronRightIcon color="primary" />
//               )}
//             </IconButton>
//           ) : (
//             <Box sx={{ width: 40, display: 'flex', justifyContent: 'center' }}>
//               <NodeIcon fontSize="small" color="disabled" />
//             </Box>
//           )}

//           <Avatar sx={{ 
//             width: 32, 
//             height: 32, 
//             bgcolor: isRoot ? theme.palette.primary.main : theme.palette.secondary.main,
//             mr: 2,
//             fontSize: '0.875rem'
//           }}>
//             {node.username.charAt(0).toUpperCase()}
//           </Avatar>

//           <Box sx={{ flexGrow: 1 }}>
//             <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
//               {node.username}
//             </Typography>
//             <Typography variant="caption" color="textSecondary">
//               ID: {node.user_id}
//             </Typography>
//           </Box>

//           <Tooltip title="View Profile">
//             <IconButton size="small">
//               <PersonIcon fontSize="small" />
//             </IconButton>
//           </Tooltip>
//         </Box>

//         {/* Children */}
//         {hasChildren && (
//           <Collapse in={isExpanded} timeout="auto" unmountOnExit>
//             <Box sx={{ 
//               position: 'relative',
//               pl: 4,
//               borderLeft: `2px dashed ₹{theme.palette.grey[300]}`,
//               ml: 2
//             }}>
//               {node.children.map(child => renderTreeNode(child, level + 1))}
//             </Box>
//           </Collapse>
//         )}
//       </Box>
//     );
//   };

//   // Initial data load
//   useEffect(() => {
//     fetchTreeData();
//   }, []);

//   return (
//     <Box sx={{ 
//       maxWidth: 1200, 
//       mx: 'auto', 
//       my: 4,
//       p: 3
//     }}>
//       <Typography variant="h4" sx={{ 
//         mb: 3, 
//         fontWeight: 'bold', 
//         color: 'text.primary',
//         display: 'flex',
//         alignItems: 'center',
//         gap: 2
//       }}>
//         <TreeIcon fontSize="large" />
//         Network Genealogy Tree
//       </Typography>

//       <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
//         <Box component="form" onSubmit={handleSearch} sx={{ 
//           display: 'flex', 
//           gap: 2,
//           alignItems: 'center',
//           flexWrap: 'wrap'
//         }}>
//           <TextField
//             size="small"
//             label="Enter Associate ID"
//             variant="outlined"
//             value={searchId}
//             onChange={(e) => setSearchId(e.target.value)}
//             sx={{ flexGrow: 1, maxWidth: 300 }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon color="action" />
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <Button 
//             type="submit" 
//             variant="contained" 
//             color="primary"
//             startIcon={<SearchIcon />}
//             disabled={loading}
//           >
//             Search
//           </Button>
//           <Button 
//             variant="outlined" 
//             color="secondary"
//             startIcon={<RefreshIcon />}
//             onClick={handleReset}
//             disabled={loading}
//           >
//             Reset
//           </Button>
//         </Box>
//       </Paper>

//       <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
//         {loading ? (
//           <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
//             <CircularProgress />
//           </Box>
//         ) : treeData ? (
//           <Box sx={{ 
//             overflowX: 'auto',
//             py: 2,
//             minHeight: 400
//           }}>
//             {/* Root node */}
//             <Box sx={{
//               display: 'inline-flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               mb: 2,
//               p: 2,
//               bgcolor: theme.palette.grey[100],
//               borderRadius: 2,
//               border: `2px solid ₹{theme.palette.primary.main}`
//             }}>
//               <Avatar sx={{ 
//                 width: 48, 
//                 height: 48, 
//                 bgcolor: theme.palette.primary.main,
//                 mb: 1
//               }}>
//                 R
//               </Avatar>
//               <Typography variant="subtitle1" fontWeight="bold">
//                 ROOT
//               </Typography>
//             </Box>

//             {/* Tree structure */}
//             <Box sx={{ 
//               display: 'flex',
//               flexDirection: 'column',
//               gap: 1
//             }}>
//               {treeData.map(node => renderTreeNode(node))}
//             </Box>
//           </Box>
//         ) : (
//           <Typography sx={{ p: 4, textAlign: 'center' }}>
//             No data available. Try searching for a different ID.
//           </Typography>
//         )}
//       </Paper>
//     </Box>
//   );
// };

// export default GenealogyTree;










// import React, { useState, useEffect } from 'react';
// import { 
//   Box, 
//   Typography, 
//   TextField, 
//   Button,
//   Paper,
//   Avatar,
//   IconButton,
//   Tooltip,
//   CircularProgress,
//   InputAdornment,
//   useTheme
// } from '@mui/material';
// import { 
//   Search as SearchIcon,
//   Refresh as RefreshIcon,
//   AccountTree as TreeIcon,
//   Person as PersonIcon,
//   ExpandMore as ExpandMoreIcon,
//   ChevronRight as ChevronRightIcon
// } from '@mui/icons-material';

// const GenealogyTree = () => {
//   const theme = useTheme();
//   const [searchId, setSearchId] = useState('');
//   const [treeData, setTreeData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [expandedNodes, setExpandedNodes] = useState(new Set([1]));

//   // Mock data - replace with actual API call
//   const mockData = [
//     { user_id: 1, username: "ROOT", parent_id: null },
//     { user_id: 2, username: "admin1", parent_id: 1 },
//     { user_id: 4, username: "admin2", parent_id: 1 },
//     { user_id: 7, username: "newchild", parent_id: 2 },
//     { user_id: 8, username: "secondchild", parent_id: 2 },
//     { user_id: 9, username: "ankituser", parent_id: 2 },
//     { user_id: 12, username: "lastnode", parent_id: 9 },
//     { user_id: 13, username: "ankit", parent_id: 12 },
//   ];

//   // Build tree structure
//   const buildTree = (data, parentId = 1) => {
//     return data
//       .filter(item => item.parent_id === parentId)
//       .map(item => ({
//         ...item,
//         children: buildTree(data, item.user_id)
//       }));
//   };

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setTreeData(buildTree(mockData));
//       setLoading(false);
//     }, 500);
//   }, []);

//   const toggleNode = (userId) => {
//     const newExpanded = new Set(expandedNodes);
//     newExpanded.has(userId) ? newExpanded.delete(userId) : newExpanded.add(userId);
//     setExpandedNodes(newExpanded);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Search functionality would go here
//   };

//   const handleReset = () => {
//     setSearchId('');
//     // Reset functionality would go here
//   };

//   const renderNode = (node, level = 0) => {
//     const hasChildren = node.children && node.children.length > 0;
//     const isExpanded = expandedNodes.has(node.user_id);
//     const isRoot = node.user_id === 1;

//     return (
//       <Box key={node.user_id} sx={{ 
//         position: 'relative',
//         pl: level === 0 ? 0 : 4,
//         mb: 1
//       }}>
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
//         <Box sx={{
//           display: 'flex',
//           alignItems: 'center',
//           p: 1.5,
//           bgcolor: isRoot ? theme.palette.primary.light : theme.palette.grey[100],
//           borderRadius: 2,
//           border: `1px solid ₹{isRoot ? theme.palette.primary.main : theme.palette.grey[300]}`,
//           boxShadow: theme.shadows[1],
//           width: 'fit-content',
//           minWidth: 200
//         }}>
//           {hasChildren ? (
//             <IconButton 
//               size="small" 
//               onClick={() => toggleNode(node.user_id)}
//               sx={{ mr: 1 }}
//             >
//               {isExpanded ? (
//                 <ExpandMoreIcon color="primary" />
//               ) : (
//                 <ChevronRightIcon color="primary" />
//               )}
//             </IconButton>
//           ) : (
//             <Box sx={{ width: 40 }} />
//           )}

//           <Avatar sx={{ 
//             width: 32, 
//             height: 32, 
//             bgcolor: isRoot ? theme.palette.primary.main : theme.palette.secondary.main,
//             mr: 2,
//             fontSize: '0.875rem'
//           }}>
//             {node.username.charAt(0)}
//           </Avatar>

//           <Box>
//             <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
//               {node.username}
//             </Typography>
//             <Typography variant="caption" color="textSecondary">
//               ID: {node.user_id}
//             </Typography>
//           </Box>
//         </Box>

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

//       <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
//         <Box component="form" onSubmit={handleSearch} sx={{ 
//           display: 'flex', 
//           gap: 2,
//           alignItems: 'center'
//         }}>
//           <TextField
//             size="small"
//             label="Enter Associate ID"
//             variant="outlined"
//             value={searchId}
//             onChange={(e) => setSearchId(e.target.value)}
//             sx={{ flexGrow: 1, maxWidth: 300 }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon color="action" />
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <Button 
//             type="submit" 
//             variant="contained" 
//             color="primary"
//             startIcon={<SearchIcon />}
//             disabled={loading}
//           >
//             Search
//           </Button>
//           <Button 
//             variant="outlined" 
//             color="secondary"
//             startIcon={<RefreshIcon />}
//             onClick={handleReset}
//             disabled={loading}
//           >
//             Reset
//           </Button>
//         </Box>
//       </Paper>

//       <Paper elevation={3} sx={{ p: 3, borderRadius: 2, minHeight: 400 }}>
//         {loading ? (
//           <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
//             <CircularProgress />
//           </Box>
//         ) : treeData ? (
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

// export default GenealogyTree;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import { 
//   Box, 
//   Typography, 
//   TextField, 
//   Button,
//   Paper,
//   Avatar,
//   IconButton,
//   Tooltip,
//   CircularProgress,
//   InputAdornment,
//   useTheme
// } from '@mui/material';
// import { 
//   Search as SearchIcon,
//   Refresh as RefreshIcon,
//   AccountTree as TreeIcon,
//   Person as PersonIcon,
//   ExpandMore as ExpandMoreIcon,
//   ChevronRight as ChevronRightIcon
// } from '@mui/icons-material';

// const GenericTree = ({
//   data = [],
//   rootId = 1,
//   idKey = 'user_id',
//   parentKey = 'parent_id',
//   displayKey = 'username',
//   searchEnabled = true,
//   onNodeClick,
//   renderNodeContent
// }) => {
//   const theme = useTheme();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [treeData, setTreeData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [expandedNodes, setExpandedNodes] = useState(new Set([rootId]));

//   // Build generic tree structure
//   const buildTree = (items, parentId = rootId) => {
//     return items
//       .filter(item => item[parentKey] === parentId)
//       .map(item => ({
//         ...item,
//         children: buildTree(items, item[idKey])
//       }));
//   };

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setTreeData(buildTree(data));
//       setLoading(false);
//     }, 500);
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
//         Tree Visualization
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
//               >
//                 Expand All
//               </Button>
//               <Button 
//                 variant="text" 
//                 size="small"
//                 onClick={collapseAll}
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
//         ) : treeData ? (
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

// // Example usage with your data structure
// const GenealogyTree = () => {


//     const [mockData,setMockedData] = useState([]);

   

//     useEffect(()=>{
//           const fetchTreeData = async ()=>{
//               let name = 'root';
//                try{
//                       const response = await axios.get('http://localhost:8000/users/getuser',{   params: { username: name } });
//                       setMockedData(response.data.data);
//                      // console.log("resposne data is ",response.data.data);
//                }
//                catch(error){
//                  console.log("error",error.message);
//                }

//           }
//           fetchTreeData();
//     },[])




// //   const mockData = [
// //     { user_id: 1, username: "ROOT", parent_id: null },
// //     { user_id: 2, username: "admin1", parent_id: 1 },
// //     { user_id: 4, username: "admin2", parent_id: 1 },
// //     { user_id: 7, username: "newchild", parent_id: 2 },
// //     { user_id: 8, username: "secondchild", parent_id: 2 },
// //     { user_id: 9, username: "ankituser", parent_id: 2 },
// //     { user_id: 12, username: "lastnode", parent_id: 9 },
// //     { user_id: 13, username: "ankit", parent_id: 12 },
// //   ];






//   return (
//     <GenericTree
//       data={mockData}
//       rootId={1}
//       idKey="user_id"
//       parentKey="parent_id"
//       displayKey="username"
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
  const [expandedNodes, setExpandedNodes] = useState(new Set([rootId]));

  // Build generic tree structure
  const buildTree = (items, parentId = rootId) => {
    return items
      .filter(item => item[parentKey] === parentId)
      .map(item => ({
        ...item,
        children: buildTree(items, item[idKey])
      }));
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setTreeData(buildTree(data));
    }
  }, [data]);

  const toggleNode = (nodeId) => {
    const newExpanded = new Set(expandedNodes);
    newExpanded.has(nodeId) ? newExpanded.delete(nodeId) : newExpanded.add(nodeId);
    setExpandedNodes(newExpanded);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality as needed
  };

  const handleReset = () => {
    setSearchTerm('');
    setExpandedNodes(new Set([rootId]));
  };

  const expandAll = () => {
    const allNodeIds = data.map(item => item[idKey]);
    setExpandedNodes(new Set(allNodeIds));
  };

  const collapseAll = () => {
    setExpandedNodes(new Set([rootId]));
  };

  const defaultRenderNode = (node, { isRoot, hasChildren, isExpanded, level }) => (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      p: 1.5,
      bgcolor: isRoot ? theme.palette.primary.light : theme.palette.grey[100],
      borderRadius: 2,
      border: `1px solid ₹{isRoot ? theme.palette.primary.main : theme.palette.grey[300]}`,
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
        bgcolor: isRoot ? theme.palette.primary.main : theme.palette.secondary.main,
        mr: 2,
        fontSize: '0.875rem'
      }}>
        {node[displayKey]?.charAt(0) || '?'}
      </Avatar>

      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
          {node[displayKey] || `Node ₹{node[idKey]}`}
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
    const isRoot = node[idKey] === rootId;

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
          ? renderNodeContent(node, { isRoot, hasChildren, isExpanded, level })
          : defaultRenderNode(node, { isRoot, hasChildren, isExpanded, level })}

        {/* Children */}
        {hasChildren && isExpanded && (
          <Box sx={{ 
            position: 'relative',
            pl: 4,
            borderLeft: `2px dashed ₹{theme.palette.grey[300]}`,
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
                disabled={loading || error}
              >
                Expand All
              </Button>
              <Button 
                variant="text" 
                size="small"
                onClick={collapseAll}
                disabled={loading || error}
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
    const fetchTreeData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/users/getuser', { 
          params: { username: 'root' } 
        });
        
        if (response.data && response.data.data) {
          console.log("response data is ",response.data.data);
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