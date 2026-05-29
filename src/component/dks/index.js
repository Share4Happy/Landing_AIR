// 'use client'

// import { useState } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import BookmarksIcon from '@mui/icons-material/Bookmarks';
// import CircularProgress from '@mui/material/CircularProgress';
// import Backdrop from '@mui/material/Backdrop';
// import style from './index.module.css';

// export default function CommentOAI() {
//   const [open, setOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const [parentName, setParentName] = useState('');
//   const [studentName, setStudentName] = useState('');
//   const [contact, setContact] = useState('');

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleSubmit = async () => {
//     setIsLoading(true);
//     try {
//       await fetch(`https://script.google.com/macros/s/AKfycbzMSk0nYYFl95QJ_zuH7KHxVHYBAX0LPQciiXxyncIGNs2IrDdCpTEV0HxxNfpIR7ezWg/exec?nameph=${parentName}&phone=${contact}&namehs=${studentName}`)
//       setIsLoading(false);
//     } catch (error) { setIsLoading(false); }
//     setIsLoading(false);
//     handleClose();
//   };

//   return (
//     <>
//       <Box
//         onClick={handleClickOpen}
//         className={style.button}
//         sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//       >
//         <BookmarksIcon />
//       </Box>
//       <Dialog
//         fullWidth
//         maxWidth="sm"
//         open={open}
//         onClose={handleClose}
//       >
//         <Box>
//           <Box
//             sx={{
//               p: 2,
//               borderBottom: 'thin solid var(--background_1)',
//               fontWeight: 600,
//               fontSize: 18,
//             }}
//           >
//             Thông tin khách hàng trải nghiệm
//           </Box>

//           <Box sx={{ p: 2 }}>
//             <TextField
//               size='small'
//               fullWidth
//               label="Tên phụ huynh"
//               variant="outlined"
//               value={parentName}
//               onChange={(e) => setParentName(e.target.value)}
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               size='small'
//               fullWidth
//               label="Tên học sinh"
//               variant="outlined"
//               value={studentName}
//               onChange={(e) => setStudentName(e.target.value)}
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               size='small'
//               fullWidth
//               label="Liên hệ"
//               variant="outlined"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//               sx={{ mb: 2 }}
//             />
//           </Box>

//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'end',
//               p: 2,
//               py: 1,
//               borderTop: 'thin solid var(--background_1)',
//               gap: 1,
//             }}
//           >
//             <Button onClick={handleClose}>Thoát</Button>
//             <Button onClick={handleSubmit} variant="contained">
//               Gửi thông tin
//             </Button>
//           </Box>
//         </Box>
//         <Backdrop
//           sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//           open={isLoading}
//         >
//           <CircularProgress color="inherit" />
//         </Backdrop>
//       </Dialog>
//     </>
//   );
// }
