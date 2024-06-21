import React from 'react';
import { Grid, Paper } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled(Paper)`
  padding: 20px;
  text-align: center;
  cursor: pointer;
`;

const Containerpage = () => {
  const history = useNavigate();

  const handleContainerClick = (containerNumber) => {
    history(`/pdfList${containerNumber}`);
  };

  return (
    <div style={{ height: '400px', overflow: 'auto', scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <StyledContainer onClick={() => handleContainerClick(1)}>
            <h2>Year 1</h2>
            <p>Get your Question Bank</p>
          </StyledContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledContainer onClick={() => handleContainerClick(2)}>
            <h2>Year 2</h2>
            <p>Get your Question Bank</p>
          </StyledContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledContainer onClick={() => handleContainerClick(3)}>
            <h2>Year 3</h2>
            <p>Get your Question Bank</p>
          </StyledContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledContainer onClick={() => handleContainerClick(4)}>
            <h2>Year 4</h2>
            <p>Get your Question Bank</p>
          </StyledContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default Containerpage;



// import React from 'react';
// import { Grid, Paper } from '@mui/material';
// import styled from 'styled-components';
// import { useNavigate} from 'react-router-dom';

// const StyledContainer = styled(Paper)`
//   padding: 20px;
//   text-align: center;
//   cursor: pointer;
// `;

// const Containerpage = () => {
//   const history = useNavigate();

//   const handleContainerClick = (containerNumber) => {
//     history(`/pdfList${containerNumber}`);
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} md={6}>
//         <StyledContainer onClick={() => handleContainerClick(1)}>
//           <h2>Year 1</h2>
//           <p>Get your Question Bank</p>
//         </StyledContainer>
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <StyledContainer onClick={() => handleContainerClick(2)}>
//           <h2>Year 2</h2>
//           <p>Get your Question Bank</p>
//         </StyledContainer>
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <StyledContainer onClick={() => handleContainerClick(3)}>
//           <h2>Year 3</h2>
//           <p>Get your Question Bank</p>
//         </StyledContainer>
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <StyledContainer onClick={() => handleContainerClick(4)}>
//           <h2>Year 4</h2>
//           <p>Get your Question Bank</p>
//         </StyledContainer>
//       </Grid>
//     </Grid>
//   );
// };

// export default Containerpage;
